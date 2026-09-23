"use client";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

type Node = {
  id: string;
  x: number;
  y: number;
  breathe?: boolean;
  label?: string;
  labelAnchor?: "start" | "end";
};
type Edge = { from: string; to: string; delay: number };

// A loose, sparse architecture sketch spanning the hero's background — kept
// deliberately low-opacity so it reads as ambient texture (like the grid
// already does) rather than a foreground diagram competing with the
// headline, portrait or CTAs. Biased toward the right/portrait side and
// the far margins, away from the dense paragraph text on the left. Four
// nodes carry a system label (CLOUD / API / MICROSERVICES / DATA) so the
// portrait reads as sitting inside a real architecture, not just floating
// near decorative dots. "core" sits behind the portrait itself — every
// edge radiates outward from it, and each gets its own traveling pulse, so
// the portrait reads as the source the system's energy radiates from.
const nodes: Node[] = [
  { id: "a", x: 60, y: 120 },
  { id: "core", x: 1010, y: 330, breathe: true },
  { id: "cloud", x: 700, y: 190, breathe: true, label: "CLOUD", labelAnchor: "end" },
  { id: "microservices", x: 1180, y: 150, label: "MICROSERVICES" },
  { id: "api", x: 1320, y: 250, label: "API" },
  { id: "data", x: 1300, y: 480, breathe: true, label: "DATA" },
  { id: "g", x: 40, y: 560 },
];

const edges: Edge[] = [
  { from: "core", to: "cloud", delay: 0.05 },
  { from: "core", to: "microservices", delay: 0.16 },
  { from: "core", to: "api", delay: 0.27 },
  { from: "core", to: "data", delay: 0.38 },
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

      {nodes
        .filter((n) => n.label)
        .map((node, i) => {
          const anchor = node.labelAnchor ?? "start";
          const dx = anchor === "end" ? -9 : 9;
          return (
            <motion.text
              key={`${node.id}-label`}
              x={node.x + dx}
              y={node.y}
              textAnchor={anchor}
              dominantBaseline="middle"
              fill="var(--fg-faint)"
              style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em" }}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : 1.4 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {node.label}
            </motion.text>
          );
        })}

      {/* one traveling pulse per radiating edge — the system "alive", not
          decorative sparkle: each only ever moves along its own
          already-drawn connection, staggered so energy is continuously
          leaving the core rather than one signal touring the whole map. */}
      {!shouldReduceMotion
        ? edges.map((edge, i) => {
            const a = byId[edge.from];
            const b = byId[edge.to];
            return (
              <motion.circle
                key={`pulse-${edge.from}-${edge.to}`}
                r={2}
                fill="var(--accent-2)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [a.x, b.x],
                  cy: [a.y, b.y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  delay: 2.4 + i * 0.9,
                  repeat: Infinity,
                  repeatDelay: 3.2 + i * 0.4,
                  ease: "easeInOut",
                }}
              />
            );
          })
        : null}
    </svg>
  );
}
