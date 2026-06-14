import { cn } from "@/lib/utils";
import { aboutTrust } from "@/config/about-content";

function AboutTrust() {
  return (
    <div
      className={cn(
        "about-trust section-block section-reveal section-stagger-5",
        "rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm lg:p-8"
      )}
    >
      <p className="type-mono mb-6 text-center text-primary sm:text-left">
        Why teams trust me
      </p>
      <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
        {aboutTrust.map((item) => (
          <div key={item.label} className="text-center sm:text-left">
            <dt className="sr-only">{item.label}</dt>
            <dd className="tabular-nums font-display text-heading-md text-neutral-100">
              {item.value}
            </dd>
            <dd className="mt-1 text-caption text-muted">{item.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default AboutTrust;
