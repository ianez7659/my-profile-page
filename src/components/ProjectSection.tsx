"use client";

import ProjectCard from "./ProjectCard";
import Button from "./Button";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import LandingSection from "./LandingSection";
import SectionHeading from "./SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const featuredProjects = projects
  .filter((project) => project.featured !== undefined)
  .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));

export default function ProjectsSection() {
  return (
    <LandingSection id="projects" variant="plain" className="text-white">
      <SectionHeading underlineHoverClass="group-hover:w-32">
        Projects
      </SectionHeading>
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {featuredProjects.map((project, idx) => (
          <ProjectCard
            key={project.slug}
            {...project}
            /* The lead project takes the full row; the rest pair up beneath it. */
            className={idx === 0 ? "md:col-span-2" : ""}
            layout={idx === 0 ? "split" : "stack"}
          />
        ))}
      </motion.div>
      <div className="text-center mt-10">
        <Button href="/projects" variant="outline">
          View All Projects
        </Button>
      </div>
    </LandingSection>
  );
}
