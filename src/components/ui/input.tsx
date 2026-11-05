import * as React from "react";
import { cn } from "@/lib/utils";

export const fieldClass =
  "w-full rounded-lg bg-card px-3.5 text-sm text-foreground shadow-inset placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input ref={ref} type={type} className={cn(fieldClass, "h-11", className)} {...props} />
  )
);
Input.displayName = "Input";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(fieldClass, "min-h-[96px] resize-none py-3", className)} {...props} />
  )
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
