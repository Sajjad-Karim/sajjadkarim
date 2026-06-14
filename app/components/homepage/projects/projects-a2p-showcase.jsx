import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectStoryBlock, ProjectTechChips } from "./projects-case-study-card";

function ProjectsA2pShowcase({ project }) {
  return (
    <article
      className={cn(
        "projects-a2p section-stagger-4",
        "relative overflow-hidden rounded-2xl border border-border bg-surface/30",
        "transition-hover hover:border-border-strong hover:shadow-glow-primary"
      )}
      aria-labelledby="a2p-case-study-title"
    >
      <div
        className="projects-a2p__wash pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-muted/20 via-transparent to-secondary-muted/10"
        aria-hidden="true"
      />

      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-primary/30 bg-primary-muted px-3 py-1 font-mono text-mono-xs text-primary">
            Production at scale
          </span>
          <span className="font-mono text-mono-xs text-muted">
            {project.role} · Real Estate
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <h3
              id="a2p-case-study-title"
              className="type-display-md text-balance text-neutral-0"
            >
              {project.name}
            </h3>
            <p className="mt-3 text-body-lg text-primary">{project.tagline}</p>
            <p className="mt-4 text-body text-pretty text-neutral-300">
              {project.summary}
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-canvas/40 px-3 py-4 text-center sm:px-4"
                >
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="font-display text-heading-md text-neutral-100 sm:text-heading-lg">
                    {metric.value}
                  </dd>
                  <dd className="mt-1 text-caption text-muted">{metric.label}</dd>
                </div>
              ))}
            </dl>

            {project.highlights?.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Delivery highlights">
                {project.highlights.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-full border border-border bg-surface/50 px-3 py-1 text-caption text-neutral-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <ProjectStoryBlock project={project} />

            <ProjectTechChips technologies={project.technologies} className="mt-6" />

            <div className="mt-8">
              <p className="type-mono mb-3 text-primary">Representative examples</p>
              <ul className="projects-a2p__examples grid gap-2 sm:grid-cols-2">
                {project.representativeSites.map((site) => (
                  <li key={site.url}>
                    <Link
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex h-full flex-col rounded-xl border border-border bg-canvas/50 px-4 py-3",
                        "transition-hover focus-ring hover:border-primary/30 hover:bg-surface/60"
                      )}
                    >
                      <span className="type-label text-neutral-100">{site.name}</span>
                      <span className="mt-1 truncate font-mono text-mono-xs text-muted">
                        {site.url.replace(/^https?:\/\//, "")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg border border-dashed border-border bg-canvas/30 px-4 py-3 text-center text-body-sm text-muted">
                <span className="font-display text-body text-neutral-200">
                  300+ similar production websites
                </span>
                <span className="mt-1 block text-caption">
                  Delivered with the same workflow, quality bar, and deployment pipeline.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectsA2pShowcase;
