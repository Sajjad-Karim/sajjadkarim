import { contactFaq } from "@/config/contact-content";

function ContactFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="contact-faq-heading"
      className="contact-faq section-block section-reveal section-stagger-5"
    >
      <div className="mb-8 max-w-xl">
        <p className="type-mono mb-2 text-primary">FAQ</p>
        <h3 id="contact-faq-heading" className="type-h3 text-neutral-100">
          Common questions
        </h3>
      </div>

      <div className="contact-faq__list space-y-3">
        {contactFaq.map((item) => (
          <details
            key={item.id}
            className="contact-faq__item group rounded-xl border border-border bg-surface/30 transition-hover open:border-border-strong open:bg-surface/50"
          >
            <summary className="cursor-pointer list-none px-5 py-4 type-label text-neutral-100 transition-hover hover:text-primary focus-ring rounded-xl [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span
                  className="contact-faq__icon flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-border font-mono text-mono-xs text-muted transition-hover group-open:rotate-45 group-open:border-primary/30 group-open:text-primary"
                  aria-hidden="true"
                >
                  +
                </span>
              </span>
            </summary>
            <div className="border-t border-border px-5 pb-4 pt-3">
              <p className="text-body-sm text-pretty text-muted">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default ContactFaq;
