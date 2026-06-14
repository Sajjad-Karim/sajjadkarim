import { cn } from "@/lib/utils";
import { Card } from "@/app/components/ui/card";

function ExperienceMilestoneCard({ milestone, index, isLast }) {
  const isEven = index % 2 === 0;

  return (
    <li
      className={cn(
        "career-milestone relative",
        "section-reveal",
        isEven ? "career-milestone--left" : "career-milestone--right"
      )}
      style={{ "--milestone-index": index }}
    >
      {/* Timeline node */}
      <div className="career-milestone__node" aria-hidden="true">
        <span className="career-milestone__node-ring" />
        <span className="career-milestone__node-dot" />
      </div>

      {/* Connector to next milestone */}
      {!isLast && (
        <span className="career-milestone__connector" aria-hidden="true" />
      )}

      {/* Card */}
      <article className="career-milestone__card">
        <Card
          variant="interactive"
          className="group relative overflow-hidden p-5 sm:p-6 lg:p-7"
        >
          {/* Phase gradient wash */}
          <div
            className="career-milestone__wash pointer-events-none absolute inset-0 opacity-0 transition-hover group-hover:opacity-100"
            aria-hidden="true"
          />

          <div className="relative">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="career-milestone__phase rounded-full border border-primary/30 bg-primary-muted px-2.5 py-0.5 font-mono text-mono-xs text-primary">
                {milestone.phase}
              </span>
              <time
                dateTime={`${milestone.periodStart}/${milestone.periodEnd}`}
                className="font-mono text-mono-xs text-muted"
              >
                {milestone.period}
              </time>
            </div>

            {/* Role & company */}
            <h3
              className={cn(
                "mt-4 text-neutral-100",
                milestone.featured ? "type-h3" : "type-h4"
              )}
            >
              {milestone.role}
            </h3>
            <p
              className={cn(
                "mt-1 text-primary",
                milestone.featured ? "type-h4 text-primary" : "text-body-sm text-primary/90"
              )}
            >
              {milestone.context}
            </p>

            {/* Focus */}
            <p className="mt-4 max-w-prose text-body text-pretty text-neutral-300">
              {milestone.focus}
            </p>

            {/* Technologies */}
            <ul
              className="mt-5 flex flex-wrap gap-2"
              aria-label={`Technologies for ${milestone.role}`}
            >
              {milestone.technologies.map((tech) => (
                <li key={tech}>
                  <span className="career-milestone__tech inline-flex rounded-full border border-border bg-canvas/50 px-2.5 py-1 font-mono text-mono-xs text-neutral-400 transition-hover group-hover:border-border-strong group-hover:text-neutral-200">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>

            {/* Impact & lesson */}
            <div className="mt-6 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
              <div>
                <p className="type-mono mb-2 text-primary">Impact</p>
                <p className="text-body-sm text-pretty text-muted">
                  {milestone.impact}
                </p>
              </div>
              <div>
                <p className="type-mono mb-2 text-primary">Lesson</p>
                <p className="text-body-sm text-pretty text-muted italic">
                  &ldquo;{milestone.lesson}&rdquo;
                </p>
              </div>
            </div>

            {/* Achievements */}
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Key achievements">
              {milestone.achievements.map((item) => (
                <li key={item}>
                  <span className="career-milestone__badge inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface/60 px-2.5 py-1 text-caption text-neutral-300 transition-hover group-hover:border-primary/20">
                    <span
                      className="h-1 w-1 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </article>
    </li>
  );
}

export default ExperienceMilestoneCard;
