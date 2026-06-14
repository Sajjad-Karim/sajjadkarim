import { projectsSectionLabels } from "@/config/projects-content";
import ProjectsArchiveCard from "./projects-archive";

function ProjectsArchiveSection({ projects }) {
  if (!projects.length) return null;

  return (
    <div className="projects-archive section-block section-stagger-5">
      <header className="mb-8 max-w-xl">
        <p className="type-mono mb-2 text-primary">
          {projectsSectionLabels.archive.eyebrow}
        </p>
        <h3 className="type-h3 text-neutral-100">
          {projectsSectionLabels.archive.title}
        </h3>
        <p className="mt-3 text-body text-pretty text-muted">
          {projectsSectionLabels.archive.description}
        </p>
      </header>

      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectsArchiveCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsArchiveSection;
