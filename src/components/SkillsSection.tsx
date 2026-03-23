"use client";

import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";
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

export default function SkillsSection() {
  return (
    <LandingSection id="skills" variant="cardBlue">
      <div className="text-center">
        <SectionHeading underlineHoverClass="group-hover:w-36">
          Technical Stacks
        </SectionHeading>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((group) => (
            <SkillCard
              key={group.category}
              category={group.category}
              icon={group.icon}
              skills={group.skills}
            />
          ))}
        </motion.div>
      </div>
    </LandingSection>
  );
}
