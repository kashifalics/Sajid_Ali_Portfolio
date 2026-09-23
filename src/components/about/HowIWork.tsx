"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Compass, Hammer, PackageCheck, type LucideIcon } from "lucide-react";
import { howIWork } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const STAGE_ICONS: Record<string, LucideIcon> = {
  Understand: Search,
  Architect: Compass,
  Build: Hammer,
  Deliver: PackageCheck,
};

export function HowIWork() {
  return (
    <section id="how-i-work" className="relative z-10 scroll-mt-28 py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="How I Approach Systems"
          title="From requirements to production"
        />

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howIWork.map((stage, i) => {
            const Icon = STAGE_ICONS[stage.title] ?? Search;
            return (
              <StaggerItem key={stage.index} className="relative h-full">
                <motion.div
                  whileHover="hover"
                  whileTap="hover"
                  initial="rest"
                  animate="rest"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface p-6 transition-colors duration-300 hover:border-accent/30 active:border-accent/30"
                >
                  <motion.div
                    aria-hidden="true"
                    variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute inset-0 bg-accent-3"
                  />

                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-xs text-fg-faint">{stage.index}</span>
                    <motion.span
                      variants={{
                        rest: { scale: 1, rotate: 0 },
                        hover: { scale: 1.1, rotate: -6 },
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-fg-faint transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent group-active:border-accent/40 group-active:text-accent"
                    >
                      <Icon size={16} aria-hidden="true" />
                    </motion.span>
                  </div>

                  <h3 className="relative mt-4 text-base font-semibold text-fg">
                    {stage.title}
                  </h3>
                  <p className="text-body-sm relative mt-1.5">{stage.description}</p>
                </motion.div>

                {i < howIWork.length - 1 ? (
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 text-fg-faint lg:block"
                  />
                ) : null}
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
