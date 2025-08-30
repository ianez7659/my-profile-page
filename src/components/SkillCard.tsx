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
      className="bg-white border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <div className="border border-gray-400 rounded-xl p-4 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          {LucideIcon && (
            <LucideIcon className="w-6 h-6 text-blue-950 shrink-0" />
          )}
          <h3 className="text-xl font-semibold text-blue-950">
            {category}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
