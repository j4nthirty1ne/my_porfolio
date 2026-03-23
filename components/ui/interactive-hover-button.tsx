import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]",
        className
      )}
      {...props}
    >
      {/* Initial state */}
      <span className="relative flex items-center gap-3 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        <Sparkles className="h-5 w-5" />
        {children}
      </span>
      
      {/* Hover state */}
      <span className="absolute left-0 flex h-full w-full -translate-x-12 items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <Sparkles className="h-5 w-5 animate-pulse" />
        {children}
      </span>
    </button>
  )
}
