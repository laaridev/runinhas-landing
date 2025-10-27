import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gradient"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl",
      outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50",
      ghost: "hover:bg-emerald-50 text-emerald-600",
      gradient: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-2xl hover:scale-105"
    }

    const sizes = {
      default: "h-12 px-6 py-3",
      sm: "h-9 px-4 text-sm",
      lg: "h-14 px-8 py-4 text-lg",
      icon: "h-10 w-10"
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
