import { cn } from "@/lib/utils";
import { Card } from "@/app/components/ui/card";
import { LinkButton } from "@/app/components/ui/link-button";

function ProjectTechChips({ technologies, className, limit }) {
  const items = limit ? technologies.slice(0, limit) : technologies;
  const overflow = limit && technologies.length > limit ? technologies.length - limit : 0;

  return (
    <ul
      className={cn("flex flex-wrap gap-1.5", className)}
      aria-label="Technologies used"
    >
      {items.map((tech) => (
        <li key={tech}>
          <span className="inline-flex rounded-full border border-border bg-canvas/50 px-2.5 py-1 font-mono text-mono-xs text-neutral-400">
            {tech}
          </span>
        </li>
      ))}
      {overflow > 0 && (
        <li>
          <span className="inline-flex px-1 font-mono text-mono-xs text-muted">
            +{overflow}
          </span>
        </li>
      )}
    </ul>
  );
}

function ProjectStoryBlock({ project, compact = false }) {
  return (
    <dl className={cn("space-y-3", compact && "space-y-2")}>
      <div>
        <dt className="type-mono mb-1 text-primary">Problem</dt>
        <dd className={cn("text-pretty text-muted", compact ? "text-caption" : "text-body-sm")}>
          {project.problem}
        </dd>
      </div>
      <div>
        <dt className="type-mono mb-1 text-primary">Solution</dt>
        <dd className={cn("text-pretty text-muted", compact ? "text-caption" : "text-body-sm")}>
          {project.solution}
        </dd>
      </div>
      <div>
        <dt className="type-mono mb-1 text-primary">Impact</dt>
        <dd className={cn("text-pretty text-neutral-200", compact ? "text-caption" : "text-body-sm")}>
          {project.impact}
        </dd>
      </div>
    </dl>
  );
}

function ProjectsCaseStudyCard({ project, className, layout = "standard" }) {
  const isWide = layout === "wide";

  return (
    <article
      className={cn(
        "projects-case-study group relative overflow-hidden rounded-2xl border border-border bg-surface/30",
        "transition-hover hover:border-border-strong hover:shadow-glow-primary",
        className
      )}
      aria-labelledby={`case-study-${project.slug}`}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-muted blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative p-6 sm:p-7 lg:p-8",
          isWide && "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10 lg:p-10"
        )}
      >
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="font-mono text-mono-xs text-primary">{project.role}</span>
            <span className="text-caption text-muted">·</span>
            <span className="font-mono text-mono-xs text-muted">{project.status}</span>
          </div>

          <h3
            id={`case-study-${project.slug}`}
            className={cn(
              "text-balance text-neutral-0",
              isWide ? "type-h3" : "type-h4"
            )}
          >
            {project.name}
          </h3>
          <p className="mt-2 text-body-sm text-primary">{project.tagline}</p>
          <p className="mt-4 text-body-sm text-pretty text-neutral-300">
            {project.summary}
          </p>

          {project.metrics?.length > 0 && (
            <dl className="mt-6 flex flex-wrap gap-5">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="font-display text-heading-sm text-neutral-100">
                    {metric.value}
                  </dd>
                  <dd className="mt-0.5 text-caption text-muted">{metric.label}</dd>
                </div>
              ))}
            </dl>
          )}

          {project.highlights?.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Key highlights">
              {project.highlights.map((item) => (
                <li key={item}>
                  <span className="inline-flex rounded-md border border-primary/20 bg-primary-muted/40 px-2 py-1 text-caption text-neutral-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={cn(!isWide && "mt-8")}>
          <ProjectStoryBlock project={project} compact={!isWide} />

          <ProjectTechChips
            technologies={project.technologies}
            className="mt-6"
            limit={isWide ? undefined : 5}
          />

          {project.demo && (
            <div className="mt-6">
              <LinkButton href={project.demo} variant="outline" size="sm" external>
                View product
              </LinkButton>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export { ProjectTechChips, ProjectStoryBlock };
export default ProjectsCaseStudyCard;
