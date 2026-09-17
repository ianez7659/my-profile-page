"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import TechChip from "./TechChip";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo?: string;
  className?: string;
  /** split: lead card puts the shot beside the text so full width does not mean full height. */
  layout?: "stack" | "split";
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  techStack,
  github,
  demo,
  className = "",
  layout = "stack",
}: ProjectCardProps) {
  const isSplit = layout === "split";
  return (
    <motion.div
      className={`h-full ${className}`.trim()}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="group rounded-2xl shadow-[0_0_44px_4px_rgba(59,91,217,0.45)] hover:shadow-[0_0_68px_10px_rgba(59,91,217,0.65)] p-4 bg-white text-gray-900 transform transition duration-300 hover:scale-[1.02] relative h-full flex flex-col">
        <Link
          href={`/projects/${slug}`}
          className={`flex flex-col flex-grow rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ${
            isSplit ? "md:flex-row md:items-start md:gap-6" : ""
          }`}
        >
          <div
            className={`relative w-full aspect-video overflow-hidden rounded-lg flex-shrink-0 bg-gray-100 ${
              isSplit ? "md:w-1/2" : ""
            }`}
          >
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

          <div className={`flex flex-col flex-grow mt-4 ${isSplit ? "md:mt-0" : ""}`}>
            <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2 flex-grow">{description}</p>

            <ul className="flex flex-wrap gap-2 mt-3">
              {techStack.map((tech, idx) => (
                <li key={idx}>
                  <TechChip>{tech}</TechChip>
                </li>
              ))}
            </ul>
          </div>
        </Link>

        <div className="flex gap-3 mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} GitHub repository`}
            className="text-gray-500 hover:text-red-600 transition-colors duration-300 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <Github className="w-5 h-5" />
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="text-gray-500 hover:text-red-600 transition-colors duration-300 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
