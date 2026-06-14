import { cn } from "@/lib/utils";
import {
  careerEyebrow,
  careerHeadline,
  careerIntro,
} from "@/config/career-content";

function ExperienceHeader() {
  return (
    <header className="career-header mb-12 max-w-3xl lg:mb-16">
      <p className={cn("section-reveal section-stagger-1 type-eyebrow mb-4")}>
        {careerEyebrow}
      </p>
      <h2
        className={cn(
          "section-reveal section-stagger-2 type-display-md text-balance text-neutral-0"
        )}
      >
        <span className="block">{careerHeadline.line1}</span>
        <span className="block text-primary">{careerHeadline.line2}</span>
      </h2>
      <p
        className={cn(
          "section-reveal section-stagger-3 mt-5 max-w-2xl text-body-lg text-pretty text-neutral-400"
        )}
      >
        {careerIntro}
      </p>
    </header>
  );
}

export default ExperienceHeader;
