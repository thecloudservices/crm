import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Badge({ className, color, ...p }: HTMLAttributes<HTMLSpanElement> & { color?: string }) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border", className)}
      style={color ? { background: `${color}20`, borderColor: `${color}50`, color } : undefined}
      {...p}
    />
  );
}
