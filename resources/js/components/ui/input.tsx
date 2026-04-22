import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full min-w-0 rounded-none border border-slate-200 bg-slate-50 px-4 py-2 text-sm transition-all outline-none placeholder:text-slate-300 disabled:cursor-not-allowed disabled:opacity-50",
        "focus:bg-white focus:border-brand-blue focus:ring-0 focus:shadow-[0_0_0_1px_rgba(0,122,255,0.1)]",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
