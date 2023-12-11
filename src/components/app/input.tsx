import * as React from "react"

import { cn } from "~/lib"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "placeholder:text-muted-foreground focus-visible:ring-ring flex h-12 w-full rounded-[4px] border border-light-05 px-5 pb-[15px] pt-[18px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-dark-08 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-04 dark:bg-dark-03 dark:text-white",
          error?.length ? "border-error-08 dark:border-error-08" : "",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input }
