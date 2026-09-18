import { orderedProjects } from "@/data/projects";
import ProjectFilter from "@/components/ProjectFilter";
import LandingSection from "@/components/LandingSection";

export const metadata = {
  title: "Projects",
  description: "Explore personal projects built with modern web technologies.",
};

export default function ProjectsPage() {
  return (
    <main>
      <LandingSection variant="plain">
        {/* The filter owns the heading, so its count follows the selection. */}
        <ProjectFilter projects={orderedProjects} />
      </LandingSection>
    </main>
  );
}
