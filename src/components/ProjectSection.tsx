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

export default function ProjectsSection() {
  return (
    <LandingSection id="projects" variant="plain" className="text-white">
      <SectionHeading underlineHoverClass="group-hover:w-32">
        Projects
      </SectionHeading>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.slice(0, 3).map((project, idx) => (
          <ProjectCard key={idx} {...project} />
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
