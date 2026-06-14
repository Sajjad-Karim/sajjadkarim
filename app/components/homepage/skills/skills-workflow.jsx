import { skillsWorkflow } from "@/config/skills-content";

function SkillsWorkflow() {
  return (
    <div className="skills-workflow section-block section-reveal section-stagger-5">
      <div className="mb-8 max-w-xl">
        <p className="type-mono mb-2 text-primary">Workflow</p>
        <h3 className="type-h3 text-neutral-100">How products get built</h3>
        <p className="mt-3 text-body text-pretty text-muted">
          From idea to iteration — a disciplined pipeline that balances speed
          with quality.
        </p>
      </div>

      <div className="skills-workflow__track relative">
        <ol className="skills-workflow__list flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-4 md:overflow-visible md:pb-0 md:gap-4">
          {skillsWorkflow.map((step, index) => (
            <li
              key={step.id}
              className="skills-workflow__step section-reveal min-w-[9.5rem] flex-shrink-0 snap-start md:min-w-0"
              style={{ "--step-index": index }}
            >
              <article className="skills-workflow__card group relative h-full rounded-xl border border-border bg-surface/50 p-4 transition-hover hover:border-border-strong hover:bg-surface/80 md:p-5">
                {index < skillsWorkflow.length - 1 && index % 4 !== 3 && (
                  <span
                    className="skills-workflow__connector hidden md:block"
                    aria-hidden="true"
                  />
                )}

                <span className="font-mono text-mono-xs text-primary">
                  {step.step}
                </span>
                <h4 className="mt-2 type-label text-neutral-100">
                  {step.title}
                </h4>
                <p className="mt-2 text-caption text-pretty text-muted">
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

export default SkillsWorkflow;
