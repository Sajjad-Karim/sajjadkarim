import Image from "next/image";
import { cn } from "@/lib/utils";
import { personalData } from "@/utils/data/personal-data";
import { aboutFloatingLabels } from "@/config/about-content";

function AboutVisual() {
  return (
    <figure
      className={cn(
        "about-visual section-reveal section-stagger-2",
        "relative mx-auto w-full max-w-sm pt-4 sm:pt-6 lg:sticky lg:top-24 lg:mx-0 lg:max-w-none lg:self-start lg:pt-10"
      )}
    >
      {/* Orbit ring */}
      <div
        className="about-visual__ring pointer-events-none absolute inset-0 rounded-full border border-border/60"
        aria-hidden="true"
      />

      {/* Portrait frame */}
      <div className="about-visual__frame relative mx-auto aspect-square w-[min(100%,18rem)] overflow-hidden rounded-2xl border border-border-strong sm:w-72 lg:w-80">
        <Image
          src={personalData.profile}
          alt={`Portrait of ${personalData.name}`}
          width={320}
          height={320}
          sizes="(max-width: 640px) 80vw, 320px"
          className="h-full w-full object-cover transition-hover duration-slow hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/40 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Floating labels */}
      <ul
        className="about-visual__labels pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {aboutFloatingLabels.map((label, index) => (
          <li
            key={label}
            className={cn(
              "about-visual__label",
              `about-visual__label--${index + 1}`
            )}
          >
            <span className="glass-premium rounded-full px-3 py-1.5 font-mono text-mono-xs text-neutral-300">
              {label}
            </span>
          </li>
        ))}
      </ul>

      {/* Name badge */}
      <figcaption className="about-visual__badge section-reveal section-stagger-4 mt-6 text-center lg:text-left">
        <p className="font-display text-heading-sm text-neutral-100">
          {personalData.name}
        </p>
        <p className="mt-1 text-body-sm text-muted">{personalData.designation}</p>
      </figcaption>
    </figure>
  );
}

export default AboutVisual;
