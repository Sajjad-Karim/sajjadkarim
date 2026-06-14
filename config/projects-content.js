/**
 * Projects showcase content — data-driven product catalog.
 * Tiers: featured → case studies → archive
 */

import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";

export const projectsEyebrow = "Work";

export const projectsHeadline = {
  line1: "Production systems",
  line2: "clients rely on.",
};

export const projectsIntro =
  "From SaaS platforms to enterprise tools and high-volume delivery pipelines — each project started with a business problem and ended with shipped, scalable software.";

export const projectsSectionLabels = {
  caseStudies: {
    eyebrow: "Case studies",
    title: "Deep dives into real delivery",
    description:
      "Problem, solution, role, and impact — how production software gets built under real constraints.",
  },
  archive: {
    eyebrow: "More work",
    title: "Additional products shipped",
    description: "Selected projects from the broader portfolio.",
  },
};

export const projectsCta = {
  headline: "Ready to build your next product?",
  text: "Whether it's an MVP, SaaS platform, or enterprise system — let's scope it clearly and ship with confidence.",
  primary: { label: "Start a project", href: "/#contact" },
  secondary: { label: "View experience", href: "/#experience" },
};

/** Display-only category labels */
export const projectCategories = {
  saas: "SaaS",
  enterprise: "Enterprise",
  web3: "Web3",
  ai: "AI",
  "full-stack": "Full Stack",
  frontend: "Frontend",
  production: "Production at Scale",
  backend: "Backend",
};

