import { cn } from "@/lib/utils";
import { Card } from "@/app/components/ui/card";

function SkillsDomainCard({ domain, index }) {
  return (
    <li
      className={cn(
        "skills-domain",
        domain.featured && "skills-domain--featured",
        "section-reveal"
      )}
      style={{ "--domain-index": index }}
    >
      <Card
        variant="interactive"
        className="group relative h-full overflow-hidden p-5 sm:p-6"
      >
        <div
          className="skills-domain__wash pointer-events-none absolute inset-0 opacity-0 transition-hover group-hover:opacity-100"
          aria-hidden="true"
        />

        <div className="relative">
          <div className="flex items-start justify-between gap-3">
            <h3 className="type-h4 text-neutral-100">{domain.title}</h3>
            <span
              className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-border bg-canvas/50 font-mono text-mono-xs text-muted transition-hover group-hover:border-primary/30 group-hover:text-primary"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="mt-3 text-body-sm text-pretty text-muted">
            {domain.description}
          </p>

          <ul
            className="mt-5 flex flex-wrap gap-2"
            aria-label={`${domain.title} technologies`}
          >
            {domain.technologies.map((tech) => (
              <li key={tech}>
                <span className="skills-domain__tech inline-flex rounded-full border border-border bg-canvas/40 px-2.5 py-1 font-mono text-mono-xs text-neutral-400 transition-hover group-hover:border-border-strong group-hover:text-neutral-200">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </li>
  );
}

export default SkillsDomainCard;
