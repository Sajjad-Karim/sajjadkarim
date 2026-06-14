import dynamic from "next/dynamic";
import { Section } from "@/app/components/layout/section";
import ContactBackground from "./contact-background";
import ContactHeader from "./contact-header";
import ContactValueProps from "./contact-value-props";
import ContactEngagement from "./contact-engagement";
import ContactCtaPanel from "./contact-cta-panel";
import ContactMethods from "./contact-methods";
import ContactFaq from "./contact-faq";
import "./contact.scss";

const ContactForm = dynamic(() => import("./contact-form"), {
  loading: () => (
    <div
      className="contact-form__panel min-h-[32rem] animate-pulse rounded-2xl border border-border bg-surface/30"
      aria-busy="true"
      aria-label="Loading contact form"
    />
  ),
});

function ContactSection() {
  return (
    <Section
      id="contact"
      aria-label="Contact and project inquiries"
      className="contact-section relative overflow-hidden"
      containerVariant="content"
    >
      <ContactBackground />

      <ContactHeader />
      <ContactValueProps />
      <ContactEngagement />

      <div className="contact-section__main section-block grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
        <ContactCtaPanel />
        <ContactForm />
      </div>

      <ContactMethods />
      <ContactFaq />
    </Section>
  );
}

export default ContactSection;
