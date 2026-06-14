import { cn } from "@/lib/utils";
import { Card } from "@/app/components/ui/card";
import { aboutHighlights } from "@/config/about-content";

function AboutHighlights() {
  return (
    <div className="about-highlights section-block section-reveal section-stagger-4">
      <div className="mb-8 max-w-xl">
        <p className="type-mono mb-2 text-primary">Expertise</p>
        <h3 className="type-h3 text-neutral-100">What I bring to the table</h3>
        <p className="mt-3 text-body text-pretty text-muted">
          Not a skill dump — a focused set of capabilities I apply to every
          product I touch.
        </p>
      </div>

      <ul className="about-highlights__grid bento-grid">
        {aboutHighlights.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              "about-highlights__item",
              index === 0 && "bento-grid__span-4 bento-grid__row-2",
              index >= 1 && index <= 4 && "bento-grid__span-4",
              index >= 5 && "bento-grid__span-6"
            )}
          >
            <Card
              variant="interactive"
              className="group h-full p-5 lg:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-mono-xs text-primary/80 transition-hover group-hover:text-primary">
                  {item.tag}
                </span>
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-canvas/50 font-mono text-mono-xs text-muted transition-hover group-hover:border-primary/30 group-hover:text-primary"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="mt-4 type-h4 text-neutral-100">{item.title}</h4>
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

export default AboutHighlights;
