import { cn } from "@/lib/utils";
import { LinkButton } from "@/app/components/ui/link-button";
import {
  contactAvailability,
  contactPrimaryCta,
  contactTrust,
} from "@/config/contact-content";

function ContactCtaPanel() {
  return (
    <div className="contact-cta section-reveal section-stagger-4">
      {/* Primary CTA block */}
      <div className="contact-cta__hero relative overflow-hidden rounded-2xl border border-primary/20 bg-surface/40 p-6 sm:p-8">
        <div
          className="contact-cta__glow pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-muted blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <h3 className="type-h3 text-balance text-neutral-100">
            {contactPrimaryCta.headline}
          </h3>
          <p className="mt-3 text-body text-pretty text-neutral-300">
            {contactPrimaryCta.text}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton
              href={contactPrimaryCta.action.href}
              variant="primary"
              size="lg"
            >
              {contactPrimaryCta.action.label}
            </LinkButton>
            <LinkButton
              href={contactPrimaryCta.secondary.href}
              variant="outline"
              size="lg"
              external
            >
              {contactPrimaryCta.secondary.label}
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="contact-cta__availability mt-6 rounded-xl border border-border bg-surface/30 p-5">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-40 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
          </span>
          <p className="type-label text-neutral-100">
            {contactAvailability.status}
          </p>
        </div>
        <p className="mt-2 pl-5 text-body-sm text-muted">
          {contactAvailability.timezone}
        </p>
        <p className="mt-1 pl-5 text-caption text-muted">
          {contactAvailability.responseTime}
        </p>
      </div>

      {/* Trust indicators */}
      <ul className="contact-cta__trust mt-6 grid gap-3 sm:grid-cols-2">
        {contactTrust.map((item) => (
          <li
            key={item.id}
            className={cn(
              "rounded-lg border border-border bg-canvas/30 px-4 py-3",
              "transition-hover hover:border-border-strong hover:bg-surface/40"
            )}
          >
            <p className="text-body-sm font-medium text-neutral-200">
              {item.title}
            </p>
            <p className="mt-1 text-caption text-pretty text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactCtaPanel;
