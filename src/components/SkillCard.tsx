import * as Icons from "lucide-react";
import { FC } from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  category: string;
  icon: string;
  skills: string[];
}

export default function SkillCard({ category, icon, skills }: SkillCardProps) {
  const LucideIcon = Icons[icon as keyof typeof Icons] as FC<{
    className?: string;
  }>;

  return (
    <motion.div 
      className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      {/* The 4px section underline motif, repeated at card scale on hover. */}
      <span
        aria-hidden
        className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-red-600 transition-transform duration-500 group-hover:scale-x-100"
      />

      {LucideIcon && (
        <LucideIcon
          aria-hidden
          className="pointer-events-none absolute -bottom-5 -right-4 w-28 h-28 text-gray-100"
        />
      )}

      <div className="relative flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          {LucideIcon && (
            <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-blue-950">
              <LucideIcon className="w-5 h-5 text-white" />
            </span>
          )}
          <h3 className="text-xl font-semibold text-blue-950">
            {category}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
