import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { createMetadata } from "@/lib/metadata";
import { createBlogListJsonLd, createBreadcrumbJsonLd } from "@/lib/schema";
import JsonLd from "../components/seo/json-ld";
import BlogCard from "../components/homepage/blog/blog-card";
import { Container } from "../components/layout/container";

export const metadata = createMetadata({
  title: "Blog — Next.js, React & AI Development",
  description: `Technical articles by ${personalData.name} on Next.js, React, full-stack development, AI engineering, and modern web architecture.`,
  alternates: { canonical: "/blog" },
});

async function getBlogs() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog articles");
  }

  return res.json();
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  const visibleBlogs = blogs.filter((blog) => blog?.cover_image && blog?.slug);
  const blogListSchema = createBlogListJsonLd(visibleBlogs);
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <JsonLd data={[blogListSchema, breadcrumbSchema]} />
      <Container variant="content" className="py-8 md:py-12">
        <article>
        <header className="mb-10 text-center">
          <p className="type-eyebrow mb-2">Writing</p>
          <h1 className="type-h2 text-neutral-100">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-body text-pretty text-muted">
            Articles on Next.js, React, AI development, and building production
            software — by{" "}
            <Link href="/" className="text-primary hover:text-primary-hover">
              {personalData.name}
            </Link>
            .
          </p>
        </header>

        {visibleBlogs.length === 0 ? (
          <p className="text-center text-body text-muted">
            No articles published yet. Check back soon.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {visibleBlogs.map((blog) => (
              <li key={blog.id}>
                <BlogCard blog={blog} />
              </li>
            ))}
          </ul>
        )}
        </article>
      </Container>
    </>
  );
}
