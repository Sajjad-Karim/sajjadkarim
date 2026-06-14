import { Card } from "@/app/components/ui/card";
import { careerAchievements } from "@/config/career-content";

function ExperienceAchievements() {
  return (
    <div className="career-achievements section-block section-reveal section-stagger-5">
      <div className="mb-8 max-w-xl">
        <p className="type-mono mb-2 text-primary">Highlights</p>
        <h3 className="type-h3 text-neutral-100">What this journey produced</h3>
        <p className="mt-3 text-body text-pretty text-muted">
          Measurable outcomes and capabilities — not buzzwords.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {careerAchievements.map((item) => (
          <li key={item.id}>
            <Card
              variant="interactive"
              className="group h-full p-5 lg:p-6"
            >
              <p className="font-display text-heading-md tabular-nums text-primary transition-hover group-hover:brightness-110">
                {item.value}
              </p>
              <p className="mt-2 type-label text-neutral-100">{item.label}</p>
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

export default ExperienceAchievements;
