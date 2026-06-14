import { cn } from "@/lib/utils";

/**
 * Soft visual bridge between major page zones — replaces hard dividers.
 */
function SectionBridge({ className }) {
  return (
    <div
      className={cn("experience-bridge", className)}
      aria-hidden="true"
      role="presentation"
    >
      <div className="experience-bridge__glow" />
      <div className="mx-auto w-3/4 max-w-2xl">
        <div className="experience-bridge__line" />
      </div>
    </div>
  );
}

export default SectionBridge;
