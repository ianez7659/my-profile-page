import { projects, orderedProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import LandingSection from "@/components/LandingSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Projects",
  description: "Explore personal projects built with modern web technologies.",
};

export default function ProjectsPage() {
  return (
    <main>
      <LandingSection variant="plain">
        <SectionHeading
          as="h1"
          index={`ALL · ${String(projects.length).padStart(2, "0")}`}
          underlineHoverClass="group-hover:w-32"
        >
          Projects
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-8">
          {orderedProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              {...project}
              /* The lead project takes the full row; the rest pair up beneath it. */
              className={idx === 0 ? "md:col-span-2" : ""}
              layout={idx === 0 ? "split" : "stack"}
            />
          ))}
        </div>
      </LandingSection>
    </main>
  );
}
