"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

const RESUME_HREF = "/Ian_HyunKyu_Lee_FullstackDeveloper.pdf";
const BASE_CLASS =
  "inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium";

type ResumeButtonProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof motion.a>;

export default function ResumeButton({ className = "", ...rest }: ResumeButtonProps) {
  return (
    <motion.a
      href={RESUME_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE_CLASS} ${className}`.trim()}
      aria-label="Download Resume"
      {...rest}
    >
      <Download size={20} aria-hidden />
      Download Resume
    </motion.a>
  );
}
