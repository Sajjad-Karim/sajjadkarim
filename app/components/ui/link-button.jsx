import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonSizes, buttonVariants } from "./button";

/**
 * Anchor styled as a design-system button.
 */
function LinkButton({
  href,
  variant = "primary",
  size = "lg",
  className,
  children,
  external = false,
  ...props
}) {
  const classes = cn(
    "type-button inline-flex items-center justify-center whitespace-nowrap transition-hover focus-ring",
    buttonSizes[size],
    buttonVariants[variant],
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

export { LinkButton };
