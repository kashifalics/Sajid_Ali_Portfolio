"use client";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

type Node = { id: string; x: number; y: number; breathe?: boolean };
type Edge = { from: string; to: string; delay: number };

// A loose, sparse architecture sketch spanning the hero's background — kept
// deliberately low-opacity so it reads as ambient texture (like the grid
// already does) rather than a foreground diagram competing with the
// headline, portrait or CTAs. Biased toward the right/portrait side and
// the far margins, away from the dense paragraph text on the left.
const nodes: Node[] = [
  { id: "a", x: 60, y: 120 },
  { id: "b", x: 760, y: 90, breathe: true },
  { id: "c", x: 980, y: 200 },
  { id: "d", x: 1180, y: 140 },
  { id: "e", x: 1300, y: 340, breathe: true },
  { id: "f", x: 1080, y: 480 },
  { id: "g", x: 40, y: 560 },
];

const edges: Edge[] = [
  { from: "b", to: "c", delay: 0.1 },
  { from: "c", to: "d", delay: 0.24 },
  { from: "d", to: "e", delay: 0.36 },
  { from: "c", to: "f", delay: 0.48 },
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function HeroNetwork() {
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-70 lg:block"
    >
      {edges.map((edge) => {
        const a = byId[edge.from];
        const b = byId[edge.to];
        return (
          <motion.line
            key={`${edge.from}-${edge.to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--hairline-strong)"
            strokeWidth={1}
            initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: shouldReduceMotion ? 0 : 0.6 + edge.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        );
      })}

      {nodes.map((node, i) => {
        const breathing = node.breathe && !shouldReduceMotion;
        return (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={2.5}
            fill="var(--accent-2)"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.5 }}
            animate={
              breathing
                ? { opacity: [0.35, 0.85, 0.35], scale: 1 }
                : { opacity: 0.55, scale: 1 }
            }
            transition={
              breathing
                ? {
                    opacity: {
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1 + i * 0.1,
                    },
                    scale: {
                      duration: 0.6,
                      delay: 0.5 + i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }
                : {
                    duration: 0.6,
                    delay: shouldReduceMotion ? 0 : 0.5 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
          />
        );
      })}

      {/* one slow traveling signal — the system "alive", not decorative
          sparkle: it only ever moves along an already-drawn connection. */}
      {!shouldReduceMotion ? (
        <motion.circle
          r={2}
          fill="var(--accent-2)"
          initial={{ opacity: 0 }}
          animate={{
            cx: [byId.c.x, byId.d.x, byId.e.x],
            cy: [byId.c.y, byId.d.y, byId.e.y],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: 5,
            delay: 2.2,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        />
      ) : null}
    </svg>
  );
}
