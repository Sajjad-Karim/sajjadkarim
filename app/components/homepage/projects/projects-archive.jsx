import Image from "next/image";
import { cn } from "@/lib/utils";
import { getCategoryLabel } from "@/config/projects-content";
import { Card } from "@/app/components/ui/card";
import { ProjectTechChips } from "./projects-case-study-card";

function ProjectsArchiveCard({ project }) {
  const primaryCategory = project.categories[0];

  return (
    <article className="projects-archive-card group h-full">
      <Card variant="project" className="flex h-full flex-col overflow-hidden">
        <div className="projects-archive-card__visual relative aspect-[16/10] overflow-hidden bg-canvas">
          <Image
            src={project.image}
            alt={`${project.name} — ${project.tagline}`}
            width={640}
            height={400}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="h-full w-full object-cover transition-hover duration-slow group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/25 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-border bg-canvas/80 px-2 py-0.5 font-mono text-mono-xs text-primary backdrop-blur-sm">
              {getCategoryLabel(primaryCategory)}
            </span>
            <span className="rounded-full border border-border bg-canvas/80 px-2 py-0.5 font-mono text-mono-xs text-neutral-300 backdrop-blur-sm">
              {project.status}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="type-mono text-primary">{project.role}</p>
          <h3 className="mt-2 type-h4 text-neutral-100">{project.name}</h3>
          <p className="mt-1 text-body-sm text-muted">{project.tagline}</p>

          <p className="mt-4 flex-1 text-body-sm text-pretty text-neutral-300">
            {project.summary}
          </p>

          <ProjectTechChips
            technologies={project.technologies}
            className="mt-5"
            limit={4}
          />

          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "type-button text-body-sm text-primary transition-hover",
                "hover:text-primary-hover focus-ring rounded-sm"
              )}
            >
              View product →
            </a>
            {project.metrics?.[0] && (
              <span className="font-mono text-mono-xs text-muted">
                {project.metrics[0].value} · {project.metrics[0].label}
              </span>
            )}
          </div>
        </div>
      </Card>
    </article>
  );
}

export default ProjectsArchiveCard;
