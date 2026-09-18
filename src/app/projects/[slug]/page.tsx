import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectSectionRenderer from "@/components/ProjectSectionRenderer";
import type { Project } from "@/types/project";
import Button from "@/components/Button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import TechChip from "@/components/TechChip";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project: Project | undefined = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main>
      {/* main no longer holds the width: the section bands below run to the screen edge. */}
      <div className="max-w-6xl mx-auto px-4 pt-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-lg underline text-red-500 hover:text-white mb-6 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <h2 className="text-3xl md:text-4xl font-medium font-audiowide mb-6 text-center text-white">
          {project.title}
        </h2>

        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {project.techStack.map((tech) => (
            <TechChip key={tech}>{tech}</TechChip>
          ))}
        </div>

        <div className="flex gap-6 justify-center">
          {project.demo && (
            <Button
              href={project.demo}
              variant="outline"
              className="flex gap-2 items-center justify-center text-sm md:text-lg"
            >
              <ExternalLink size={20} /> Live Demo
            </Button>
          )}

          <Button
            href={project.github}
            variant="outline"
            className="flex gap-2 items-center justify-center"
          >
            <Github size={20} /> GitHub
          </Button>
        </div>
      </div>

      {project.sections.map((section, idx) => (
        <ProjectSectionRenderer key={idx} section={section} index={idx} />
      ))}
    </main>
  );
}
