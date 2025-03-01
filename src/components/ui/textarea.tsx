import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-600 border-input bg-transparent px-3 py-2 text-gray-700 dark:text-gray-300 shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
