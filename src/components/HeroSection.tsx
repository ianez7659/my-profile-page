"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-20 bg-[#1e3a8a] text-gray-200 py-10 px-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
        {/* Left: Text */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-red-500 text-2xl md:text-4xl font-medium leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Web Developer
            <br />
            <motion.span 
              className="text-white text-6xl md:text-8xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Ian Lee,
            </motion.span>
            <br />
            
            <motion.span
            className="text-white text-xl md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              Focused on{" "}
            </motion.span>
            <motion.span 
              className="text-white text-xl md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              modern
            </motion.span>
            <motion.span
            className="text-white text-xl md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              , production-ready{" "}
            </motion.span>
            <motion.span
              className="text-xl md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              web applications
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Right: Image */}
        <motion.div 
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 lg:w-110 lg:h-110 rounded-full overflow-hidden shadow-2xl border-6 border-white"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/me5.jpg"
              alt="Profile image"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
