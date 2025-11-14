// src/components/ui/Button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Link from "next/link"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        // Botão primário - Âmbar/Luxo
        default:
          "bg-amber-600 text-white shadow-lg hover:bg-amber-700 focus-visible:ring-amber-500 hover:shadow-xl transform hover:-translate-y-0.5 border border-amber-600",
        
        // Botão secundário - Cinza Sofisticado
        secondary:
          "bg-gray-800 text-white shadow-sm hover:bg-gray-900 focus-visible:ring-gray-500 border border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600",
        
        // Botão outline - Elegante
        outline:
          "border-2 border-amber-600 text-amber-600 bg-transparent hover:bg-amber-600 hover:text-white focus-visible:ring-amber-500 dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-500 dark:hover:text-white",
        
        // Botão ghost - Minimalista
        ghost: 
          "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
        
        // Botão link - Simples
        link: 
          "text-amber-600 underline-offset-4 hover:underline focus-visible:ring-amber-500 dark:text-amber-400",
        
        // Botão success - Para confirmações
        success:
          "bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 focus-visible:ring-emerald-500 border border-emerald-600",
        
        // Botão danger - Para ações destrutivas
        danger:
          "bg-rose-600 text-white shadow-lg hover:bg-rose-700 focus-visible:ring-rose-500 border border-rose-600",
      },
      size: {
        xs: "h-8 px-3 text-xs rounded-md gap-1",
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
  <svg 
    className="animate-spin h-4 w-4 shrink-0" 
    fill="none" 
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

Button.displayName = "Button"

export { Button, buttonVariants }