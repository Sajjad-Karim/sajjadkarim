import { Section } from "@/app/components/layout/section";
import AboutBackground from "./about-background";
import AboutHeader from "./about-header";
import AboutVisual from "./about-visual";
import AboutStory from "./about-story";
import AboutJourney from "./about-journey";
import AboutHighlights from "./about-highlights";
import AboutValues from "./about-values";
import AboutTrust from "./about-trust";
import "./about.scss";

function AboutSection() {
  return (
    <Section
      id="about"
      aria-label="About Sajjad Karim"
      className="about-section relative overflow-hidden"
      containerVariant="content"
    >
      <AboutBackground />

      <AboutHeader />

      <div className="about-section__intro grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-16">
        <AboutStory />
        <AboutVisual />
      </div>

      <AboutJourney />

      <AboutHighlights />

      <AboutValues />

      <AboutTrust />
    </Section>
  );
}

export default AboutSection;
