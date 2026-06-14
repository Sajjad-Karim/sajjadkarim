/**
 * Subtle section-local depth — blends with global experience canvas.
 */
function AboutBackground() {
  return (
    <div
      className="about-bg pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="about-bg__wash" />
      <div className="about-bg__glow about-bg__glow--left" />
      <div className="about-bg__glow about-bg__glow--right" />
    </div>
  );
}

export default AboutBackground;
