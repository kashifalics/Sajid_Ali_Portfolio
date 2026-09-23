"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

// The first entry is the primary identity and stays on screen longest before
// the cycle begins — this is a supporting detail, not the headline claim.
const roles = [
  "Solutions Architect",
  "Enterprise Technology Leader",
  "Full-Stack Engineer",
  "System Design & Integration",
];

export function DynamicRole() {
  const shouldReduceMotion = useSafeReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 3600);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  // Same DOM shape regardless of shouldReduceMotion (only known after
  // hydration) — branching the returned tree itself causes a hydration
  // mismatch, since the server can't know the client's motion preference.
  return (
    <div className="relative mt-3 h-8 overflow-hidden sm:h-9">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -14 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-x-0 top-0 text-xl leading-snug font-medium text-accent sm:text-2xl"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
