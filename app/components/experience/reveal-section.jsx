import { cn } from "@/lib/utils";

/**
 * Wraps page sections for global scroll reveal and tonal continuity.
 * Does not modify section internals.
 *
 * @param {boolean} reveal - Enable scroll reveal (off for hero)
 * @param {'default'|'wash'} tone - Subtle background wash for alternating depth
 */
function RevealSection({
  children,
  reveal = true,
  tone = "default",
  className,
}) {
  return (
    <div
      data-reveal={reveal ? "on" : "off"}
      className={cn(
        "experience-section",
        tone === "wash" && "experience-section--wash",
        className
      )}
    >
      {children}
    </div>
  );
}

export default RevealSection;
