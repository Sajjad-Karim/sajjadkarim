import Image from "next/image";
import Link from "next/link";
import { timeConverter } from "@/utils/time-converter";

function BlogCard({ blog }) {
  return (
    <article className="group h-full overflow-hidden rounded-xl border border-border bg-surface/30 transition-hover hover:border-border-strong hover:bg-surface/50">
      <Link href={`/blog/${blog.slug}`} className="flex h-full flex-col focus-ring rounded-xl">
        <figure className="relative aspect-[16/10] overflow-hidden bg-canvas">
          <Image
            src={blog.cover_image}
            height={400}
            width={640}
            alt={blog.title}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-full w-full object-cover transition-hover duration-slow group-hover:scale-[1.03]"
          />
        </figure>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2 text-caption text-primary">
            <time dateTime={blog.published_at}>{timeConverter(blog.published_at)}</time>
            <span>{blog.reading_time_minutes} min read</span>
          </div>

          <h2 className="mt-3 type-h4 text-neutral-100 transition-hover group-hover:text-primary">
            {blog.title}
          </h2>

          <p className="mt-2 flex-1 text-body-sm text-pretty text-muted line-clamp-3">
            {blog.description}
          </p>

          <p className="mt-4 text-body-sm text-primary">Read article →</p>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;
