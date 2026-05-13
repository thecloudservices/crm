import { forwardRef } from "react";
import * as L from "@radix-ui/react-label";
import { cn } from "@/lib/utils";
export const Label = forwardRef<HTMLLabelElement, React.ComponentProps<typeof L.Root>>(
  ({ className, ...p }, ref) => <L.Root ref={ref} className={cn("text-sm font-medium text-white/80", className)} {...p} />
);
Label.displayName = "Label";
