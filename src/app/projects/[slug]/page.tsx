import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectSectionRenderer from "@/components/ProjectSectionRenderer";
import type { Project } from "@/types/project";
import Button from "@/components/Button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

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
    <main className="max-w-11/12 mx-auto px-4 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-lg underline text-red-500 hover:text-red-300 mb-6"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>
      <h2 className="text-4xl font-medium mb-6 text-center text-white">
        {project.title}
      </h2>

      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-6 mb-12 justify-center">
        <Button
          href={project.demo}
          variant="outline"
          className="flex gap-2 items-center justify-center text-sm md:text-lg"
        >
          <ExternalLink size={20} /> Live Demo
        </Button>

        <Button
          href={project.github}
          variant="outline"
          className="flex gap-2 items-center justify-center"
        >
          <Github size={20} /> GitHub
        </Button>
      </div>

      {project.sections.map((section, idx) => (
        <ProjectSectionRenderer key={idx} section={section} />
      ))}
    </main>
  );
}
