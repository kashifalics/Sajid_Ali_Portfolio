"use client";

import {
  Users,
  AppWindow,
  Boxes,
  Network,
  Database,
  Fingerprint,
  Shield,
  Cloud,
  GitBranch,
  Activity,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

const layers: { label: string; icon: LucideIcon }[] = [
  { label: "User / Business", icon: Users },
  { label: "Application", icon: AppWindow },
  { label: "Services / Microservices", icon: Boxes },
  { label: "API / Integration", icon: Network },
  { label: "Data", icon: Database },
];

const surroundingConcepts: { label: string; icon: LucideIcon }[] = [
  { label: "Identity", icon: Fingerprint },
  { label: "Security", icon: Shield },
  { label: "Cloud", icon: Cloud },
  { label: "DevOps", icon: GitBranch },
  { label: "Monitoring", icon: Activity },
  { label: "External Systems", icon: Landmark },
];

export function ArchitectureDiagram() {
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <section className="relative z-10 py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Architecture"
          title="Architecture at a Glance"
          description="A simplified view of how enterprise systems are typically structured — from the business layer down to data, with cloud, identity, integration and operational concerns running alongside."
        />

        <Reveal
          delay={0.1}
          className="mt-12 overflow-hidden rounded-3xl border border-hairline bg-raised px-6 py-10 sm:px-10 sm:py-12 md:py-14"
        >
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <StaggerGroup className="relative mx-auto flex w-full max-w-sm flex-col items-stretch">
              {/* connecting spine — draws in on scroll */}
              <motion.span
                aria-hidden="true"
                initial={shouldReduceMotion ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "top" }}
                className="absolute top-4 bottom-4 left-1/2 w-px -translate-x-1/2 bg-hairline-strong"
              />
              {/* traveling signal — the system "alive" */}
              {!shouldReduceMotion ? (
                <motion.span
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    top: ["4%", "96%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{
                    duration: 2.8,
                    delay: 1.4,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-2 shadow-[0_0_8px_1px_rgba(56,189,248,0.55)]"
                />
              ) : null}

              {layers.map((layer, i) => (
                <StaggerItem key={layer.label}>
                  <motion.div
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    className="group relative z-10 flex items-center gap-3 overflow-hidden rounded-lg border border-hairline-strong bg-surface px-5 py-3.5 transition-colors duration-300 hover:border-accent/50"
                  >
                    <motion.div
                      aria-hidden="true"
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                      className="pointer-events-none absolute inset-0 bg-accent-3"
                    />
                    <motion.span
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.12 } }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="relative shrink-0 text-accent-2 transition-colors duration-300 group-hover:text-accent"
                    >
                      <layer.icon size={17} aria-hidden="true" />
                    </motion.span>
                    <span className="relative text-base font-semibold text-fg">
                      {layer.label}
                    </span>
                  </motion.div>
                  {i < layers.length - 1 ? (
                    <div className="relative z-10 flex justify-center py-2.5">
                      <span className="h-2 w-2 rounded-full border border-accent/60 bg-raised" />
                    </div>
                  ) : null}
                </StaggerItem>
              ))}
            </StaggerGroup>

            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
                Secondary Systems
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {surroundingConcepts.map((concept) => (
                  <motion.li
                    key={concept.label}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-hairline-strong bg-surface px-3.5 py-2 text-sm font-medium text-fg-body transition-colors duration-300 hover:border-accent/50 hover:text-fg"
                  >
                    <motion.div
                      aria-hidden="true"
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                      className="pointer-events-none absolute inset-0 bg-accent-3"
                    />
                    <motion.span
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.15 } }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="relative shrink-0 text-accent-2 transition-colors duration-300 group-hover:text-accent"
                    >
                      <concept.icon size={14} aria-hidden="true" />
                    </motion.span>
                    <span className="relative">{concept.label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
