import { cn } from "@/lib/utils";
import { Card } from "@/app/components/ui/card";
import { aboutValues } from "@/config/about-content";

function AboutValues() {
  return (
    <div className="about-values section-block section-reveal section-stagger-5">
      <div className="mb-8">
        <p className="type-mono mb-2 text-primary">Values</p>
        <h3 className="type-h3 text-neutral-100">How I work</h3>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aboutValues.map((value) => (
          <li key={value.id}>
            <Card
              variant="feature"
              className="group h-full transition-hover hover:border-primary/20"
            >
              <div
                className="mb-4 h-px w-8 bg-primary/50 transition-hover group-hover:w-12 group-hover:bg-primary"
                aria-hidden="true"
              />
              <h4 className="type-label text-neutral-100">{value.title}</h4>
              <p className="mt-2 text-body-sm text-pretty text-muted">
                {value.description}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutValues;
