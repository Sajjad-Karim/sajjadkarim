import { contactMethods } from "@/config/contact-content";

function ContactMethods() {
  return (
    <address className="contact-methods section-block section-reveal section-stagger-5 not-italic">
      <div className="mb-8">
        <p className="type-mono mb-2 text-primary">Other ways to reach me</p>
        <h3 className="type-h3 text-neutral-100">Alternative contact</h3>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {contactMethods.map((method) => (
          <li key={method.id}>
            <a
              href={method.href}
              target={method.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                method.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="contact-methods__link group flex h-full flex-col rounded-xl border border-border bg-surface/30 p-5 transition-hover hover:border-border-strong hover:bg-surface/60 focus-ring"
            >
              <span className="font-mono text-mono-xs text-primary">
                {method.label}
              </span>
              <span className="mt-2 type-label text-neutral-100 transition-hover group-hover:text-primary">
                {method.value}
              </span>
              <span className="mt-1 text-caption text-muted">
                {method.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
}

export default ContactMethods;
