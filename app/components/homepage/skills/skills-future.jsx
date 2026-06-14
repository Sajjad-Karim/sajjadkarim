import { skillsFuture } from "@/config/skills-content";

function SkillsFuture() {
  return (
    <div className="skills-future section-block section-reveal section-stagger-5">
      <div className="skills-future__panel rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm sm:p-8">
        <p className="type-mono mb-3 text-primary">{skillsFuture.label}</p>
        <h3 className="type-h3 text-balance text-neutral-100">
          {skillsFuture.headline}
        </h3>
        <p className="mt-4 max-w-2xl text-body text-pretty text-neutral-300">
          {skillsFuture.text}
        </p>

        <ul
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Future learning areas"
        >
          {skillsFuture.focusAreas.map((area) => (
            <li key={area}>
              <span className="inline-flex rounded-full border border-border bg-canvas/50 px-3 py-1.5 font-mono text-mono-xs text-neutral-400 transition-hover hover:border-primary/30 hover:text-primary">
                {area}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsFuture;
