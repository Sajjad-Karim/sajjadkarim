import { cn } from "@/lib/utils";

/** Shared horizontal inset — aligns nav, hero, sections, and footer */
const containerGutter =
  "px-[var(--gutter-x)] sm:px-[var(--gutter-x-md)] lg:px-[var(--gutter-x-lg)] xl:px-[var(--gutter-x-xl)]";

const containerVariants = {
  /** Full bleed — edge padding only, no max-width (page shell) */
  full: cn("w-full", containerGutter),
  /** Hero — widest usable canvas */
  hero: cn(
    "mx-auto w-full",
    containerGutter,
    "max-w-[var(--container-hero)]"
  ),
  /** Projects & galleries */
  wide: cn(
    "mx-auto w-full",
    containerGutter,
    "max-w-[var(--container-wide)]"
  ),
  /** Default sections — comfortable width */
  content: cn(
    "mx-auto w-full",
    containerGutter,
    "max-w-[var(--container-content)]"
  ),
  /** Alias for content */
  section: cn(
    "mx-auto w-full",
    containerGutter,
    "max-w-[var(--container-content)]"
  ),
  /** Prose / reading width */
  reading: cn("mx-auto w-full px-[var(--gutter-x)] max-w-reading"),
  /** Narrow forms */
  narrow: cn(
    "mx-auto w-full px-[var(--gutter-x)] max-w-container-sm"
  ),
};

/**
 * Responsive container primitive.
 * @param {'full'|'hero'|'wide'|'content'|'section'|'reading'|'narrow'} variant
 */
function Container({
  as: Component = "div",
  variant = "content",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(containerVariants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Container, containerVariants, containerGutter };
