import Link from "next/link";
import { Container } from "@/app/components/layout/container";
import { footerContent } from "@/config/footer-content";
import { personalData } from "@/utils/data/personal-data";

function Footer() {
  return (
    <footer className="relative z-content border-t border-border bg-canvas">
      <Container variant="hero" className="py-10 lg:py-12">
        <div className="divider-gradient mb-10 max-w-md mx-auto" aria-hidden="true" />

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_auto_auto] md:items-start md:gap-x-10 lg:gap-x-14">
          <div className="text-center md:text-left">
            <p className="font-display text-heading-sm text-neutral-100">
              {personalData.name}
            </p>
            <p className="mt-1 text-body-sm text-muted">
              {footerContent.tagline}
            </p>
            <p className="mt-4 text-caption text-muted">
              {footerContent.copyright}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="text-center md:text-left">
            <p className="type-mono mb-3 text-primary">Navigate</p>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
              {footerContent.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-muted transition-hover hover:text-primary focus-ring rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center md:text-left">
            <p className="type-mono mb-3 text-primary">Connect</p>
            <ul
              className="flex flex-wrap justify-center gap-2 md:justify-start"
              aria-label="Social profiles"
            >
              {footerContent.social.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-border px-3 font-mono text-mono-xs text-muted transition-hover focus-ring hover:border-border-strong hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
