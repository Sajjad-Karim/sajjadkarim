import { Card } from "@/app/components/ui/card";
import { skillsStrengths } from "@/config/skills-content";

function SkillsStrengths() {
  return (
    <div className="skills-strengths section-block section-reveal section-stagger-5">
      <div className="mb-8">
        <p className="type-mono mb-2 text-primary">Strengths</p>
        <h3 className="type-h3 text-neutral-100">Engineering maturity</h3>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillsStrengths.map((item) => (
          <li key={item.id}>
            <Card
              variant="feature"
              className="group h-full transition-hover hover:border-primary/20"
            >
              <div
                className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-canvas/50 font-mono text-mono-xs text-primary transition-hover group-hover:border-primary/30"
                aria-hidden="true"
              >
                ◆
              </div>
              <h4 className="type-label text-neutral-100">{item.title}</h4>
              <p className="mt-2 text-body-sm text-pretty text-muted">
                {item.description}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsStrengths;
