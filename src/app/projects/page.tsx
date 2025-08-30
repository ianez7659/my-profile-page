import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Explore personal projects built with modern web technologies.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 text-white">
      <h1 className="text-3xl md:text-6xl font-bold mb-12 text-center">
        My Projects
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 bg-[#1e3a8a] rounded-xl p-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-white dark:bg-neutral-900"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold group-hover:underline text-blue-900 dark:text-white">
                {project.title}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
