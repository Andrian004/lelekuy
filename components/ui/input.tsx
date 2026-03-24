import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-cyan-100/60 backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
