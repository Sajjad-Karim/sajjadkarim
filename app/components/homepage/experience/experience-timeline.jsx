import { careerMilestones } from "@/config/career-content";
import ExperienceMilestoneCard from "./experience-milestone-card";

function ExperienceTimeline() {
  return (
    <div className="career-timeline section-reveal section-stagger-4">
      {/* Central spine (desktop) */}
      <div className="career-timeline__spine" aria-hidden="true">
        <div className="career-timeline__spine-track" />
        <div className="career-timeline__spine-progress" />
      </div>

      <ol className="career-timeline__list relative">
        {careerMilestones.map((milestone, index) => (
          <ExperienceMilestoneCard
            key={milestone.id}
            milestone={milestone}
            index={index}
            isLast={index === careerMilestones.length - 1}
          />
        ))}
      </ol>
    </div>
  );
}

export default ExperienceTimeline;
