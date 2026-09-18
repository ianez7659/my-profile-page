"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

/** A chip that returns a single project is a link, not a filter. */
const MIN_PROJECTS_PER_CHIP = 2;

/* Matches TechChip's tokens: Red Wash ground, Signal Red Deep text, 6px radius. */
const CHIP_BASE =
  "text-sm font-medium px-3 py-1.5 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const CHIP_IDLE = "bg-red-100 text-red-700 hover:bg-red-200";
const CHIP_ACTIVE = "bg-red-600 text-white";

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  /* Counts come from the data, never from a hardcoded list. */
  const techs = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((project) =>
      project.techStack.forEach((tech) =>
        counts.set(tech, (counts.get(tech) ?? 0) + 1)
      )
    );
    return [...counts.entries()]
      .filter(([, count]) => count >= MIN_PROJECTS_PER_CHIP)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [projects]);

  const shown = activeTech
    ? projects.filter((project) => project.techStack.includes(activeTech))
    : projects;

  return (
    <>
      <SectionHeading
        as="h1"
        index={`${(activeTech ?? "All").toUpperCase()} · ${String(
          shown.length
        ).padStart(2, "0")}`}
        underlineHoverClass="group-hover:w-32"
      >
        Projects
      </SectionHeading>

      <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
        <button
          type="button"
          aria-pressed={activeTech === null}
          onClick={() => setActiveTech(null)}
          className={`${CHIP_BASE} ${
            activeTech === null ? CHIP_ACTIVE : CHIP_IDLE
          }`}
        >
          All {projects.length}
        </button>

        {techs.map(([tech, count]) => (
          <button
            key={tech}
            type="button"
            aria-pressed={activeTech === tech}
            onClick={() => setActiveTech(activeTech === tech ? null : tech)}
            className={`${CHIP_BASE} ${
              activeTech === tech ? CHIP_ACTIVE : CHIP_IDLE
            }`}
          >
            {tech} {count}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {shown.map((project, idx) => (
          <ProjectCard
            key={project.slug}
            {...project}
            /* The lead project takes the full row; the rest pair up beneath it. */
            className={idx === 0 ? "md:col-span-2" : ""}
            layout={idx === 0 ? "split" : "stack"}
          />
        ))}
      </div>
    </>
  );
}
