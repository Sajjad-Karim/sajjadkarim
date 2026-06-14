import { cn } from "@/lib/utils";
import {
  projectsEyebrow,
  projectsHeadline,
  projectsIntro,
} from "@/config/projects-content";

function ProjectsHeader() {
  return (
    <header className="projects-header mb-12 max-w-3xl lg:mb-16">
      <p className={cn("section-reveal section-stagger-1 type-eyebrow mb-4")}>
        {projectsEyebrow}
      </p>
      <h2
        className={cn(
          "section-reveal section-stagger-2 type-display-md text-balance text-neutral-0"
        )}
      >
        <span className="block">{projectsHeadline.line1}</span>
        <span className="block text-primary">{projectsHeadline.line2}</span>
      </h2>
      <p
        className={cn(
          "section-reveal section-stagger-3 mt-5 max-w-2xl text-body-lg text-pretty text-neutral-400"
        )}
      >
        {projectsIntro}
      </p>
    </header>
  );
}

export default ProjectsHeader;
