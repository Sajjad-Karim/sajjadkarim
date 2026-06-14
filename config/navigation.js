/**
 * Central navigation configuration — single source for header links.
 * Order follows page scroll (conversion-first).
 */

import { upworkProfile } from "@/config/trust-content";

export const navLinks = [
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
  { label: "Blog", href: "/blog", sectionId: null },
];

export const sectionIds = navLinks
  .map((link) => link.sectionId)
  .filter(Boolean);

export const navCta = {
  label: "Hire Me",
  href: "/#contact",
  sectionId: "contact",
};

export const navSecondaryAction = {
  label: upworkProfile.shortLabel,
  href: upworkProfile.url,
  external: true,
};
