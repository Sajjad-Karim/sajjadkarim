function SkillsBackground() {
  return (
    <div
      className="skills-bg pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="skills-bg__wash" />
      <div className="skills-bg__glow skills-bg__glow--left" />
      <div className="skills-bg__glow skills-bg__glow--right" />
      <div className="skills-bg__grid" />
    </div>
  );
}

export default SkillsBackground;
