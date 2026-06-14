/**
 * Hero section content — single source for copy, stats, and visual data.
 */

import { upworkProfile, heroTrustBadges } from "@/config/trust-content";

export { heroTrustBadges };

export const heroBadge = {
  label: "AI & Full Stack Product Engineer",
  availability: "Available for hire",
};

export const heroHeadline = {
  line1: "I build AI products,",
  line2: "SaaS platforms & MVPs.",
};

export const heroSubtitle =
  "Elite product engineer for founders and teams who need production systems — not prototypes. AI applications, full-stack SaaS, MVPs, and automation — shipped with clarity, speed, and long-term maintainability.";

/** Primary expertise signals — who you hire, not generic job titles */
export const heroExpertise = [
  "AI Engineer",
  "Full Stack Engineer",
  "SaaS Builder",
  "MVP Specialist",
  "Automation Expert",
];

export const heroTechStack = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "AI / LLM",
];

export const heroStats = [
  { value: "Top Rated+", label: "Upwork freelancer" },
  { value: "5+", label: "Years in production" },
  { value: "AI · SaaS", label: "Core specialty" },
];

export const heroHighlights = [
  {
    id: "ai",
    title: "Mother of Peace",
    tag: "AI Platform",
    description: "GPT-powered spiritual community",
    href: "https://motherofpeace.ai/",
  },
  {
    id: "saas",
    title: "Start Visual",
    tag: "SaaS",
    description: "Portfolio platform for creatives",
    href: "https://start-visual.xyz/",
  },
  {
    id: "web3",
    title: "Clarify DAO",
    tag: "Web3",
    description: "NFT marketplace experience",
    href: "https://app.clarifi.live/",
  },
];

export const heroSocialLinks = [
  {
    label: "Upwork",
    href: upworkProfile.url,
  },
  {
    label: "GitHub",
    href: "https://github.com/Sajjad-Karim",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sajjad-karim/",
  },
];

export const heroCtas = {
  primary: { label: "Start a project", href: "/#contact" },
  secondary: { label: "View projects", href: "/#projects" },
  upwork: {
    label: upworkProfile.label,
    href: upworkProfile.url,
  },
};
