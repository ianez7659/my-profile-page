import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import TechChip from "@/components/TechChip";

export const metadata = {
  title: "Projects",
  description: "Explore personal projects built with modern web technologies.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 text-white">
      <h1 className="text-3xl md:text-4xl font-medium font-audiowide mb-12 text-center">
        My Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-white"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold group-hover:underline text-blue-900">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech) => (
                  <TechChip key={tech}>{tech}</TechChip>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
