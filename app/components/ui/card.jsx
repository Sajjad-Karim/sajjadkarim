import { cn } from "@/lib/utils";

const variantStyles = {
  surface: [
    "bg-surface border border-border rounded-xl",
    "shadow-soft",
  ],
  glass: ["surface-glass rounded-xl"],
  interactive: [
    "bg-surface border border-border rounded-xl shadow-soft",
    "transition-hover",
    "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-medium",
  ],
  project: [
    "bg-surface border border-border rounded-xl overflow-hidden",
    "transition-hover",
    "hover:-translate-y-1 hover:border-border-strong hover:shadow-strong",
  ],
  feature: [
    "bg-surface border border-border rounded-xl p-6",
    "transition-hover",
    "hover:bg-surface-hover hover:border-border-strong",
  ],
  stat: [
    "bg-transparent border border-border rounded-lg p-4",
    "text-center",
  ],
};

/**
 * Aperture Card — composable surface primitive.
 */
function Card({ className, variant = "surface", as: Component = "div", ...props }) {
  return (
    <Component
      className={cn(variantStyles[variant], className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col gap-2 p-6 pb-0", className)}
      {...props}
    />
  );
}

function CardTitle({ className, as: Component = "h3", ...props }) {
  return (
    <Component
      className={cn("type-h4", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p className={cn("type-body-sm", className)} {...props} />
  );
}

function CardContent({ className, ...props }) {
  return <div className={cn("p-6", className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn("flex items-center gap-4 p-6 pt-0", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  variantStyles as cardVariants,
};
