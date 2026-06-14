import { personalData } from "@/utils/data/personal-data";
import { siteConfig } from "@/config/site";
import { contactFaq } from "@/config/contact-content";
import { projects } from "@/config/projects-content";
import {
  geoSummary,
  seoAddress,
  seoExpertise,
  seoIndustries,
  seoOccupation,
  seoServices,
  getSeoTechnologies,
} from "@/config/seo-content";

const BASE = siteConfig.url;
const PERSON_ID = `${BASE}/#person`;
const WEBSITE_ID = `${BASE}/#website`;
const PROFILE_ID = `${BASE}/#profilepage`;
const SERVICE_ID = `${BASE}/#professionalservice`;

function absoluteUrl(path = "") {
  if (path.startsWith("http")) return path;
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Enhanced Person entity — knowledge graph anchor.
 */
export function createPersonJsonLd() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    url: BASE,
    email: personalData.email,
    telephone: personalData.phone,
    image: absoluteUrl(personalData.profile),
    jobTitle: seoOccupation.title,
    description: geoSummary.who,
    knowsAbout: seoExpertise,
    address: {
      "@type": "PostalAddress",
      addressLocality: seoAddress.locality,
      addressRegion: seoAddress.region,
      addressCountry: seoAddress.country,
      postalCode: seoAddress.postalCode,
    },
    hasOccupation: {
      "@type": "Occupation",
      name: seoOccupation.title,
      occupationalCategory: seoOccupation.alternateTitle,
      description: seoOccupation.description,
      skills: getSeoTechnologies().slice(0, 20),
    },
    sameAs: [
      personalData.github,
      personalData.linkedIn,
      personalData.twitter,
      personalData.stackOverflow,
      personalData.facebook,
      personalData.upwork,
    ].filter(Boolean),
    worksFor: {
      "@type": "Organization",
      name: "Independent / Freelance",
      url: BASE,
    },
  };
}

/**
 * WebSite entity with author linkage.
 */
export function createWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: BASE,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
  };
}

/**
 * ProfilePage — connects homepage to Person entity.
 */
export function createProfilePageJsonLd() {
  return {
    "@type": "ProfilePage",
    "@id": PROFILE_ID,
    url: BASE,
    name: `${siteConfig.name} — Portfolio`,
    description: geoSummary.what,
    mainEntity: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/**
 * ProfessionalService — capabilities and service offerings.
 */
export function createProfessionalServiceJsonLd() {
  return {
    "@type": "ProfessionalService",
    "@id": SERVICE_ID,
    name: `${siteConfig.name} — Software Development Services`,
    url: `${BASE}/#contact`,
    description: geoSummary.why,
    provider: { "@id": PERSON_ID },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: seoServices.map((s) => s.name),
    knowsAbout: seoIndustries,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: seoServices.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: { "@id": PERSON_ID },
        },
      })),
    },
  };
}

/**
 * ItemList of portfolio projects as SoftwareApplication entities.
 */
export function createProjectsItemListJsonLd() {
  return {
    "@type": "ItemList",
    "@id": `${BASE}/#projects`,
    name: "Portfolio Projects",
    description: "Production software built by Sajjad Karim — AI platforms, SaaS, and full-stack products.",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        "@id": `${BASE}/#project-${project.slug}`,
        name: project.name,
        url: project.demo,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        description: project.summary,
        author: { "@id": PERSON_ID },
        keywords: project.technologies.join(", "),
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: project.demo,
        },
        additionalProperty: [
          { "@type": "PropertyValue", name: "role", value: project.role },
          { "@type": "PropertyValue", name: "problem", value: project.problem },
          { "@type": "PropertyValue", name: "solution", value: project.solution },
          { "@type": "PropertyValue", name: "impact", value: project.impact },
        ],
      },
    })),
  };
}

/**
 * FAQPage from contact section — answers real client search queries.
 */
export function createFaqPageJsonLd() {
  return {
    "@type": "FAQPage",
    "@id": `${BASE}/#faq`,
    mainEntity: contactFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Homepage supplement — entities beyond global Person + WebSite in layout.
 */
export function createHomepageSupplementGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      createProfilePageJsonLd(),
      createProfessionalServiceJsonLd(),
      createProjectsItemListJsonLd(),
      createFaqPageJsonLd(),
    ],
  };
}

/**
 * Layout-level graph — Person + WebSite on all routes.
 */
export function createGlobalGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [createPersonJsonLd(), createWebsiteJsonLd()],
  };
}

/**
 * Blog listing ItemList schema.
 */
export function createBlogListJsonLd(articles = []) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} — Blog Articles`,
    url: `${BASE}/blog`,
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        "@id": `${BASE}/blog/${article.slug}`,
        headline: article.title,
        url: `${BASE}/blog/${article.slug}`,
        datePublished: article.published_at,
        image: article.cover_image,
        author: { "@id": PERSON_ID },
      },
    })),
  };
}

/**
 * Individual blog article schema.
 */
export function createArticleJsonLd(article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE}/blog/${article.slug}`,
    headline: article.title,
    description: article.description,
    image: article.cover_image,
    datePublished: article.published_at,
    dateModified: article.edited_at ?? article.published_at,
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: siteConfig.name,
      url: BASE,
    },
    publisher: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}/blog/${article.slug}`,
    },
    url: `${BASE}/blog/${article.slug}`,
    sameAs: article.url,
    wordCount: article.body_markdown?.split(/\s+/).length,
    timeRequired: `PT${article.reading_time_minutes}M`,
    keywords: article.tag_list?.join(", "),
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/**
 * BreadcrumbList for nested routes.
 */
export function createBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
