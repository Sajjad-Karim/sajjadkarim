import { cn } from "@/lib/utils";
import { aboutEyebrow, aboutHeadline, aboutLede } from "@/config/about-content";

function AboutHeader() {
  return (
    <header className="about-header mb-14 max-w-3xl lg:mb-20">
      <p className={cn("section-reveal section-stagger-1 type-eyebrow mb-4")}>
        {aboutEyebrow}
      </p>
      <h2
        className={cn(
          "section-reveal section-stagger-2 type-display-md text-balance text-neutral-0"
        )}
      >
        <span className="block">{aboutHeadline.line1}</span>
        <span className="block text-primary">{aboutHeadline.line2}</span>
      </h2>
      <p
        className={cn(
          "section-reveal section-stagger-3 mt-5 max-w-2xl text-body-lg text-pretty text-neutral-400"
        )}
      >
        {aboutLede}
      </p>
    </header>
  );
}

export default AboutHeader;
