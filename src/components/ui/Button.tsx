// src/components/ui/Button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { FiLoader } from "react-icons/fi"

const buttonVariants = cva(
  "inline-flex items-center justify-center md:whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:shadow-2xl transform hover:-translate-y-0.5 p-4",
  {
    variants: {
      variant: {
        // Botão primário - Âmbar/Luxo
        default:
          "bg-amber-600 text-white shadow-lg hover:bg-amber-700 focus-visible:ring-amber-500 hover:shadow-xl transform hover:-translate-y-0.5 border border-amber-500",
        
        // Botão secundário - Cinza Sofisticado
        secondary:
          "bg-zinc-800 text-white shadow-sm hover:bg-zinc-900 focus-visible:ring-zinc-500 border border-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-600",
        
        // Botão outline - Elegante
        outline:
          "border-2 border-amber-600 text-amber-600 bg-transparent hover:bg-amber-600 hover:text-white focus-visible:ring-amber-500 dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-500 dark:hover:text-white",
        
        // Botão ghost - Minimalista
        ghost: 
          "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-zinc-500 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",
        
        // Botão link - Simples
        link: 
          "text-amber-800 underline-offset-4 hover:underline focus-visible:ring-amber-500 dark:text-amber-600",
        
        // Botão success - Para confirmações
        success:
          "bg-teal-600 text-white shadow-lg hover:bg-teal-700 focus-visible:ring-teal-500 border border-teal-500",
        
        // Botão danger - Para ações destrutivas
        danger:
          "bg-rose-600 text-white shadow-lg hover:bg-rose-700 focus-visible:ring-rose-500 border border-rose-600 hover:border-rose-700",
      },
      size: {
        xs: "h-8 px-3 text-xs gap-1",
        sm: "h-9 px-4 text-sm rounded-md gap-2",
        default: "h-11 px-6 py-3 rounded-lg gap-2",
        lg: "h-12 px-8 text-base rounded-lg gap-3",
        xl: "h-14 px-10 text-lg rounded-xl gap-3",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      loading: {
        true: "cursor-not-allowed opacity-70",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
      loading: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  loading?: boolean
  loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth,
    loading,
    loadingText,
    asChild = false, 
    href,
    icon,
    iconPosition = "left",
    children,
    disabled,
    ...props 
  }, ref) => {
    
    // Se tiver href, renderiza como Link
    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            buttonVariants({ 
              variant, 
              size, 
              fullWidth, 
              loading: loading || disabled,
              className 
            })
          )}
        >
          {loading ? (
            <>
              <LoadingSpinner />
              {loadingText || children}
            </>
          ) : (
            <>
              {icon && iconPosition === "left" && (
                <span className="shrink-0">{icon}</span>
              )}
              {children}
              {icon && iconPosition === "right" && (
                <span className="shrink-0">{icon}</span>
              )}
            </>
          )}
        </Link>
      )
    }

    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(
          buttonVariants({ 
            variant, 
            size, 
            fullWidth, 
            loading: loading || disabled,
            className 
          })
        )}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {loading ? (
          <>
            <LoadingSpinner />
            {loadingText || children}
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="shrink-0">{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span className="shrink-0">{icon}</span>
            )}
          </>
        )}
      </Comp>
    )
  }
)

// Componente de loading spinner
const LoadingSpinner = () => (
   <FiLoader className="animate-[spin_2s_linear_infinite] h-4 w-4 shrink-0" />
)

Button.displayName = "Button"

export { Button, buttonVariants }