import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { RevealSection, SectionBridge } from "./components/experience";
import JsonLd from "./components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { createHomepageSupplementGraphJsonLd } from "@/lib/schema";
import { geoSummary } from "@/config/seo-content";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: siteConfig.title,
  description: `${geoSummary.who} ${geoSummary.what} ${geoSummary.how}`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: siteConfig.title,
  },
});

export default function Home() {
  const homepageGraph = createHomepageSupplementGraphJsonLd();

  return (
    <>
      <JsonLd data={homepageGraph} />
      <RevealSection reveal={false}>
        <HeroSection />
      </RevealSection>
      <RevealSection>
        <Projects />
      </RevealSection>
      <RevealSection tone="wash">
        <AboutSection />
      </RevealSection>
      <RevealSection>
        <Experience />
      </RevealSection>
      <RevealSection tone="wash">
        <Skills />
      </RevealSection>
      <SectionBridge />
      <RevealSection>
        <ContactSection />
      </RevealSection>
    </>
  );
}
