import { Section } from "@/app/components/layout/section";
import SkillsBackground from "./skills-background";
import SkillsHeader from "./skills-header";
import SkillsIntro from "./skills-intro";
import SkillsEcosystem from "./skills-ecosystem";
import SkillsAiPanel from "./skills-ai-panel";
import SkillsWorkflow from "./skills-workflow";
import SkillsStrengths from "./skills-strengths";
import SkillsFuture from "./skills-future";
import "./skills.scss";

function SkillsSection() {
  return (
    <Section
      id="skills"
      aria-label="Technology ecosystem and engineering capabilities"
      className="skills-section relative overflow-hidden"
      containerVariant="content"
    >
      <SkillsBackground />

      <SkillsHeader />
      <SkillsIntro />
      <SkillsEcosystem />
      <SkillsAiPanel />
      <SkillsWorkflow />
      <SkillsStrengths />
      <SkillsFuture />
    </Section>
  );
}

export default SkillsSection;
