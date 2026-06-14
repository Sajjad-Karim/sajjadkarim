"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NavLink from "./nav-link";
import NavCta from "./nav-cta";
import { navCta, navLinks, navSecondaryAction } from "@/config/navigation";

function MobileMenu({
  open,
  onClose,
  activeSectionId,
  onNavigate,
}) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

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
      className={cn(
        "fixed inset-0 z-drawer lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-overlay transition-opacity duration-slow ease-out",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col",
          "border-l border-border bg-neutral-900/95 backdrop-blur-xl",
          "transition-transform duration-slow ease-out motion-reduce:transition-none",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <span className="type-eyebrow text-muted">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              "border border-border text-neutral-300",
              "transition-hover focus-ring",
              "hover:border-border-strong hover:text-neutral-100"
            )}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 4L14 14M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col overflow-y-auto px-6 py-8"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <li
                key={link.sectionId}
                className={cn(
                  "mobile-nav-item",
                  open && "mobile-nav-item-visible"
                )}
                style={{ transitionDelay: open ? `${index * 40 + 80}ms` : "0ms" }}
              >
                <NavLink
                  href={link.href}
                  label={link.label}
                  isActive={activeSectionId === link.sectionId}
                  onClick={handleNavigate}
                  mobile
                  className="pl-4"
                />
              </li>
            ))}
          </ul>

          <div
            className={cn(
              "mt-auto flex flex-col gap-3 border-t border-border pt-8",
              "mobile-nav-item",
              open && "mobile-nav-item-visible"
            )}
            style={{ transitionDelay: open ? `${navLinks.length * 40 + 120}ms` : "0ms" }}
          >
            <NavCta
              href={navCta.href}
              label={navCta.label}
              onClick={handleNavigate}
              className="w-full justify-center"
            />
            <Link
              href={navSecondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavigate}
              className={cn(
                "type-button flex h-10 w-full items-center justify-center rounded-full",
                "border border-border text-body-sm text-neutral-300",
                "transition-hover focus-ring",
                "hover:border-border-strong hover:text-neutral-100"
              )}
            >
              {navSecondaryAction.label}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
