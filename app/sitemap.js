import { siteConfig } from "@/config/site";
import { personalData } from "@/utils/data/personal-data";

async function getBlogEntries() {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const articles = await res.json();
    return articles.filter((article) => article?.slug);
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const baseUrl = siteConfig.url;
  const blogArticles = await getBlogEntries();

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogRoutes = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.published_at),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  /** Future: /projects/[slug], /case-studies/[slug] */
  return [...staticRoutes, ...blogRoutes];
}
