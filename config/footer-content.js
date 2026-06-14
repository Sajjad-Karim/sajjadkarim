/**
 * Footer content — update links and copy without touching component logic.
 */
import { personalData } from "@/utils/data/personal-data";
import { upworkProfile } from "@/config/trust-content";

export const footerContent = {
  tagline: "AI & full stack product engineer — available for hire.",
  copyright: `© ${new Date().getFullYear()} ${personalData.name}. All rights reserved.`,
  links: [
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ],
  social: [
    { label: "Upwork", href: upworkProfile.url },
    { label: "GitHub", href: personalData.github },
    { label: "LinkedIn", href: personalData.linkedIn },
  ],
};
