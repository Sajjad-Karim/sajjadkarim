/**
 * SEO + GEO content — machine-readable entity signals for search and AI systems.
 * Single source for expertise, services, industries, and factual summaries.
 */

import { contactValueProps } from "@/config/contact-content";
import { skillsDomains } from "@/config/skills-content";
import { projects } from "@/config/projects-content";
import { personalData } from "@/utils/data/personal-data";

/** Core expertise areas — used in schema knowsAbout and metadata keywords */
export const seoExpertise = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "AI Development",
  "Cursor AI",
  "Claude",
  "LLM Integration",
  "MVP Development",
  "SaaS Development",
  "Full Stack Development",
  "Performance Optimization",
  "Core Web Vitals",
  "MERN Stack",
  "Product Engineering",
  "Web Application Architecture",
  "Automation Engineering",
];

/** Industries and client contexts served */
export const seoIndustries = [
  "SaaS",
  "Startups",
  "Artificial Intelligence",
  "Enterprise Software",
  "Creative Agencies",
  "E-commerce",
  "Community Platforms",
  "Education Technology",
];

/** Services derived from contact value props — avoids duplicate copy */
export const seoServices = contactValueProps.map((service) => ({
  id: service.id,
  name: service.title,
  description: service.description,
}));

/** Flat technology list for knowledge graph */
export function getSeoTechnologies() {
  const fromDomains = skillsDomains.flatMap((domain) => domain.technologies);
  const fromProjects = projects.flatMap((project) => project.technologies);
  return [...new Set([...fromDomains, ...fromProjects])];
}

/**
 * GEO summaries — factual answers LLMs can extract without keyword stuffing.
 * These feed JSON-LD description fields and extended metadata.
 */
export const geoSummary = {
  who: `${personalData.name} is an AI and full stack product engineer — Top Rated Plus on Upwork — building for founders and teams worldwide.`,
  what: "Specializes in AI applications, SaaS platforms, MVP development, full-stack engineering, and automation with Next.js, React, and Node.js.",
  why: "Trusted by clients who need production systems shipped with clarity, accountability, and long-term maintainability.",
  how: "AI-first engineering workflow, sprint-based delivery, and full-stack ownership from scoping through deployment.",
};

/** Occupation details for Person schema */
export const seoOccupation = {
  title: "AI & Full Stack Product Engineer",
  alternateTitle: "SaaS & MVP Developer",
  description:
    "Builds AI platforms, SaaS products, and MVPs for founders and businesses — Top Rated Plus on Upwork.",
};

/** Postal address for structured data */
export const seoAddress = {
  locality: "Rawalpindi",
  region: "Punjab",
  country: "PK",
  postalCode: "43600",
};
