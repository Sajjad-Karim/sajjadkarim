/**
 * Fixed global background — 7-layer visual engine.
 * Sits behind all content; hero keeps its local accent layer on top.
 */
function GlobalCanvas() {
  return (
    <div className="experience-canvas" aria-hidden="true">
      {/* Layer 1: Base canvas */}
      <div className="experience-canvas__base" />

      {/* Layer 2: Gradient mesh */}
      <div className="experience-canvas__gradient" />

      {/* Layer 3: Noise texture */}
      <div className="experience-canvas__noise" />

      {/* Layer 4: Depth lighting */}
      <div className="experience-canvas__depth" />

      {/* Layer 5: Ambient glow orbs */}
      <div className="experience-canvas__glow">
        <div className="experience-canvas__glow-orb experience-canvas__glow-orb--primary" />
        <div className="experience-canvas__glow-orb experience-canvas__glow-orb--secondary" />
        <div className="experience-canvas__glow-orb experience-canvas__glow-orb--accent" />
      </div>

      {/* Layer 6: Subtle grid */}
      <div className="experience-canvas__grid" />

      {/* Layer 7: Cursor-aware ambient light (position via CSS vars) */}
      <div className="experience-canvas__ambient" />
    </div>
  );
}

export default GlobalCanvas;
