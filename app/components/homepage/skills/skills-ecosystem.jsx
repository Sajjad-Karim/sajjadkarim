import { skillsDomains, skillsHub } from "@/config/skills-content";
import SkillsDomainCard from "./skills-domain-card";

function SkillsEcosystem() {
  return (
    <div className="skills-ecosystem section-reveal section-stagger-4">
      <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="type-mono mb-2 text-primary">Ecosystem</p>
          <h3 className="type-h3 text-neutral-100">Capability map</h3>
        </div>
        <p className="max-w-sm text-body-sm text-pretty text-muted">
          Technologies grouped by how they serve the product — not alphabetically.
        </p>
      </div>

      {/* Hub + domain grid */}
      <div className="skills-ecosystem__layout relative">
        {/* Central hub */}
        <div className="skills-ecosystem__hub section-reveal section-stagger-4">
          <div className="skills-ecosystem__hub-ring" aria-hidden="true" />
          <div className="skills-ecosystem__hub-core">
            <p className="type-mono text-primary">{skillsHub.label}</p>
            <p className="mt-1 font-display text-heading-sm text-neutral-100">
              {skillsHub.title}
            </p>
            <p className="mt-1 text-caption text-muted">{skillsHub.subtitle}</p>
          </div>
        </div>

        {/* Domain clusters */}
        <ul className="skills-ecosystem__grid">
          {skillsDomains.map((domain, index) => (
            <SkillsDomainCard
              key={domain.id}
              domain={domain}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsEcosystem;
