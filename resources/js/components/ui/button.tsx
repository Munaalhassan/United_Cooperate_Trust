import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[#0a2540] text-white shadow-sm relative overflow-hidden group border-0",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-14 rounded-md px-10 has-[>svg]:px-4 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const isDefault = variant === "default" || !variant;
    const isOutline = variant === "outline";
    
    // Use white for the hover slide-up background
    const hoverBg = 'bg-white';
    const hoverText = '#0a2540'; // brand-navy

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        {...(props as any)}
      >
        {(isDefault || isOutline) ? (
          <>
            <motion.span 
              className="relative z-10 flex items-center gap-2"
              variants={{
                initial: { color: "inherit" },
                hover: { color: hoverText }
              }}
            >
              {children}
            </motion.span>
            <motion.div 
              className={cn("absolute inset-0 z-0", hoverBg)}
              variants={{
                initial: { y: "100%" },
                hover: { y: 0 },
                tap: { scale: 0.98 }
              }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            />
          </>
        ) : children}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
