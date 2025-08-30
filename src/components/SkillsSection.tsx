"use client";

import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";
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

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 mx-4 rounded-xl py-20 px-4 bg-[#1e3a8a] text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="group text-3xl md:text-4xl font-medium mb-12 font-audiowide relative text-center">
          Technical Stacks
          <span className="block mx-auto mt-2 h-[3px] w-10 bg-red-500 rounded transition-all duration-500 group-hover:w-36" />
        </h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((group, index) => (
            <SkillCard
              key={group.category}
              category={group.category}
              icon={group.icon}
              skills={group.skills}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
