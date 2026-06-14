import { careerFuture } from "@/config/career-content";

function ExperienceFuture() {
  return (
    <div className="career-future section-block section-reveal section-stagger-5">
      <div className="career-future__panel relative overflow-hidden rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
        <div
          className="career-future__glow pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary-muted blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-2xl">
          <p className="type-mono mb-3 text-primary">{careerFuture.label}</p>
          <h3 className="type-h3 text-balance text-neutral-100">
            {careerFuture.headline}
          </h3>
          <p className="mt-4 text-body-lg text-pretty text-neutral-300">
            {careerFuture.text}
          </p>
        </div>

        <ul
          className="relative mt-8 flex flex-wrap gap-2"
          aria-label="Future focus areas"
        >
          {careerFuture.focusAreas.map((area) => (
            <li key={area}>
              <span className="inline-flex rounded-full border border-primary/25 bg-primary-muted/50 px-3 py-1.5 font-mono text-mono-xs text-primary transition-hover hover:border-primary/50 hover:bg-primary-muted">
                {area}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceFuture;
