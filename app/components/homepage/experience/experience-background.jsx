/**
 * Subtle section-local depth — blends with global experience canvas.
 */
function ExperienceBackground() {
  return (
    <div
      className="career-bg pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="career-bg__wash" />
      <div className="career-bg__glow career-bg__glow--center" />
      <div className="career-bg__spine-glow" />
    </div>
  );
}

export default ExperienceBackground;
