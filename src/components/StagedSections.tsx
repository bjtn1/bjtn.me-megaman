import StageWipe from "./StageWipe";
import ResumeSection from "./ResumeSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import StageDivider from "./StageDivider";

/**
 * All main content sections wrapped with stage wipe transitions.
 * This is a single React component so StageWipe's useInView works correctly.
 */
export default function StagedSections() {
  return (
    <>
      <StageWipe>
        <ResumeSection />
      </StageWipe>
      <StageDivider />
      <StageWipe>
        <ProjectsSection />
      </StageWipe>
      <StageDivider />
      <StageWipe>
        <SkillsSection />
      </StageWipe>
      <StageDivider />
      <StageWipe>
        <EducationSection />
      </StageWipe>
      <StageDivider />
      <StageWipe>
        <ExperienceSection />
      </StageWipe>
    </>
  );
}
