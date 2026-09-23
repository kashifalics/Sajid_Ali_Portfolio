"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

// Small blurred blobs positioned along the pill's base, each flickering its
// own scale/opacity/y on a slightly different rhythm — the same trick used
// to fake a flame's flicker, just rendered in the site's own blue/cyan
// accent pair instead of literal fire colors, so the hero's primary badge
// stays on the one-accent-color system the rest of the site follows.
//
// Driven by explicit hover state (onHoverStart/onHoverEnd) rather than
// framer-motion variant propagation through the intervening plain <span> —
// propagation through a non-motion wrapper turned out not to reach these
// children reliably, so each blob's `animate` is computed directly here
// instead of trusting inherited variant context. onHoverStart/onHoverEnd
// never fire for touch pointers (framer-motion suppresses them there on
// purpose, to avoid hover getting "stuck" after a tap), so onTapStart/
// onTap/onTapCancel drive the same state for touch devices.
const flames = [
  { left: "14%", size: 16, delay: 0 },
  { left: "32%", size: 22, delay: 0.15 },
  { left: "52%", size: 14, delay: 0.3 },
  { left: "68%", size: 20, delay: 0.08 },
  { left: "86%", size: 15, delay: 0.22 },
];

export function HeroEyebrow({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useSafeReducedMotion();
  const [hovered, setHovered] = useState(false);
  const active = hovered && !shouldReduceMotion;

  return (
    <motion.span
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onTapStart={() => setHovered(true)}
      onTap={() => setHovered(false)}
      onTapCancel={() => setHovered(false)}
      className="section-label relative isolate cursor-default overflow-visible"
    >
      {!shouldReduceMotion ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10"
        >
          {flames.map((f, i) => (
            <motion.span
              key={i}
              className="absolute bottom-0 rounded-full blur-[3px]"
              style={{
                left: f.left,
                width: f.size,
                height: f.size,
                translateX: "-50%",
                background:
                  "radial-gradient(circle, var(--accent-2) 0%, var(--accent) 45%, transparent 72%)",
              }}
              animate={
                active
                  ? {
                      opacity: [0, 0.9, 0.5, 0.85, 0],
                      scaleY: [0.5, 1.2, 0.8, 1.15, 0.5],
                      y: [2, -9, -5, -13, -1],
                    }
                  : { opacity: 0, scaleY: 0.4, y: 2 }
              }
              transition={
                active
                  ? {
                      duration: 0.85 + (i % 2) * 0.15,
                      repeat: Infinity,
                      delay: f.delay,
                      ease: "easeInOut",
                    }
                  : { duration: 0.3 }
              }
            />
          ))}
        </span>
      ) : null}

      <motion.span
        animate={{
          textShadow: active ? "0 0 10px var(--accent-2)" : "0 0 0px transparent",
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
