import { cn } from "@/lib/utils";

export type ButtonVariant = "default" | "outline" | "ghost";
export type ButtonSize = "default" | "sm" | "lg";

/**
 * Shared class builder so that links (<a>) can look like buttons without
 * nesting a <button> inside an <a> (invalid HTML, double tab stop).
 */
export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
    {
      "bg-primary text-primary-foreground shadow hover:bg-primary/90": variant === "default",
      "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground": variant === "outline",
      "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
      "h-10 px-4 py-2": size === "default",
      "h-9 rounded-md px-3 text-xs": size === "sm",
      "h-11 rounded-md px-8": size === "lg",
    },
    className
  );
}
