function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-secondary-muted blur-[120px]" />
      <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-primary-muted blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary-muted/50 blur-[80px]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay experience-noise" />

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  );
}

export default HeroBackground;
