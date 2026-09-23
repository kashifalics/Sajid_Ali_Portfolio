"use client";

import { motion, useReducedMotion } from "framer-motion";

type Node = { id: string; x: number; y: number; label?: string };
type Edge = { from: string; to: string; delay: number };

// A loose sketch tracing the top and right margin around the portrait frame
// (see the asymmetric-inset wrapper in HeroPortrait.tsx) — deliberately kept
// out of the frame's own footprint so it reads in the surrounding whitespace
// rather than mostly disappearing behind the opaque photo.
const nodes: Node[] = [
  { id: "business", x: 430, y: 30 },
  { id: "application", x: 200, y: 40 },
  { id: "services", x: 340, y: 60 },
  { id: "api", x: 460, y: 140 },
  { id: "data", x: 470, y: 260 },
  { id: "external", x: 450, y: 380 },
];

const edges: Edge[] = [
  { from: "application", to: "business", delay: 0.15 },
  { from: "application", to: "services", delay: 0.3 },
  { from: "services", to: "api", delay: 0.44 },
  { from: "api", to: "data", delay: 0.58 },
  { from: "data", to: "external", delay: 0.72 },
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function HeroArchitecture() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 500 571"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
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
            stroke="#94a3b8"
            strokeOpacity={0.4}
            strokeWidth={1}
            initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: shouldReduceMotion ? 0 : 0.5 + edge.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        );
      })}

      {nodes.map((node, i) => (
        <motion.g
          key={node.id}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.9 + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
        >
          <circle cx={node.x} cy={node.y} r={4} fill="#2563eb" fillOpacity={0.55} />
          <circle
            cx={node.x}
            cy={node.y}
            r={9}
            fill="none"
            stroke="#2563eb"
            strokeOpacity={0.18}
          />
        </motion.g>
      ))}

      {/* a small signal traveling along one path — the system "alive" */}
      {!shouldReduceMotion ? (
        <motion.circle
          r={2.6}
          fill="#0ea5e9"
          initial={{ opacity: 0 }}
          animate={{
            cx: [byId.application.x, byId.services.x, byId.api.x, byId.data.x, byId.external.x],
            cy: [byId.application.y, byId.services.y, byId.api.y, byId.data.y, byId.external.y],
            opacity: [0, 0.9, 0.9, 0.9, 0],
          }}
          transition={{
            duration: 4.2,
            delay: 2.6,
            repeat: Infinity,
            repeatDelay: 2.4,
            ease: "easeInOut",
          }}
        />
      ) : null}
    </svg>
  );
}
