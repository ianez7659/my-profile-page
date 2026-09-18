"use client";

import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";

export function MotionLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    // reducedMotion="user": every framer-motion animation in the page tree drops its
    // transform/scale animation when the OS asks for reduced motion. The entrance below
    // carries its own prefers-reduced-motion guard in globals.css.
    <MotionConfig reducedMotion="user">
      {/* The entrance slides the page in from 20px to the right, which makes the document
          wider than the viewport until it settles and flashes a horizontal scrollbar on
          every navigation. clip, unlike hidden, does not turn this into a scroll container,
          so vertical scrolling and the sticky navbar are untouched. */}
      <div className="overflow-x-clip">
        {/* `.page-enter` is a CSS animation rather than a framer-motion one, and it moves
            the page without fading it. The old entrance started at opacity 0 in the server
            markup and only recovered once requestAnimationFrame ran; rAF is suspended in a
            tab that is never rendered, so opening a page in one left it blank. A suspended
            timeline holds the `from` keyframe forever, so that keyframe must not contain
            anything that hides content. The key restarts it on navigation. */}
        <div key={pathname} className="page-enter">
          {children}
        </div>
      </div>
    </MotionConfig>
  );
}
