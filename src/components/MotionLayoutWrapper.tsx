"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

export function MotionLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    // reducedMotion="user": every framer-motion entrance in the page tree drops its
    // transform/scale animation when the OS asks for reduced motion.
    <MotionConfig reducedMotion="user">
      {/* The entrance slides the page in from 20px to the right, which makes the document
          wider than the viewport until it settles and flashes a horizontal scrollbar on
          every navigation. clip, unlike hidden, does not turn this into a scroll container,
          so vertical scrolling and the sticky navbar are untouched. */}
      <div className="overflow-x-clip">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 1, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
