import * as D from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Dialog({ open, onOpenChange, children }: { open: boolean; onOpenChange: (v: boolean) => void; children: ReactNode }) {
  return <D.Root open={open} onOpenChange={onOpenChange}>{children}</D.Root>;
}
export function DialogContent({ children, className, title }: { children: ReactNode; className?: string; title?: string }) {
  return (
    <D.Portal>
      <D.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
      <D.Content className={cn("fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 glass rounded-2xl p-6 shadow-2xl data-[state=open]:animate-in data-[state=open]:zoom-in-95", className)}>
        {title && <D.Title className="text-lg font-semibold mb-4">{title}</D.Title>}
        {children}
        <D.Close className="absolute right-4 top-4 text-white/50 hover:text-white"><X size={18} /></D.Close>
      </D.Content>
    </D.Portal>
  );
}
export const DialogTrigger = D.Trigger;
