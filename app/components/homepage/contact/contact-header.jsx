import { cn } from "@/lib/utils";
import {
  contactEyebrow,
  contactHeadline,
  contactIntro,
} from "@/config/contact-content";

function ContactHeader() {
  return (
    <header className="contact-header mb-12 max-w-3xl lg:mb-16">
      <p className={cn("section-reveal section-stagger-1 type-eyebrow mb-4")}>
        {contactEyebrow}
      </p>
      <h2
        className={cn(
          "section-reveal section-stagger-2 type-display-md text-balance text-neutral-0"
        )}
      >
        <span className="block">{contactHeadline.line1}</span>
        <span className="block text-primary">{contactHeadline.line2}</span>
      </h2>
      <p
        className={cn(
          "section-reveal section-stagger-3 mt-5 max-w-2xl text-body-lg text-pretty text-neutral-400"
        )}
      >
        {contactIntro}
      </p>
    </header>
  );
}

export default ContactHeader;
