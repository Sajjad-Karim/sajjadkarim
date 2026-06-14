import { cn } from "@/lib/utils";

const CASE_STEPS = [
  { key: "problem", label: "Problem" },
  { key: "research", label: "Research" },
  { key: "architecture", label: "Architecture" },
  { key: "development", label: "Development" },
  { key: "challenges", label: "Challenges" },
  { key: "result", label: "Result" },
  { key: "impact", label: "Impact" },
];

function ProjectsCasePreview({ caseStudy, projectName }) {
  if (!caseStudy) return null;

  return (
    <div className="projects-case section-block section-stagger-5">
      <div className="mb-8 max-w-xl">
        <p className="type-mono mb-2 text-primary">Case study</p>
        <h3 className="type-h3 text-neutral-100">
          How {projectName} was built
        </h3>
        <p className="mt-3 text-body text-pretty text-muted">
          From problem to impact — the condensed product journey.
        </p>
      </div>

      <ol className="projects-case__track grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {CASE_STEPS.map((step, index) => (
          <li
            key={step.key}
            className={cn(
              "projects-case__step",
              index === 4 && "lg:col-start-2"
            )}
            style={{ "--case-index": index }}
          >
            <article className="projects-case__card group relative h-full rounded-xl border border-border bg-surface/40 p-4 transition-hover hover:border-border-strong hover:bg-surface/70 lg:p-5">
              {index < CASE_STEPS.length - 1 && index % 4 !== 3 && (
                <span
                  className="projects-case__connector hidden lg:block"
                  aria-hidden="true"
                />
              )}
              <span className="font-mono text-mono-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-2 type-label text-neutral-100">
                {step.label}
              </h4>
              <p className="mt-2 text-caption text-pretty text-muted">
                {caseStudy[step.key]}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ProjectsCasePreview;
