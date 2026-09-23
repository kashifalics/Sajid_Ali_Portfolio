"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Link2,
  RefreshCw,
  Lock,
  Target,
  type LucideIcon,
} from "lucide-react";
import { architecturePrinciples } from "@/data/principles";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { EditorialNumber } from "@/components/ui/EditorialNumber";

const PRINCIPLE_ICONS: Record<string, LucideIcon> = {
  "Design for Scale": TrendingUp,
  "Build for Resilience": ShieldCheck,
  "Integrate with Intent": Link2,
  "Modernize Without Disruption": RefreshCw,
  "Security by Design": Lock,
  "Align Systems with Business": Target,
};

export function ArchitecturePrinciples() {
  return (
    <section className="relative z-10 py-14 md:py-20">
      <Container>
        <SectionHeading eyebrow="Principles" title="Architecture Principles" />

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {architecturePrinciples.map((principle) => {
            const Icon = PRINCIPLE_ICONS[principle.title] ?? Target;
            return (
              <StaggerItem key={principle.index} className="h-full">
                <motion.div
                  whileHover="hover"
                  whileTap="hover"
                  initial="rest"
                  animate="rest"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface p-6 transition-colors duration-300 hover:border-accent/30 active:border-accent/30"
                >
                  <motion.div
                    aria-hidden="true"
                    variants={{ rest: { opacity: 0, y: 8 }, hover: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.4 }}
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(ellipse_at_bottom,_var(--accent-3)_0%,_transparent_70%)]"
                  />

                  <div className="relative flex items-center justify-between">
                    <motion.span
                      variants={{
                        rest: { scale: 1, rotate: 0 },
                        hover: { scale: 1.08, rotate: -6 },
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline text-fg-faint transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent group-active:border-accent/40 group-active:text-accent"
                    >
                      <Icon size={19} aria-hidden="true" />
                    </motion.span>
                    <EditorialNumber value={principle.index} className="text-xs" />
                  </div>

                  <h3 className="relative mt-5 text-base font-semibold text-fg">
                    {principle.title}
                  </h3>
                  <p className="text-body-sm relative mt-2 max-w-xs">
                    {principle.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
