import { projectsSectionLabels } from "@/config/projects-content";
import ProjectsA2pShowcase from "./projects-a2p-showcase";
import ProjectsCaseStudyCard from "./projects-case-study-card";

function ProjectsShowcase({ caseStudies }) {
  const a2p = caseStudies.find((p) => p.type === "collection");
  const standard = caseStudies.filter((p) => p.type !== "collection");

  return (
    <div className="projects-showcase section-block section-stagger-4">
      <header className="projects-showcase__header mb-10 max-w-2xl">
        <p className="type-mono mb-2 text-primary">
          {projectsSectionLabels.caseStudies.eyebrow}
        </p>
        <h3 className="type-h3 text-neutral-100">
          {projectsSectionLabels.caseStudies.title}
        </h3>
        <p className="mt-3 text-body text-pretty text-muted">
          {projectsSectionLabels.caseStudies.description}
        </p>
      </header>

      <div className="projects-showcase__stack space-y-5 lg:space-y-6">
        {a2p && <ProjectsA2pShowcase project={a2p} />}

        <div className="projects-showcase__editorial flex flex-col gap-5 lg:gap-6">
          {standard.map((project) => (
            <ProjectsCaseStudyCard
              key={project.slug}
              project={project}
              layout="wide"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsShowcase;
