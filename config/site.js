/**
 * Site-wide configuration — SEO, URLs, and shared constants.
 */
import { personalData } from "@/utils/data/personal-data";
import { geoSummary, seoExpertise } from "@/config/seo-content";

export const siteConfig = {
  name: personalData.name,
  title: `${personalData.name} — AI & Full Stack Product Engineer`,
  description: `${geoSummary.who} ${geoSummary.what} ${geoSummary.why}`,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sajjadkarim.dev",
  locale: "en_US",
  author: personalData.name,
  applicationName: "Sajjad Karim Portfolio",
  category: "Technology",
  keywords: [
    personalData.name,
    "AI Engineer",
    "Full Stack Engineer",
    "SaaS Developer",
    "MVP Developer",
    "Next.js Developer",
    "Upwork Top Rated Plus",
    "Automation Engineer",
    "Product Engineer",
    "Hire Full Stack Developer",
    ...seoExpertise.slice(0, 6),
  ],
  twitterHandle: "@sajjadcareem",
  ogImage: {
    url: "/sajjad.png",
    width: 1200,
    height: 630,
    alt: `${personalData.name} — AI & Full Stack Product Engineer`,
  },
};

export const socialLinks = [
  { label: "Upwork", href: personalData.upwork },
  { label: "GitHub", href: personalData.github },
  { label: "LinkedIn", href: personalData.linkedIn },
  { label: "Email", href: `mailto:${personalData.email}` },
];
