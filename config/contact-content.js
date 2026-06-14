/**
 * Contact section content — conversion-focused copy and configuration.
 */

import { personalData } from "@/utils/data/personal-data";
import { upworkProfile, platformCredibility } from "@/config/trust-content";

export const contactEyebrow = "Work together";

export const contactHeadline = {
  line1: "Have an idea",
  line2: "worth building?",
};

export const contactIntro =
  "Tell me what you're building — an MVP, SaaS product, AI application, or automation system. I'll respond with honest scope, timeline, and next steps. No pressure, no jargon.";

export const contactValueProps = [
  {
    id: "mvp",
    title: "MVP Development",
    description: "Validate your idea with production-ready code — fast enough to learn, solid enough to grow.",
  },
  {
    id: "saas",
    title: "SaaS Development",
    description: "Subscription platforms built for real users, retention, and long-term maintainability.",
  },
  {
    id: "ai",
    title: "AI Applications",
    description: "Intelligent features and LLM workflows integrated into products people actually use.",
  },
  {
    id: "fullstack",
    title: "Full Stack Engineering",
    description: "One accountable engineer from database schema to deployed frontend.",
  },
  {
    id: "automation",
    title: "Automation Solutions",
    description: "Eliminate repetitive work with scripts, integrations, and smart workflows.",
  },
  {
    id: "hire",
    title: "Hire for Ongoing Work",
    description: "Long-term partnerships for teams who need a reliable product engineer on retainer.",
  },
];

export const contactEngagementModels = [
  {
    id: "founder",
    title: "Startup Founder",
    description: "From zero to launch — MVPs, pivots, and rapid iteration with clear milestones.",
    tag: "Build",
  },
  {
    id: "agency",
    title: "Agency",
    description: "Dependable engineering partner for client deliverables you can stand behind.",
    tag: "Partner",
  },
  {
    id: "business",
    title: "Business Owner",
    description: "Custom software that solves operational problems and pays for itself.",
    tag: "Solve",
  },
  {
    id: "upwork",
    title: "Upwork Client",
    description: `${platformCredibility.upworkBadge} freelancer — hire directly through Upwork or here.`,
    tag: "Hire",
  },
  {
    id: "long-term",
    title: "Long-term Partnership",
    description: "Embedded engineer for ongoing product evolution and feature delivery.",
    tag: "Grow",
  },
  {
    id: "consultation",
    title: "Consultation",
    description: "Architecture reviews, technical audits, and honest second opinions.",
    tag: "Advise",
  },
];

export const contactPrimaryCta = {
  headline: "Let's build together",
  text: "Share your project goals — I typically respond within 24 hours with thoughtful next steps.",
  action: { label: "Hire me", href: "#contact-form" },
  secondary: {
    label: upworkProfile.hireLabel,
    href: upworkProfile.url,
  },
};

export const contactAvailability = {
  status: "Available for new projects",
  timezone: "PKT (UTC+5) · Remote worldwide",
  responseTime: "Usually responds within 24 hours",
};

export const contactTrust = [
  {
    id: "upwork",
    title: platformCredibility.upworkBadge,
    description: "Verified Upwork credential with long-term client relationships.",
  },
  {
    id: "quality",
    title: "Production-first",
    description: "Shippable code, clear communication, and systems built to last.",
  },
  {
    id: "collaboration",
    title: "Direct partnership",
    description: "Work with me directly — no hand-offs, no surprises.",
  },
  {
    id: "product",
    title: "Business-aware",
    description: "Engineering decisions tied to outcomes, not feature checklists.",
  },
];

/** Contact channels — add or remove entries here */
export const contactMethods = [
  {
    id: "upwork",
    label: "Upwork",
    value: platformCredibility.upworkBadge,
    href: upworkProfile.url,
    description: "Hire through Upwork",
  },
  {
    id: "email",
    label: "Email",
    value: personalData.email,
    href: `mailto:${personalData.email}`,
    description: "Best for project inquiries",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Connect professionally",
    href: personalData.linkedIn,
    description: "Professional network",
  },
  {
    id: "github",
    label: "GitHub",
    value: "View my code",
    href: personalData.github,
    description: "Open source & projects",
  },
];

export const contactFormConfig = {
  projectTypes: [
    "MVP / New Product",
    "SaaS Development",
    "AI Application",
    "Full Stack Project",
    "Automation / Integration",
    "Performance Audit",
    "Consultation",
    "Other",
  ],
  budgetRanges: [
    { value: "", label: "Prefer not to say" },
    { value: "under-5k", label: "Under $5,000" },
    { value: "5k-15k", label: "$5,000 – $15,000" },
    { value: "15k-50k", label: "$15,000 – $50,000" },
    { value: "50k-plus", label: "$50,000+" },
  ],
};

export const contactFaq = [
  {
    id: "response",
    question: "How quickly do you respond?",
    answer:
      "I aim to reply within 24 hours on business days. Share as much context as you can — it helps me give you a useful first response.",
  },
  {
    id: "projects",
    question: "What types of projects do you take on?",
    answer:
      "MVPs, SaaS platforms, AI-powered applications, full-stack products, automation, and performance optimization — for founders, agencies, and growing businesses.",
  },
  {
    id: "upwork",
    question: "Can I hire you through Upwork?",
    answer:
      `Yes. I'm a ${platformCredibility.upworkBadge} freelancer on Upwork. You can start there or contact me directly — whichever you prefer.`,
  },
  {
    id: "process",
    question: "What does working together look like?",
    answer:
      "Initial conversation → scope & timeline → proposal → sprint-based delivery with regular updates. Clear milestones, no surprises.",
  },
];
