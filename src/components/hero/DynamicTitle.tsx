"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

const ROTATE_MS = 3000;

export function DynamicTitle() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.titles.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-10 overflow-hidden sm:h-12">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -14 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(1.15rem,5.2vw,1.25rem)] font-medium text-accent sm:text-2xl"
        >
          {profile.titles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
