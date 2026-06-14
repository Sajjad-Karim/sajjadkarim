import { cn } from "@/lib/utils";
import { aboutStory, aboutVision } from "@/config/about-content";

function AboutStory() {
  return (
    <div className="about-story">
      <ol className="relative space-y-8 lg:space-y-10">
        {aboutStory.map((beat, index) => (
          <li
            key={beat.id}
            className={cn(
              "section-reveal about-story__beat relative pl-8",
              `section-stagger-${Math.min(index + 3, 5)}`
            )}
          >
            {/* Connector line */}
            {index < aboutStory.length - 1 && (
              <span
                className="about-story__connector absolute left-[7px] top-8 h-[calc(100%+1rem)] w-px bg-gradient-to-b from-primary/40 to-border"
                aria-hidden="true"
              />
            )}

            {/* Dot */}
            <span
              className="about-story__dot absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-primary/50 bg-canvas"
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>

            <p className="type-mono mb-2 text-primary">{beat.phase}</p>
            <p className="max-w-prose text-body text-pretty text-neutral-300">
              {beat.text}
            </p>
          </li>
        ))}
      </ol>

      {/* Vision block */}
      <div
        className={cn(
          "section-reveal section-stagger-5 about-story__vision",
          "mt-10 rounded-xl border border-border bg-surface/40 p-6 backdrop-blur-sm lg:mt-12"
        )}
      >
        <p className="type-mono mb-2 text-primary">{aboutVision.label}</p>
        <p className="text-body-lg text-pretty text-neutral-200">
          {aboutVision.text}
        </p>
      </div>
    </div>
  );
}

export default AboutStory;
