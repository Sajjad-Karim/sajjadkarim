import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import HeroScrollHint from "./hero-scroll-hint";
import HeroVisual from "./hero-visual";
import { Container } from "@/app/components/layout/container";

function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative -mt-[var(--nav-clearance)] flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-[var(--hero-padding-top)] lg:pb-20"
    >
      <HeroBackground />

      <Container variant="hero" className="relative flex flex-1 flex-col justify-center">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16 2xl:gap-20">
          <HeroContent />
          <HeroVisual />
        </div>

        <HeroScrollHint />
      </Container>
    </section>
  );
}

export default HeroSection;
