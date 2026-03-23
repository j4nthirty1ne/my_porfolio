"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setIsDark(theme === "dark")
  }, [theme])

  const toggleTheme = useCallback(() => {
    if (!buttonRef.current) return

    const applyTheme = () => {
      const newTheme = isDark ? "light" : "dark"
      setTheme(newTheme)
      setIsDark(!isDark)
    }

    if (
      typeof document === "undefined" ||
      !("startViewTransition" in document)
    ) {
      applyTheme()
      return
    }

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme)
    })

    const ready = transition?.ready
    if (ready && typeof ready.then === "function") {
      ready.then(() => {
        const button = buttonRef.current
        if (!button) return

        const { top, left, width, height } = button.getBoundingClientRect()

        const x = left + width / 2
        const y = top + height / 2

        const maxRadius = Math.hypot(
          Math.max(left, window.innerWidth - left),
          Math.max(top, window.innerHeight - top)
        )

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        )
      })
    }
  }, [isDark, duration, setTheme])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {isDark ? (
          <Sun className="transition-all duration-300 ease-in-out animate-in spin-in-180 zoom-in-75" />
        ) : (
          <Moon className="transition-all duration-300 ease-in-out animate-in spin-in-180 zoom-in-75" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
