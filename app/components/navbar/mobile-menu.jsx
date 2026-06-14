"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import NavLink from "./nav-link";
import NavCta from "./nav-cta";
import NavUpwork from "./nav-upwork";
import { navCta, navLinks } from "@/config/navigation";

function MobileMenu({
  open,
  onClose,
  activeSectionId,
  pathname,
  onNavigate,
}) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  const isLinkActive = (link) => {
    if (link.href === "/blog") {
      return pathname.startsWith("/blog");
    }
    return activeSectionId === link.sectionId;
  };

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleNavigate = () => {
    onNavigate?.();
    onClose();
  };

  return (
    <div
      className={cn("nav-mobile lg:hidden", open && "nav-mobile--open")}
      aria-hidden={!open}
    >
      <div
        className="nav-mobile__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="nav-mobile__sheet"
      >
        <div className="nav-mobile__header">
          <span className="type-mono text-mono-xs text-muted">Navigate</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="nav-menu-trigger nav-menu-trigger--open"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="nav-mobile__body">
          <ul className="nav-mobile__list">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={cn(
                  "mobile-nav-item",
                  open && "mobile-nav-item-visible"
                )}
                style={{
                  transitionDelay: open ? `${index * 40 + 60}ms` : "0ms",
                }}
              >
                <NavLink
                  href={link.href}
                  label={link.label}
                  isActive={isLinkActive(link)}
                  onClick={handleNavigate}
                  mobile
                />
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={cn(
            "nav-mobile__footer",
            "mobile-nav-item",
            open && "mobile-nav-item-visible"
          )}
          style={{
            transitionDelay: open
              ? `${navLinks.length * 40 + 100}ms`
              : "0ms",
          }}
        >
          <NavUpwork className="nav-upwork--center" />
          <NavCta
            href={navCta.href}
            label={navCta.label}
            onClick={handleNavigate}
          />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
