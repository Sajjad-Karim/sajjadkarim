import { cn } from "@/lib/utils";
import { Container } from "./container";

/**
 * Section wrapper — consistent vertical rhythm and anchor IDs.
 */
function Section({
  id,
  eyebrow,
  title,
  description,
  variant = "default",
  containerVariant = "content",
  className,
  headerClassName,
  children,
  ...props
}) {
  const bgVariants = {
    default: "",
    subtle: "bg-subtle",
    elevated: "bg-elevated",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-20 lg:py-24",
        bgVariants[variant],
        className
      )}
      {...props}
    >
      <Container variant={containerVariant}>
        {(eyebrow || title || description) && (
          <header
            className={cn(
              "mb-12 max-w-reading",
              headerClassName
            )}
          >
            {eyebrow && (
              <p className="type-eyebrow mb-4">{eyebrow}</p>
            )}
            {title && (
              <h2 className="type-h2 text-balance">{title}</h2>
            )}
            {description && (
              <p className="type-body-lg mt-4 text-pretty">{description}</p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}

export { Section };
