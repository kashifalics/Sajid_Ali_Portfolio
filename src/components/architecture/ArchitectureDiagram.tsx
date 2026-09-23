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
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Architecture"
          title="Architecture at a Glance"
          description="A simplified view of how enterprise systems are typically structured — from the business layer down to data, with cloud, identity, integration and operational concerns running alongside."
        />

        <Reveal
          delay={0.1}
          className="mt-12 overflow-hidden rounded-3xl bg-[#0b1220] px-6 py-10 shadow-[0_24px_60px_-30px_rgba(11,18,32,0.5)] sm:px-10 sm:py-12 md:py-14"
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
                className="absolute top-4 bottom-4 left-1/2 w-px -translate-x-1/2 bg-[#33415c]"
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
                  className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#0ea5e9] shadow-[0_0_8px_1px_rgba(14,165,233,0.6)]"
                />
              ) : null}

              {layers.map((layer, i) => (
                <StaggerItem key={layer.label}>
                  <div className="relative z-10 flex items-center gap-3 rounded-lg border border-white/10 bg-[#121b2e] px-5 py-3.5">
                    <layer.icon
                      size={17}
                      className="shrink-0 text-[#0ea5e9]"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-white/90">
                      {layer.label}
                    </span>
                  </div>
                  {i < layers.length - 1 ? (
                    <div className="relative z-10 flex justify-center py-2.5">
                      <span className="h-2 w-2 rounded-full border border-[#2563eb]/60 bg-[#0b1220]" />
                    </div>
                  ) : null}
                </StaggerItem>
              ))}
            </StaggerGroup>

            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-white/45 uppercase">
                Secondary Systems
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {surroundingConcepts.map((concept) => (
                  <li
                    key={concept.label}
                    className="flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-sm text-white/70"
                  >
                    <concept.icon
                      size={14}
                      className="shrink-0 text-[#0ea5e9]"
                      aria-hidden="true"
                    />
                    {concept.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
