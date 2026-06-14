import { LinkButton } from "@/app/components/ui/link-button";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Page not found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
});

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="type-mono text-primary">404</p>
      <h1 className="mt-4 type-display-md text-neutral-0">Page not found</h1>
      <p className="mt-4 max-w-md text-body text-pretty text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <LinkButton href="/" variant="primary" size="lg" className="mt-8">
        Back to home
      </LinkButton>
    </div>
  );
}
