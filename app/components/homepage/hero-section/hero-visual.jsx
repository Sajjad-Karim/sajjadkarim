import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { personalData } from "@/utils/data/personal-data";
import { heroHighlights } from "@/config/hero-content";

const floatDelays = ["0s", "1.4s", "2.8s"];

const cardLayout = [
  { position: "left-[0%] top-[6%]", animation: "hero-float-a" },
  { position: "right-[-2%] top-[10%]", animation: "hero-float-b" },
  { position: "right-[0%] bottom-[22%]", animation: "hero-float-c" },
];

function HeroVisual() {
  return (
    <div className="relative w-full lg:pl-4 xl:pl-8">
      <div className="hero-reveal hero-visual-scale relative mx-auto aspect-[4/5] w-full max-w-md lg:mx-0 lg:aspect-square lg:max-w-none">
        {/* Orbit rings */}
        <div className="absolute inset-[8%] rounded-full border border-border/60" />
        <div className="absolute inset-[18%] rounded-full border border-dashed border-border/40" />

        {/* Glow */}
        <div className="absolute inset-[22%] rounded-2xl bg-primary-muted blur-3xl" />

        {/* Portrait */}
        <div className="absolute inset-[20%] overflow-hidden rounded-2xl border border-border-strong shadow-strong">
          <Image
            src={personalData.profile}
            alt="Portrait of Sajjad Karim, AI and full stack product engineer"
            fill
            sizes="(max-width: 768px) 280px, 360px"
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent" />
        </div>

        {/* Floating project cards */}
        {heroHighlights.map((item, index) => {
          const layout = cardLayout[index];
          return (
            <div
              key={item.id}
              className={cn("absolute z-10 w-[148px]", layout.position)}
            >
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "block rounded-xl border border-border bg-glass px-3 py-2.5 backdrop-blur-md",
                  "transition-hover focus-ring motion-reduce:animate-none",
                  "hover:border-border-accent hover:shadow-glow-primary",
                  layout.animation
                )}
                style={{ animationDelay: floatDelays[index] }}
                aria-label={`${item.title} — ${item.tag}`}
              >
                <span className="font-mono text-mono-xs text-primary">
                  {item.tag}
                </span>
                <span className="mt-0.5 block text-body-sm font-medium text-neutral-100">
                  {item.title}
                </span>
                <span className="mt-0.5 block line-clamp-2 text-caption text-muted">
                  {item.description}
                </span>
              </Link>
            </div>
          );
        })}

        {/* Ecosystem badge */}
        <div className="absolute bottom-[6%] left-1/2 z-10 w-max -translate-x-1/2">
          <div
            className={cn(
              "rounded-full border border-border-accent bg-neutral-900/90 px-4 py-2",
              "font-mono text-mono-xs text-primary backdrop-blur-sm",
              "hero-float-b motion-reduce:animate-none"
            )}
          >
            AI · SaaS · MVP
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
