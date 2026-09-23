"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Code2,
  MonitorSmartphone,
  Boxes,
  Cloud,
  Database,
  Share2,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import type { CapabilityGroup } from "@/data/capabilities";
import { EditorialNumber } from "@/components/ui/EditorialNumber";

const GROUP_ICONS: Record<string, LucideIcon> = {
  "Solutions Architecture": Layers,
  "Enterprise Engineering": Code2,
  "Full-Stack Development": MonitorSmartphone,
  "Microservices & APIs": Boxes,
  "Cloud & DevOps": Cloud,
  "Database & Data Systems": Database,
  "Enterprise Integration": Share2,
  "Agile / Delivery": Rocket,
};

export function CapabilityCard({
  group,
  items,
}: {
  group: CapabilityGroup;
  items?: string[];
}) {
  const Icon = GROUP_ICONS[group.label] ?? Layers;

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface p-5 transition-colors duration-300 hover:border-accent/30"
    >
      <motion.div
        aria-hidden="true"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 bg-accent-3"
      />

      <div className="relative flex items-center justify-between">
        <EditorialNumber value={group.index} className="text-xs" />
        <motion.span
          variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.1, rotate: -6 } }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-fg-faint transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent"
        >
          <Icon size={15} aria-hidden="true" />
        </motion.span>
      </div>

      <p className="relative mt-4 text-sm font-semibold text-fg">{group.label}</p>

      {items ? (
        <ul className="relative mt-4 flex flex-col gap-1.5">
          {items.map((item) => (
            <li key={item} className="text-sm text-fg-muted">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </motion.div>
  );
}
