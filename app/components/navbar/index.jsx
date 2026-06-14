"use client";

import { useCallback, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  navLinks,
  navCta,
  sectionIds,
} from "@/config/navigation";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useHeaderScroll } from "@/hooks/use-header-scroll";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import NavBrand from "./nav-brand";
import NavLink from "./nav-link";
import NavCta from "./nav-cta";
import NavUpwork from "./nav-upwork";
import MobileMenu from "./mobile-menu";
import "./navbar.scss";

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

  const isLinkActive = (link) => {
    if (link.href === "/blog") {
      return pathname.startsWith("/blog");
    }
    return isHome && activeSectionId === link.sectionId;
  };

  return (
    <>
      <header
        className={cn(
          "site-header w-full",
          "animate-nav-enter motion-reduce:animate-none"
        )}
      >
        <div
          className={cn(
            "nav-float",
            !scrolled && isHome && "nav-float--hero",
            scrolled && "nav-float--scrolled"
          )}
          data-scrolled={scrolled ? "true" : "false"}
        >
          <nav aria-label="Main navigation" className="nav-float__inner">
            <div className="nav-float__brand">
              <NavBrand />
            </div>

            <ul className="nav-float__links" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    isActive={isLinkActive(link)}
                  />
                </li>
              ))}
            </ul>

            <div className="nav-float__actions">
              <NavUpwork />
              <NavCta href={navCta.href} label={navCta.label} />
            </div>

            <div className="nav-float__mobile-trigger">
              <button
                ref={menuButtonRef}
                type="button"
                className={cn(
                  "nav-menu-trigger focus-ring",
                  mobileOpen && "nav-menu-trigger--open"
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
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={closeMobile}
        activeSectionId={isHome ? activeSectionId : null}
        pathname={pathname}
        onNavigate={closeMobile}
      />
    </>
  );
}

export default Navbar;
