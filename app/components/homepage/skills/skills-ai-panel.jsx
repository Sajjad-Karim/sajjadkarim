import { Card } from "@/app/components/ui/card";
import { skillsAiEcosystem } from "@/config/skills-content";

function SkillsAiPanel() {
  const { label, headline, description, capabilities } = skillsAiEcosystem;

  return (
    <div className="skills-ai section-block section-reveal section-stagger-4">
      <div className="skills-ai__panel relative overflow-hidden rounded-2xl border border-primary/20 bg-surface/30 p-6 sm:p-8 lg:p-10">
        <div
          className="skills-ai__glow pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary-muted blur-3xl"
          aria-hidden="true"
        />
        <div
          className="skills-ai__glow pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-secondary-muted blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mb-8 max-w-2xl">
          <p className="type-mono mb-3 text-primary">{label}</p>
          <h3 className="type-h3 text-balance text-neutral-100">{headline}</h3>
          <p className="mt-4 text-body text-pretty text-neutral-300">
            {description}
          </p>
        </div>

        <ul className="skills-ai__grid relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((cap, index) => (
            <li
              key={cap.id}
              className="skills-ai__item section-reveal"
              style={{ "--ai-index": index }}
            >
              <Card
                variant="interactive"
                className="group h-full border-primary/10 bg-canvas/40 p-5 transition-hover hover:border-primary/30"
              >
                <div
                  className="mb-3 h-px w-6 bg-primary/50 transition-hover group-hover:w-10 group-hover:bg-primary"
                  aria-hidden="true"
                />
                <h4 className="type-label text-neutral-100">{cap.title}</h4>
                <p className="mt-2 text-body-sm text-pretty text-muted">
                  {cap.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsAiPanel;
