import { cn } from "@/lib/utils";
import {
  skillsEyebrow,
  skillsHeadline,
  skillsIntro,
} from "@/config/skills-content";

function SkillsHeader() {
  return (
    <header className="skills-header mb-12 max-w-3xl lg:mb-16">
      <p className={cn("section-reveal section-stagger-1 type-eyebrow mb-4")}>
        {skillsEyebrow}
      </p>
      <h2
        className={cn(
          "section-reveal section-stagger-2 type-display-md text-balance text-neutral-0"
        )}
      >
        <span className="block">{skillsHeadline.line1}</span>
        <span className="block text-primary">{skillsHeadline.line2}</span>
      </h2>
      <p
        className={cn(
          "section-reveal section-stagger-3 mt-5 max-w-2xl text-body-lg text-pretty text-neutral-400"
        )}
      >
        {skillsIntro}
      </p>
    </header>
  );
}

export default SkillsHeader;
