import { Card } from "@/app/components/ui/card";
import { contactValueProps } from "@/config/contact-content";

function ContactValueProps() {
  return (
    <div className="contact-value section-reveal section-stagger-3">
      <div className="mb-8">
        <p className="type-mono mb-2 text-primary">What I help with</p>
        <h3 className="type-h3 text-neutral-100">Services that drive results</h3>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contactValueProps.map((item) => (
          <li key={item.id}>
            <Card
              variant="feature"
              className="group h-full transition-hover hover:border-primary/20"
            >
              <div
                className="mb-3 h-px w-8 bg-primary/40 transition-hover group-hover:w-12 group-hover:bg-primary"
                aria-hidden="true"
              />
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

export default ContactValueProps;
