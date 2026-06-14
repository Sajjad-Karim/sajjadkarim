import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { personalData } from "@/utils/data/personal-data";
import { createMetadata } from "@/lib/metadata";
import { createArticleJsonLd, createBreadcrumbJsonLd } from "@/lib/schema";
import JsonLd from "@/app/components/seo/json-ld";
import { LinkButton } from "@/app/components/ui/link-button";
import { Container } from "@/app/components/layout/container";

export const revalidate = 3600;

async function getBlog(slug) {
  const res = await fetch(
    `https://dev.to/api/articles/${personalData.devUsername}/${slug}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return createMetadata({
      title: "Article not found",
      robots: { index: false, follow: false },
    });
  }

  return createMetadata({
    title: blog.title,
    description: blog.description,
    alternates: { canonical: `/blog/${blog.slug}` },
    openGraph: {
      type: "article",
      publishedTime: blog.published_at,
      modifiedTime: blog.edited_at ?? blog.published_at,
      authors: [personalData.name],
      tags: blog.tag_list,
      images: blog.cover_image
        ? [{ url: blog.cover_image, alt: blog.title }]
        : undefined,
    },
    twitter: {
      images: blog.cover_image ? [blog.cover_image] : undefined,
    },
  });
}

export default async function BlogArticlePage({ params }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  const articleSchema = createArticleJsonLd(blog);
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: blog.title, path: `/blog/${blog.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <Container variant="content" className="py-8 md:py-12">
        <article>
        <header className="mx-auto max-w-3xl text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-caption text-muted">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
            </ol>
          </nav>

          <p className="type-eyebrow mb-3">Article</p>
          <h1 className="type-h2 text-balance text-neutral-100">{blog.title}</h1>
          <p className="mt-4 text-body text-pretty text-muted">{blog.description}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-caption text-muted">
            <time dateTime={blog.published_at}>
              {new Date(blog.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{blog.reading_time_minutes} min read</span>
            {blog.tag_list?.length > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <ul className="flex flex-wrap gap-2" aria-label="Tags">
                  {blog.tag_list.map((tag) => (
                    <li key={tag}>
                      <span className="rounded-full border border-border px-2 py-0.5 font-mono text-mono-xs">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </header>

        {blog.cover_image && (
          <figure className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border">
            <Image
              src={blog.cover_image}
              alt={blog.title}
              width={1200}
              height={630}
              sizes="(max-width: 1024px) 100vw, 896px"
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        )}

        {blog.body_html && (
          <div
            className="blog-article__body prose-invert mx-auto mt-10 max-w-3xl text-body text-neutral-300 [&_a]:text-primary [&_a]:underline [&_h2]:mt-10 [&_h2]:type-h3 [&_h2]:text-neutral-100 [&_h3]:mt-8 [&_h3]:type-h4 [&_h3]:text-neutral-100 [&_li]:text-neutral-300 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-surface/50 [&_pre]:p-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: blog.body_html }}
          />
        )}

        <footer className="mx-auto mt-12 max-w-3xl border-t border-border pt-8 text-center">
          <p className="text-body-sm text-muted">
            Originally published on Dev.to. You can also read it there or discuss
            in the comments.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href={blog.url} variant="primary" external>
              View on Dev.to
            </LinkButton>
            <LinkButton href="/blog" variant="outline">
              All articles
            </LinkButton>
          </div>
        </footer>
        </article>
      </Container>
    </>
  );
}
