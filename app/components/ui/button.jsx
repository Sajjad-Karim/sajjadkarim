import { cn } from "@/lib/utils";

const variantStyles = {
  primary: [
    "bg-gradient-cta text-primary-foreground",
    "hover:brightness-105 hover:shadow-glow-primary",
    "active:scale-[0.98]",
  ],
  secondary: [
    "bg-surface text-foreground border border-border",
    "hover:bg-surface-hover hover:border-border-strong",
    "active:scale-[0.98]",
  ],
  ghost: [
    "bg-transparent text-neutral-300",
    "hover:text-primary hover:bg-primary-muted",
    "active:scale-[0.98]",
  ],
  outline: [
    "bg-transparent text-foreground border border-border",
    "hover:border-border-accent hover:text-primary",
    "active:scale-[0.98]",
  ],
  text: [
    "bg-transparent text-primary p-0 h-auto",
    "hover:text-primary-hover underline-offset-4 hover:underline",
  ],
  icon: [
    "bg-surface text-neutral-300 border border-border",
    "hover:bg-surface-hover hover:text-primary hover:border-strong",
    "active:scale-[0.95]",
  ],
  destructive: [
    "bg-error/10 text-error border border-error/30",
    "hover:bg-error/20",
    "active:scale-[0.98]",
  ],
};

const sizeStyles = {
  sm: "h-8 px-3 text-caption gap-1.5 rounded-md",
  md: "h-10 px-5 text-body-sm gap-2 rounded-md",
  lg: "h-12 px-6 text-body-md gap-2 rounded-full",
  icon: "h-10 w-10 p-0 rounded-full",
  "icon-sm": "h-8 w-8 p-0 rounded-full",
  "icon-lg": "h-12 w-12 p-0 rounded-full",
};

/**
 * Aperture Button — foundation primitive.
 * All future buttons must use this component.
 */
function Button({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  type = "button",
  children,
  ...props
}) {
  const isDisabled = disabled || loading;
  const resolvedSize =
    variant === "icon" && size === "md" ? "icon" : size;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      className={cn(
        "type-button inline-flex items-center justify-center whitespace-nowrap",
        "transition-hover focus-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        variant !== "text" && sizeStyles[resolvedSize],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <span
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
          <span className="sr-only">Loading</span>
          {typeof children === "string" ? children : null}
        </>
      ) : (
        children
      )}
    </button>
  );
}

export { Button, variantStyles as buttonVariants, sizeStyles as buttonSizes };
