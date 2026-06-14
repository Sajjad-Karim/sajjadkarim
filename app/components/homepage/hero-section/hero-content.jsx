import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/app/components/ui/link-button";
import {
  heroBadge,
  heroCtas,
  heroExpertise,
  heroHeadline,
  heroSocialLinks,
  heroStats,
  heroSubtitle,
  heroTechStack,
  heroTrustBadges,
} from "@/config/hero-content";

function HeroContent() {
  return (
    <div className="flex flex-col justify-center">
      {/* Badge row */}
      <div
        className={cn(
          "hero-reveal mb-6 flex flex-wrap items-center gap-3",
          "animate-stagger-1"
        )}
      >
        <span className="type-eyebrow text-primary">{heroBadge.label}</span>
        <span className="h-1 w-1 rounded-full bg-border-strong" aria-hidden="true" />
        <span className="inline-flex items-center gap-2 text-body-sm text-neutral-400">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-40 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          {heroBadge.availability}
        </span>
      </div>

      {/* Headline */}
      <h1
        className={cn(
          "hero-reveal type-display-lg text-balance text-neutral-0",
          "animate-stagger-2"
        )}
      >
        <span className="block">{heroHeadline.line1}</span>
        <span className="block text-primary">{heroHeadline.line2}</span>
      </h1>

      {/* Subtitle */}
      <p
        className={cn(
          "hero-reveal mt-6 max-w-xl text-body-lg text-pretty text-neutral-400",
          "animate-stagger-3"
        )}
      >
        {heroSubtitle}
      </p>

      {/* Expertise + trust + stack — merged signal cluster */}
      <div
        className={cn(
          "hero-reveal mt-8 space-y-4",
          "animate-stagger-3"
        )}
      >
        <ul className="flex flex-wrap gap-2" aria-label="Core expertise">
          {heroExpertise.map((role) => (
            <li key={role}>
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary-muted px-3 py-1 font-mono text-mono-xs text-primary">
                {role}
              </span>
            </li>
          ))}
        </ul>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <ul
            className="flex flex-wrap gap-2"
            aria-label="Professional credentials"
          >
            {heroTrustBadges.map((badge) => (
              <li key={badge.id}>
                <span className="inline-flex min-w-[6.5rem] flex-col rounded-lg border border-border bg-surface/40 px-3 py-2">
                  <span className="font-display text-body-sm text-neutral-100">
                    {badge.value}
                  </span>
                  <span className="text-caption text-muted">{badge.label}</span>
                </span>
              </li>
            ))}
          </ul>

          <ul
            className="flex flex-wrap gap-2 sm:justify-end"
            aria-label="Primary technologies"
          >
            {heroTechStack.map((tech) => (
              <li key={tech}>
                <span className="inline-flex items-center rounded-full border border-border/80 bg-surface/40 px-2.5 py-1 font-mono text-mono-xs text-neutral-400 transition-hover hover:border-border-strong hover:text-neutral-200">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTAs */}
      <div
        className={cn(
          "hero-reveal mt-8 flex flex-wrap items-center gap-3",
          "animate-stagger-4"
        )}
      >
        <LinkButton href={heroCtas.primary.href} variant="primary" size="lg">
          {heroCtas.primary.label}
        </LinkButton>
        <LinkButton href={heroCtas.secondary.href} variant="outline" size="lg">
          {heroCtas.secondary.label}
        </LinkButton>
        <LinkButton
          href={heroCtas.upwork.href}
          variant="ghost"
          size="lg"
          external
          className="hidden sm:inline-flex"
        >
          {heroCtas.upwork.label}
        </LinkButton>
      </div>

      {/* Social + stats */}
      <div
        className={cn(
          "hero-reveal mt-10 flex flex-col gap-6 border-t border-border/60 pt-8 sm:flex-row sm:items-end sm:justify-between",
          "animate-stagger-5"
        )}
      >
        <ul className="flex items-center gap-2" aria-label="Social profiles">
          {heroSocialLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={cn(
                  "inline-flex h-10 min-w-10 items-center justify-center rounded-full",
                  "border border-border px-3 font-mono text-mono-xs text-neutral-400",
                  "transition-hover focus-ring",
                  "hover:border-border-strong hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <dl className="flex flex-wrap gap-6 sm:gap-8">
          {heroStats.map((stat) => (
            <div key={stat.label} className="min-w-[4.5rem]">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="tabular-nums font-display text-heading-md text-neutral-100">
                {stat.value}
              </dd>
              <dd className="mt-1 text-caption text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default HeroContent;
