import { Section } from "@/app/components/layout/section";
import {
  getArchiveProjects,
  getCaseStudyProjects,
  getFeaturedProject,
} from "@/config/projects-content";
import ProjectsBackground from "./projects-background";
import ProjectsHeader from "./projects-header";
import ProjectsFeatured from "./projects-featured";
import ProjectsCasePreview from "./projects-case-preview";
import ProjectsShowcase from "./projects-showcase";
import ProjectsArchiveSection from "./projects-archive-section";
import ProjectsCta from "./projects-cta";
import "./projects.scss";

function ProjectsSection() {
  const featured = getFeaturedProject();
  const caseStudies = getCaseStudyProjects();
  const archive = getArchiveProjects();

  return (
    <Section
      id="projects"
      aria-label="Product showcase and case studies"
      className="projects-section relative overflow-hidden"
      containerVariant="wide"
    >
      <ProjectsBackground />

      <ProjectsHeader />

      <ProjectsFeatured project={featured} />

      {featured.caseStudy && (
        <ProjectsCasePreview
          caseStudy={featured.caseStudy}
          projectName={featured.name}
        />
      )}

      <ProjectsShowcase caseStudies={caseStudies} />

      <ProjectsArchiveSection projects={archive} />

      <ProjectsCta />
    </Section>
  );
}

export default ProjectsSection;
