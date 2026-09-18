import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, orderedProjects } from "@/data/projects";
import ProjectSectionRenderer from "@/components/ProjectSectionRenderer";
import type { Project } from "@/types/project";
import Button from "@/components/Button";
import PagerLink from "@/components/PagerLink";
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

  /* The course wraps: the last project points back at the first, never at nothing. */
  const position = orderedProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    orderedProjects[(position + 1) % orderedProjects.length] ?? null;

  /* Only titled sections are stages. The screenshot gallery is a beat, so it takes no number. */
  let stageCount = 0;
  const stages = project.sections.map((section) =>
    section.title ? String(++stageCount).padStart(2, "0") : undefined
  );

  return (
    <main>
      {/* The same track surface the landing hero sits on, reused rather than rewritten. */}
      <section className="hero-track w-full px-4 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-gray-400 hover:text-white transition-colors mb-6 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ArrowLeft size={16} aria-hidden />
            ALL PROJECTS
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="md:w-[600px] md:shrink-0">
              <h1 className="text-3xl md:text-4xl font-medium font-audiowide text-white leading-tight">
                {project.title}
              </h1>
              <span className="block h-[4px] w-10 bg-red-600 rounded mt-3 mb-5" />

              <p className="text-lg text-gray-100 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <TechChip key={tech}>{tech}</TechChip>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.demo && (
                  <Button
                    href={project.demo}
                    variant="outline"
                    size="auto"
                    className="text-sm md:text-base"
                  >
                    <ExternalLink size={20} aria-hidden /> Live Demo
                  </Button>
                )}

                <Button
                  href={project.github}
                  variant="outline"
                  size="auto"
                  className="text-sm md:text-base"
                >
                  <Github size={20} aria-hidden /> GitHub
                </Button>
              </div>
            </div>

            {/* Headlight glow, the same one the project cards carry. */}
            <div className="relative w-full md:flex-grow aspect-video md:aspect-auto md:h-60 rounded-lg overflow-hidden bg-[#172554] shadow-[0_0_44px_4px_rgba(59,91,217,0.45)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {project.sections.map((section, idx) => (
        <ProjectSectionRenderer
          key={idx}
          section={section}
          index={idx}
          stage={stages[idx]}
        />
      ))}

      {nextProject && nextProject.slug !== project.slug && (
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <PagerLink
            href={`/projects/${nextProject.slug}`}
            label="NEXT ON THE COURSE"
            title={nextProject.title}
            direction="next"
          />
        </div>
      )}
    </main>
  );
}
