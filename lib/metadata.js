import { siteConfig } from "@/config/site";

/**
 * Builds Next.js Metadata objects with sensible defaults.
 * @param {import('next').Metadata} [overrides]
 */
export function createMetadata(overrides = {}) {
  const {
    title,
    description,
    openGraph,
    twitter,
    alternates,
    ...rest
  } = overrides;

  const resolvedTitle = title ?? {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  };

  const resolvedDescription = description ?? siteConfig.description;

  const ogImages = openGraph?.images ?? [
    {
      url: siteConfig.ogImage.url,
      width: siteConfig.ogImage.width,
      height: siteConfig.ogImage.height,
      alt: siteConfig.ogImage.alt,
    },
  ];

  const resolvedCanonical = alternates?.canonical ?? "/";

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: rest.keywords ?? siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    applicationName: siteConfig.applicationName,
    category: siteConfig.category,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      ...alternates,
      canonical: resolvedCanonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: resolvedCanonical === "/"
        ? siteConfig.url
        : `${siteConfig.url}${resolvedCanonical}`,
      siteName: siteConfig.applicationName,
      title: typeof title === "string" ? title : siteConfig.title,
      description: resolvedDescription,
      images: ogImages,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? title : siteConfig.title,
      description: resolvedDescription,
      creator: siteConfig.twitterHandle,
      images: ogImages.map((img) => (typeof img === "string" ? img : img.url)),
      ...twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
      ],
    },
    ...rest,
  };
}
