import { cn } from "@/lib/utils";
import { skillsPillars } from "@/config/skills-content";

function SkillsIntro() {
  return (
    <div
      className={cn(
        "skills-intro section-reveal section-stagger-3",
        "mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-center lg:justify-between"
      )}
    >
      <p className="max-w-lg text-body text-pretty text-neutral-300">
        Organized by engineering domain — each cluster represents a layer of
        how I think, build, and ship.
      </p>

      <ul
        className="flex flex-wrap gap-2 lg:justify-end"
        aria-label="Engineering pillars"
      >
        {skillsPillars.map((pillar) => (
          <li key={pillar}>
            <span className="skills-intro__pillar inline-flex rounded-full border border-border bg-surface/40 px-3 py-1.5 font-mono text-mono-xs text-neutral-400 transition-hover hover:border-border-strong hover:text-neutral-200">
              {pillar}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsIntro;
