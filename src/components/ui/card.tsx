import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Card({ className, ...p }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("glass rounded-2xl shadow-[var(--shadow-elev)]", className)} {...p} />;
}
export function CardHeader({ className, ...p }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-3", className)} {...p} />;
}
export function CardTitle({ className, ...p }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-base font-semibold tracking-tight", className)} {...p} />;
}
export function CardContent({ className, ...p }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-3", className)} {...p} />;
}
