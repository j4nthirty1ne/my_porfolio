"use client"

import { useState, useEffect } from "react"
import { Home, User, GraduationCap, FolderGit2, Users, Mail } from "lucide-react"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Dock, DockIcon } from "@/components/ui/dock"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const sections = ["home", "about", "education", "projects", "social-activities", "contact"]
          const scrollPosition = currentScrollY + 100

          // Track active section
          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const { offsetTop, offsetHeight } = element
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section)
                break
              }
            }
          }

          // Show/hide based on scroll direction
          if (currentScrollY < 50) {
            setIsVisible(true) // Always show at top
          } else if (currentScrollY > lastScrollY + 5) {
            setIsVisible(false) // Scrolling down - hide
          } else if (currentScrollY < lastScrollY - 5) {
            setIsVisible(true) // Scrolling up - show
          }

          setLastScrollY(currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }
    
    handleScroll() // Call on mount
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "social-activities", label: "Volunteer", icon: Users },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 bg-transparent transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      onMouseEnter={() => setIsVisible(true)}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Desktop Dock Navigation */}
          <div className="hidden md:block">
            <TooltipProvider>
              <Dock direction="middle" className="border-primary/30">
                {navItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <DockIcon key={item.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => scrollToSection(item.id)}
                            aria-label={item.label}
                            className={cn(
                              buttonVariants({ variant: "ghost", size: "icon" }),
                              "size-12 rounded-full",
                              activeSection === item.id
                                ? "bg-primary/20 text-primary"
                                : "text-muted-foreground hover:text-primary"
                            )}
                          >
                            <IconComponent className="size-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    </DockIcon>
                  )
                })}
                <Separator orientation="vertical" className="h-full py-2" />
                <DockIcon>
                  <AnimatedThemeToggler
                    duration={600}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full text-muted-foreground hover:text-primary transition-all duration-300"
                    )}
                  />
                </DockIcon>
              </Dock>
            </TooltipProvider>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div className="flex-1" />
            <div className="flex gap-2 overflow-x-auto items-center">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "p-2 rounded-full transition-all duration-300",
                      activeSection === item.id
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    <IconComponent className="size-5" />
                  </button>
                )
              })}
              <div className="h-6 w-px bg-border mx-1" />
              <AnimatedThemeToggler
                duration={600}
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              />
            </div>
            <div className="flex-1" />
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(0,255,255,0.03)_25px,rgba(0,255,255,0.03)_26px,transparent_27px,transparent_74px,rgba(0,255,255,0.03)_75px,rgba(0,255,255,0.03)_76px,transparent_77px),linear-gradient(rgba(0,255,255,0.03)_24px,transparent_25px,transparent_26px,rgba(0,255,255,0.03)_27px,rgba(0,255,255,0.03)_74px,transparent_75px,transparent_76px,rgba(0,255,255,0.03)_77px)] bg-[length:100px_100px]"></div>
      </div>
    </nav>
  )
}
