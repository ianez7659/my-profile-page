"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import ResumeButton from "@/components/ResumeButton";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-track scroll-mt-20 text-gray-200 py-16 md:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
        {/* Left: Text */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <motion.p
            className="text-red-600 text-2xl md:text-4xl font-medium leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
          >
            Web Developer
          </motion.p>

          <motion.h2
            className="text-white text-[clamp(3rem,9vw,6rem)] font-medium font-audiowide leading-tight mt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          >
            Ian Lee
          </motion.h2>

          <motion.p
            className="text-white text-lg md:text-xl mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          >
            React · Next.js · Node · PostgreSQL
          </motion.p>

          <motion.p
            className="text-gray-300 text-sm md:text-base mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          >
            Vancouver, BC
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center md:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          >
            <ResumeButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            />
            <Button href="/projects" variant="outline" size="auto">
              <ArrowRight size={20} aria-hidden />
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div 
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-110 lg:h-110 rounded-full shadow-2xl border-6 border-white"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            transition={{ duration: 0.3 }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-full border border-red-500/60"
            />
            <Image
              src="/images/me5.webp"
              alt="Profile image"
              width={600}
              height={600}
              className="object-cover w-full h-full rounded-full"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
