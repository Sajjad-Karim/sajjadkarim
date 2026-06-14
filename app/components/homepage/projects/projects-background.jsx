function ProjectsBackground() {
  return (
    <div
      className="projects-bg pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="projects-bg__wash" />
      <div className="projects-bg__glow projects-bg__glow--top" />
      <div className="projects-bg__glow projects-bg__glow--bottom" />
    </div>
  );
}

export default ProjectsBackground;
