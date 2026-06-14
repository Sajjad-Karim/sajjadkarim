import { LinkButton } from "@/app/components/ui/link-button";
import { projectsCta } from "@/config/projects-content";

function ProjectsCta() {
  return (
    <div className="projects-cta section-block section-stagger-5">
      <div className="projects-cta__panel relative overflow-hidden rounded-2xl border border-border bg-surface/30 p-8 text-center sm:p-10 lg:p-12">
        <div
          className="projects-cta__glow pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-primary-muted blur-3xl"
          aria-hidden="true"
        />
        <div className="relative">
          <h3 className="type-h3 text-balance text-neutral-100">
            {projectsCta.headline}
          </h3>
          <p className="mx-auto mt-4 max-w-md text-body text-pretty text-muted">
            {projectsCta.text}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href={projectsCta.primary.href} variant="primary">
              {projectsCta.primary.label}
            </LinkButton>
            <LinkButton href={projectsCta.secondary.href} variant="outline">
              {projectsCta.secondary.label}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCta;