export const projects = [
  /* ─── FEATURED ─── */
  {
    id: 1,
    slug: "start-visual",
    tier: "featured",
    name: "Start Visual",
    categories: ["saas", "full-stack", "frontend"],
    status: "Live",
    role: "Full Stack Developer",
    tagline: "Portfolio SaaS for creatives and agencies",
    summary:
      "A subscription platform that lets creatives and agencies launch polished portfolio sites without wrestling complex tooling — beautiful templates, fast setup, and a product experience that matches the quality of the work being showcased.",
    problem:
      "Creatives and small agencies needed portfolio sites that looked premium — but existing tools were either too generic, too complex, or required developers to maintain.",
    solution:
      "Built a full-stack SaaS with customizable templates, intuitive content management, and a responsive frontend designed for visual-first brands.",
    impact:
      "Enabled professionals to launch branded portfolio experiences in hours — reducing time-to-market and elevating perceived quality for their own clients.",
    metrics: [
      { value: "SaaS", label: "Product model" },
      { value: "Templates", label: "Customizable" },
      { value: "Live", label: "In production" },
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://start-visual.xyz/",
    code: "",
    image: crefin,
    caseStudy: {
      problem:
        "Portfolio tools were either too generic or too complex for creative professionals who needed speed and polish.",
      research:
        "Analyzed competitor flows, identified gaps in customization, and mapped the minimum viable template system.",
      architecture:
        "React SPA with Express REST API and MongoDB for user content, templates, and subscription logic.",
      development:
        "Template engine first, then customization layer, then deployment pipeline for client sites.",
      challenges:
        "Balancing flexibility for creatives with simplicity for non-technical users.",
      result:
        "Launch-ready SaaS with customizable portfolio templates and a polished product experience.",
      impact:
        "Creatives ship professional portfolio sites in hours instead of weeks.",
    },
  },

  /* ─── CASE STUDIES ─── */
  {
    id: 2,
    slug: "twilio-a2p-campaigns",
    tier: "case-study",
    type: "collection",
    name: "300+ Twilio A2P Campaign Approval Websites",
    categories: ["production", "frontend", "full-stack"],
    status: "Delivered",
    role: "Frontend Developer",
    tagline: "High-volume A2P compliance websites for real estate",
    summary:
      "Designed and delivered 300+ production websites for the real estate industry — each built to support Twilio A2P campaign approval workflows with consistent quality, responsive layouts, and rapid deployment.",
    problem:
      "Real estate businesses needed compliant, professional web presences at scale to satisfy Twilio A2P campaign approval requirements — manual one-off builds couldn't keep pace with demand.",
    solution:
      "Engineered a repeatable production workflow: modern responsive templates, standardized content patterns, and deployment automation that maintained quality across hundreds of unique brand identities.",
    impact:
      "Delivered 300+ live production websites with high consistency, fast turnaround, and a workflow that scaled without sacrificing craft.",
    metrics: [
      { value: "300+", label: "Websites delivered" },
      { value: "A2P", label: "Compliance-ready" },
      { value: "RE", label: "Real estate" },
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "JavaScript"],
    demo: "",
    code: "",
    image: realEstate,
    representativeSites: [
      {
        name: "Open Acre Investments",
        url: "https://openacreinvestmentsllc.vercel.app/",
      },
      {
        name: "Teleios Land Acquisitions",
        url: "https://teleioslandacquisitionsllc.vercel.app/",
      },
      {
        name: "Cozy Villas",
        url: "https://cozyvllas.vercel.app/",
      },
      {
        name: "Durable Living Solutions",
        url: "https://durablelivingsolutions.vercel.app/",
      },
    ],
    collectionNote: "300+ similar production websites delivered",
    highlights: [
      "Fast production workflow",
      "High visual consistency",
      "Modern responsive development",
      "Deployment automation",
    ],
    caseStudy: {
      problem:
        "Clients required A2P-compliant websites at a volume and pace that traditional bespoke development couldn't support.",
      research:
        "Mapped Twilio A2P approval requirements and standardized the minimum viable site structure for real estate brands.",
      architecture:
        "Component-based Next.js templates with shared design tokens and automated Vercel deployment per client.",
      development:
        "Template system → content slots → QA checklist → deploy — optimized for throughput without quality drift.",
      challenges:
        "Maintaining brand uniqueness across hundreds of sites while keeping build time predictable.",
      result:
        "A scalable delivery pipeline producing compliant, responsive websites ready for campaign approval.",
      impact:
        "300+ businesses equipped with production web presences supporting their SMS outreach workflows.",
    },
  },
  {
    id: 3,
    slug: "idigital",
    tier: "case-study",
    name: "iDigital",
    categories: ["enterprise", "full-stack", "ai"],
    status: "Internal Product",
    role: "Full Stack Developer",
    tagline: "AI-powered employee & driver management",
    summary:
      "An internal enterprise platform for secure employee and driver document management — with automated expiration tracking, compliance alerts, and role-based access control.",
    problem:
      "Operations teams struggled to track document expirations, compliance status, and role permissions across employees and drivers — spreadsheets and manual checks created risk and wasted time.",
    solution:
      "Built a full-stack management system with AI-assisted workflows, automated expiration alerts, secure document storage, and granular role-based access — wrapped in a responsive, operator-friendly interface.",
    impact:
      "Centralized document lifecycle management with proactive compliance alerts — reducing manual overhead and operational risk for internal teams.",
    metrics: [
      { value: "Enterprise", label: "Architecture" },
      { value: "AI", label: "Workflows" },
      { value: "RBAC", label: "Access control" },
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
    ],
    demo: "",
    code: "",
    image: ayla,
    highlights: [
      "AI-powered workflows",
      "Document automation",
      "Compliance alerts",
      "Secure management",
      "Responsive UI",
    ],
    caseStudy: {
      problem:
        "Manual document tracking across employees and drivers created compliance gaps and administrative burden.",
      research:
        "Mapped document types, expiration rules, and role hierarchies with operations stakeholders.",
      architecture:
        "Next.js frontend, Node.js API layer, MongoDB data store, and role-based permission middleware.",
      development:
        "Core document model first, then expiration engine, then AI-assisted workflow hooks.",
      challenges:
        "Balancing security requirements with an interface operators could use daily without friction.",
      result:
        "Production internal platform with automated tracking, alerts, and secure document management.",
      impact:
        "Operations teams gained a single source of truth for compliance-critical documentation.",
    },
  },
  {
    id: 4,
    slug: "clarify-dao",
    tier: "case-study",
    name: "Clarify DAO",
    categories: ["web3", "frontend"],
    status: "Live",
    role: "Frontend Developer",
    tagline: "NFT marketplace experience",
    summary:
      "Frontend development for an NFT marketplace — modern architecture, responsive UI, and product-focused flows that make Web3 interactions feel intentional and accessible.",
    problem:
      "The product needed a frontend that could communicate trust and clarity in a Web3 context — without the cluttered, confusing patterns common in early NFT platforms.",
    solution:
      "Built responsive marketplace interfaces with clean information hierarchy, wallet-aware flows, and a product-first approach to NFT discovery and interaction.",
    impact:
      "Delivered a polished marketplace frontend that elevated the product's credibility and usability for collectors and creators.",
    metrics: [
      { value: "Web3", label: "NFT marketplace" },
      { value: "Responsive", label: "All devices" },
      { value: "Live", label: "Production" },
    ],
    technologies: ["React", "Next.js", "Web3", "JavaScript", "Tailwind CSS"],
    demo: "https://app.clarifi.live/",
    code: "",
    image: crefin,
    highlights: [
      "Modern frontend architecture",
      "Web3 / NFT experience",
      "Responsive UI",
      "Product-focused development",
    ],
    caseStudy: {
      problem:
        "NFT marketplaces often prioritize hype over usability — the product needed clarity and trust in every interaction.",
      research:
        "Studied marketplace patterns, wallet connection flows, and collector decision journeys.",
      architecture:
        "Component-driven React frontend with wallet integration and responsive layout system.",
      development:
        "Core browsing and detail flows first, then wallet interactions, then polish pass.",
      challenges:
        "Making Web3 flows feel as predictable as traditional product UI without dumbing down the experience.",
      result:
        "Production marketplace frontend with responsive layouts and intentional user flows.",
      impact:
        "A credible product surface for an NFT marketplace competing on experience, not just features.",
    },
  },

  /* ─── ARCHIVE ─── */
  {
    id: 5,
    slug: "mother-of-peace",
    tier: "archive",
    name: "Mother of Peace",
    categories: ["ai", "saas", "full-stack"],
    status: "Live",
    role: "Full Stack Developer",
    tagline: "GPT-powered spiritual community platform",
    summary:
      "An AI-native social platform combining intelligent chat, community features, and gamified engagement.",
    problem:
      "Users needed accessible spiritual guidance and community connection without fragmented tools.",
    solution:
      "Built an AI chatbot integrated with a full social network — posts, groups, and real-time engagement.",
    impact:
      "Delivered a unified platform where AI guidance and human community coexist in one experience.",
    metrics: [
      { value: "GPT-4", label: "AI engine" },
      { value: "Social", label: "Community" },
    ],
    technologies: ["Next.js", "MongoDB", "RTK", "GPT", "Node.js"],
    demo: "https://motherofpeace.ai/",
    code: "",
    image: crefin,
  },
  {
    id: 6,
    slug: "ninfa",
    tier: "archive",
    name: "Ninfa",
    categories: ["backend", "full-stack"],
    status: "Prototype",
    role: "Full Stack Developer",
    tagline: "Backend architecture for a product prototype",
    summary:
      "REST API development and admin panel for a product prototype with frontend team integration.",
    problem:
      "The product needed robust backend APIs and an intuitive admin interface before the frontend could scale.",
    solution:
      "Designed REST APIs and built a responsive admin panel for seamless frontend integration.",
    impact:
      "Enabled the frontend team to ship features against stable, documented API contracts.",
    metrics: [
      { value: "REST", label: "API design" },
      { value: "Admin", label: "Panel built" },
    ],
    technologies: ["Node.js", "PHP", "React", "Bootstrap", "MongoDB", "SQL"],
    demo: "https://ninfa.io/",
    code: "",
    image: realEstate,
  },
];

/** Helpers — keep logic out of components */
export function getCategoryLabel(slug) {
  return projectCategories[slug] ?? slug;
}

export function getFeaturedProject() {
  return projects.find((p) => p.tier === "featured") ?? projects[0];
}

export function getCaseStudyProjects() {
  return projects.filter((p) => p.tier === "case-study");
}

export function getArchiveProjects() {
  return projects.filter((p) => p.tier === "archive");
}

/** @deprecated use tier helpers */
export function getCollectionProjects() {
  return getArchiveProjects();
}
