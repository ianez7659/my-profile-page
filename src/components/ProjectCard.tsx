"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  techStack,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <Link
        href={`/projects/${slug}`}
        className="group rounded-2xl shadow-lg p-4 bg-white text-gray-900 transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl block relative"
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay*/}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-md font-bold">View Details →</span>
          </div>
        </div>

        <h3 className="mt-4 text-xl font-bold text-blue-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        <ul className="flex flex-wrap gap-2 mt-2 text-sm text-red-600 font-medium">
          {techStack.map((tech, idx) => (
            <li
              key={idx}
              className="bg-red-100 text-red-700 px-2 py-1 rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-3 mt-4 opacity-50 pointer-events-none">
          <Github className="w-5 h-5" />
          <ExternalLink className="w-5 h-5" />
        </div>
      </Link>
    </motion.div>
  );
}
