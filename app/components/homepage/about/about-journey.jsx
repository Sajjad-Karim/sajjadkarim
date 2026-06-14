import { cn } from "@/lib/utils";
import { aboutJourney } from "@/config/about-content";

function AboutJourney() {
  return (
    <div className="about-journey section-block section-reveal section-stagger-3">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="type-mono mb-2 text-primary">Journey</p>
          <h3 className="type-h3 text-neutral-100">How I got here</h3>
        </div>
        <p className="max-w-sm text-body-sm text-pretty text-muted sm:text-right">
          A path shaped by curiosity, craft, and continuous growth.
        </p>
      </div>

      <div className="about-journey__track relative">
        <ol className="about-journey__list flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-6 md:overflow-visible md:pb-0 md:gap-4 lg:gap-5">
          {aboutJourney.map((step, index) => (
            <li
              key={step.year}
              className={cn(
                "about-journey__step snap-start min-w-[11rem] flex-shrink-0 md:min-w-0 md:col-span-2",
                index === 3 && "md:col-start-2"
              )}
              style={{ "--step-index": index }}
            >
              <article className="about-journey__card interactive-lift h-full rounded-xl border border-border bg-surface/50 p-5 transition-hover hover:border-border-strong hover:bg-surface/80">
                <time
                  dateTime={
                    step.year === "Now"
                      ? new Date().getFullYear().toString()
                      : step.year
                  }
                  className="font-display text-heading-md tabular-nums text-primary"
                >
                  {step.year}
                </time>
                <h4 className="mt-3 type-label text-neutral-100">{step.title}</h4>
                <p className="mt-2 text-body-sm text-pretty text-muted">
                  {step.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AboutJourney;
