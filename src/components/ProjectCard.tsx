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
  github: string;
  demo?: string;
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  techStack,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="group rounded-2xl shadow-lg p-4 bg-white text-gray-900 transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl relative h-full flex flex-col">
        <Link href={`/projects/${slug}`} className="flex flex-col flex-grow">
          <div className="relative w-full aspect-video overflow-hidden rounded-lg flex-shrink-0 bg-gray-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay*/}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-md font-bold">View Details →</span>
            </div>
          </div>

          <div className="flex flex-col flex-grow mt-4">
            <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2 flex-grow">{description}</p>

            <ul className="flex flex-wrap gap-2 mt-3 text-sm text-red-600 font-medium">
              {techStack.map((tech, idx) => (
                <li
                  key={idx}
                  className="bg-red-100 text-red-700 px-2 py-1 rounded-md"
                >
                  {tech}
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
            className="text-gray-500 hover:text-red-600 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="text-gray-500 hover:text-red-600 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
