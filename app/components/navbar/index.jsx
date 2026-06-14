"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/app/components/layout/container";
import {
  navLinks,
  navCta,
  navSecondaryAction,
  sectionIds,
} from "@/config/navigation";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useHeaderScroll } from "@/hooks/use-header-scroll";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import NavBrand from "./nav-brand";
import NavLink from "./nav-link";
import NavCta from "./nav-cta";
import MobileMenu from "./mobile-menu";

function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrolled = useHeaderScroll();
  const activeSectionId = useScrollSpy(sectionIds, isHome);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useLockBodyScroll(mobileOpen);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  const openMobile = useCallback(() => {
    setMobileOpen(true);
  }, []);

  return (
    <>
      <header
        className={cn(
          "site-header sticky top-0 z-header w-full",
          "transition-[padding,background-color,border-color,box-shadow,backdrop-filter]",
          "duration-slow ease-out motion-reduce:transition-none",
          scrolled
            ? "border-b border-border py-3 surface-glass"
            : "border-b border-transparent bg-transparent py-5",
          "animate-nav-enter motion-reduce:animate-none"
        )}
      >
        <Container variant="hero" className="relative">
          <nav
            aria-label="Main navigation"
            className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center"
          >
            {/* Brand */}
            <div className="lg:justify-self-start">
              <NavBrand />
            </div>

            {/* Desktop links — center */}
            <ul
              className="hidden items-center justify-center gap-0.5 lg:flex"
              role="list"
            >
              {navLinks.map((link) => (
                <li key={link.sectionId}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    isActive={
                      isHome && activeSectionId === link.sectionId
                    }
                  />
                </li>
              ))}
            </ul>

            {/* Desktop actions — right */}
            <div className="hidden items-center justify-end gap-2 lg:flex">
              <Link
                href={navSecondaryAction.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "type-button inline-flex h-9 items-center px-3 text-body-sm",
                  "rounded-full text-neutral-400 transition-hover focus-ring",
                  "hover:text-neutral-100"
                )}
              >
                {navSecondaryAction.label}
              </Link>
              <NavCta href={navCta.href} label={navCta.label} />
            </div>

            {/* Mobile menu toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
                "border border-border text-neutral-300",
                "transition-hover focus-ring",
                "hover:border-border-strong hover:text-neutral-100",
                mobileOpen && "border-border-accent text-primary"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={mobileOpen ? closeMobile : openMobile}
            >
              <span className="relative block h-3.5 w-4" aria-hidden="true">
                <span
                  className={cn(
                    "absolute left-0 top-0 block h-px w-full bg-current transition-all duration-normal ease-out",
                    mobileOpen && "top-1.5 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1.5 block h-px w-full bg-current transition-all duration-normal ease-out",
                    mobileOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-3 block h-px w-full bg-current transition-all duration-normal ease-out",
                    mobileOpen && "top-1.5 -rotate-45"
                  )}
                />
              </span>
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={closeMobile}
        activeSectionId={isHome ? activeSectionId : null}
        onNavigate={closeMobile}
      />
    </>
  );
}

export default Navbar;
