import { Section } from "@/app/components/layout/section";
import ExperienceBackground from "./experience-background";
import ExperienceHeader from "./experience-header";
import ExperienceIntro from "./experience-intro";
import ExperienceTimeline from "./experience-timeline";
import ExperienceAchievements from "./experience-achievements";
import ExperienceFuture from "./experience-future";
import "./experience.scss";

function ExperienceSection() {
  return (
    <Section
      id="experience"
      aria-label="Career journey and experience"
      className="career-section relative overflow-hidden"
      containerVariant="content"
    >
      <ExperienceBackground />

      <ExperienceHeader />
      <ExperienceIntro />
      <ExperienceTimeline />
      <ExperienceAchievements />
      <ExperienceFuture />
    </Section>
  );
}

export default ExperienceSection;
