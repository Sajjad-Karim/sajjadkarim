"use client";

import dynamic from "next/dynamic";
import { BsPersonWorkspace } from "react-icons/bs";
import { Section } from "@/app/components/layout/section";
import { educations } from "@/utils/data/educations";
import GlowCard from "../../helper/glow-card";
import lottieFile from "@/public/lottie/lotti.json";
import "@/app/css/card.scss";

const AnimationLottie = dynamic(() => import("../../helper/animation-lottie"), {
  ssr: false,
});

function Education() {
  return (
    <Section
      id="education"
      aria-label="Education and academic background"
      containerVariant="content"
    >
      <header className="mb-10 max-w-reading lg:mb-12">
        <p className="type-eyebrow mb-4">Background</p>
        <h2 className="type-h2 text-balance text-neutral-0">Education</h2>
        <p className="mt-4 text-body-lg text-pretty text-muted">
          Formal training that grounded the engineering craft.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
        <div className="mx-auto w-full max-w-[16rem] lg:sticky lg:top-24 lg:mx-0">
          <AnimationLottie animationPath={lottieFile} />
        </div>

        <ol className="flex flex-col gap-5">
          {educations.map((education) => (
            <li key={education.id}>
              <GlowCard identifier={`education-${education.id}`}>
                <div className="relative p-4 text-white sm:p-5">
                  <div className="flex justify-center sm:justify-start">
                    <p className="font-mono text-mono-xs text-primary">
                      {education.duration}
                    </p>
                  </div>
                  <div className="mt-4 flex items-start gap-4 sm:gap-5">
                    <div
                      className="flex-shrink-0 text-primary transition-hover hover:scale-110"
                      aria-hidden="true"
                    >
                      <BsPersonWorkspace size={32} />
                    </div>
                    <div className="min-w-0">
                      <p className="type-label text-neutral-100">
                        {education.title}
                      </p>
                      <p className="mt-1 text-body-sm text-muted">
                        {education.institution}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export default Education;
