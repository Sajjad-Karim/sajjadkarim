import { Card } from "@/app/components/ui/card";
import { contactEngagementModels } from "@/config/contact-content";

function ContactEngagement() {
  return (
    <div className="contact-engagement section-block section-reveal section-stagger-4">
      <div className="mb-8 max-w-xl">
        <p className="type-mono mb-2 text-primary">Engagement</p>
        <h3 className="type-h3 text-neutral-100">Who I work with</h3>
        <p className="mt-3 text-body text-pretty text-muted">
          Flexible models — from one-off builds to long-term product partnerships.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contactEngagementModels.map((model) => (
          <li key={model.id}>
            <Card
              variant="interactive"
              className="group h-full p-5 lg:p-6"
            >
              <span className="font-mono text-mono-xs text-primary/80 transition-hover group-hover:text-primary">
                {model.tag}
              </span>
              <h4 className="mt-3 type-h4 text-neutral-100">{model.title}</h4>
              <p className="mt-2 text-body-sm text-pretty text-muted">
                {model.description}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactEngagement;
