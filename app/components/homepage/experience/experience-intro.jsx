import { cn } from "@/lib/utils";
import { careerPhases } from "@/config/career-content";

function ExperienceIntro() {
  return (
    <div
      className={cn(
        "career-intro section-reveal section-stagger-3",
        "mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-center lg:justify-between"
      )}
    >
      <p className="max-w-lg text-body text-pretty text-neutral-300">
        Scroll through the phases — each milestone marks a shift in how I think,
        build, and deliver.
      </p>

      {/* Phase progress strip */}
      <ol
        className="career-intro__phases flex flex-wrap gap-2 lg:justify-end"
        aria-label="Career growth phases"
      >
        {careerPhases.map((phase, index) => (
          <li key={phase}>
            <span
              className={cn(
                "career-intro__phase inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-3 py-1.5 font-mono text-mono-xs text-neutral-400 transition-hover hover:border-border-strong hover:text-neutral-200",
                index === careerPhases.length - 1 && "border-primary/30 text-primary"
              )}
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-primary/60"
                aria-hidden="true"
              />
              {phase}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ExperienceIntro;
