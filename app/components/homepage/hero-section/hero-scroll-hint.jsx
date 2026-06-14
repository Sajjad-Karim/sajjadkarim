function HeroScrollHint() {
  return (
    <div
      className="hero-reveal absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex animate-stagger-5"
      aria-hidden="true"
    >
      <span className="text-caption text-muted">Scroll</span>
      <div className="relative h-8 w-5 rounded-full border border-border">
        <span className="hero-scroll-dot absolute left-1/2 top-1.5 h-1 w-1 -translate-x-1/2 rounded-full bg-primary motion-reduce:animate-none" />
      </div>
    </div>
  );
}

export default HeroScrollHint;
