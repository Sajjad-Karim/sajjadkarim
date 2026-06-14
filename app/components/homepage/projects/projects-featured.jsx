import Image from "next/image";
import { cn } from "@/lib/utils";
import { getCategoryLabel } from "@/config/projects-content";
import { LinkButton } from "@/app/components/ui/link-button";

function ProjectsFeatured({ project }) {
  return (
    <article
      className={cn(
        "projects-featured section-reveal section-stagger-4",
        "relative overflow-hidden rounded-2xl border border-border bg-surface/30"
      )}
      aria-labelledby="featured-project-title"
    >
      <div
        className="projects-featured__glow pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-muted blur-3xl"
        aria-hidden="true"
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-0">
        {/* Visual */}
        <div className="projects-featured__visual relative p-6 sm:p-8 lg:p-10">
          <div className="projects-featured__badge mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/30 bg-primary-muted px-2.5 py-0.5 font-mono text-mono-xs text-primary">
              Featured case study
            </span>
            <span className="font-mono text-mono-xs text-muted">
              {project.role} · {getCategoryLabel(project.categories[0])}
            </span>
          </div>

          <div className="projects-featured__mockup relative mx-auto max-w-md">
            <div
              className="projects-featured__mockup-bar flex items-center gap-1.5 rounded-t-xl border border-b-0 border-border bg-canvas/80 px-4 py-3"
              aria-hidden="true"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-error/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
            </div>
            <div className="projects-featured__mockup-screen relative overflow-hidden rounded-b-xl border border-border bg-canvas shadow-strong">
              <Image
                src={project.image}
                alt={`${project.name} — ${project.tagline} (${project.role})`}
                width={640}
                height={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover transition-hover duration-slow hover:scale-[1.02]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/50 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <div
              className="projects-featured__mockup-shadow pointer-events-none absolute -bottom-4 left-1/2 h-4 w-3/4 -translate-x-1/2 rounded-full bg-primary/10 blur-xl"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Story */}
        <div className="flex flex-col justify-center border-t border-border p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          {/* Role */}
          <p className="type-mono text-primary">{project.role}</p>

          <h3
            id="featured-project-title"
            className="mt-2 type-display-md text-balance text-neutral-0"
          >
            {project.name}
          </h3>
          <p className="mt-2 text-body-lg text-primary">{project.tagline}</p>
          <p className="mt-4 text-body text-pretty text-neutral-300">
            {project.summary}
          </p>

          {/* Problem / Solution / Impact */}
          <dl className="mt-8 space-y-4">
            <div>
              <dt className="type-mono mb-1 text-primary">Problem</dt>
              <dd className="text-body-sm text-pretty text-muted">
                {project.problem}
              </dd>
            </div>
            <div>
              <dt className="type-mono mb-1 text-primary">Solution</dt>
              <dd className="text-body-sm text-pretty text-muted">
                {project.solution}
              </dd>
            </div>
            <div>
              <dt className="type-mono mb-1 text-primary">Impact</dt>
              <dd className="text-body-sm text-pretty text-neutral-200">
                {project.impact}
              </dd>
            </div>
          </dl>

          {/* Metrics */}
          {project.metrics?.length > 0 && (
            <dl className="mt-8 flex flex-wrap gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="font-display text-heading-sm text-neutral-100">
                    {metric.value}
                  </dd>
                  <dd className="mt-0.5 text-caption text-muted">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {/* Technologies */}
          <ul
            className="mt-8 flex flex-wrap gap-2"
            aria-label={`${project.name} technologies`}
          >
            {project.technologies.map((tech) => (
              <li key={tech}>
                <span className="inline-flex rounded-full border border-border bg-canvas/50 px-2.5 py-1 font-mono text-mono-xs text-neutral-400">
                  {tech}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={project.demo} variant="primary" external>
              Visit product
            </LinkButton>
            {project.code && (
              <LinkButton href={project.code} variant="outline" external>
                View code
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectsFeatured;
