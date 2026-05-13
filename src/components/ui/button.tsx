import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/40 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-soft)] shadow-[0_0_30px_-10px_var(--color-gold)]",
        secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10",
        ghost: "text-white/80 hover:bg-white/5 hover:text-white",
        outline: "border border-white/15 hover:border-white/30 hover:bg-white/5",
        danger: "bg-[var(--color-rose)]/20 text-[var(--color-rose)] hover:bg-[var(--color-rose)]/30 border border-[var(--color-rose)]/30",
      },
      size: { sm: "h-8 px-3", md: "h-10 px-4", lg: "h-12 px-6 text-base", icon: "h-9 w-9" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";
