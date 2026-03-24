import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "min-h-28 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-cyan-100/60 backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
