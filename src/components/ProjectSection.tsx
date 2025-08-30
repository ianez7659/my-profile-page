"use client";

import ProjectCard from "./ProjectCard";
import Button from "./Button";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

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
    <section id="projects" className="py-16 scroll-mt-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="group text-3xl md:text-4xl font-medium mb-12 font-audiowide relative text-center">
          Projects
          <span className="block mx-auto mt-2 h-[4px] w-10 bg-red-600 rounded transition-all duration-500 group-hover:w-30" />
        </h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Button href="/projects" variant="outline">
            View All Projects
          </Button>

        </div>
      </div>
    </section>
  );
}
