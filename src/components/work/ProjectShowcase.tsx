"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { systems, type SystemProject } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectDiagram } from "@/components/work/ProjectDiagram";
import { Work } from "@/components/work/Work";
import { cn } from "@/lib/utils";

const PANEL_VW = 78;
const GAP_VW = 4;

function ProjectPanel({
  project,
  reversed,
  active,
}: {
  project: SystemProject;
  reversed: boolean;
  active: boolean;
}) {
  return (
    <article
      style={{ width: `${PANEL_VW}vw` }}
      className={cn(
        "relative flex h-[72vh] shrink-0 flex-col gap-8 overflow-hidden rounded-2xl border bg-surface/70 p-8 backdrop-blur-sm transition-colors duration-500 lg:flex-row lg:items-center lg:gap-12 lg:p-12",
        active ? "border-accent/30" : "border-hairline"
      )}
    >
      <div
        className={cn(
          "relative flex min-w-0 flex-1 flex-col justify-center transition-opacity duration-500",
          reversed && "lg:order-2",
          active ? "opacity-100" : "opacity-50"
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-4 left-0 select-none font-mono text-[clamp(3.5rem,7vw,6rem)] leading-none font-bold text-accent/10"
        >
          {project.index}
        </span>

        <div className="relative">
          <p className="text-xs font-semibold tracking-[0.14em] text-fg-faint uppercase">
            {project.category}
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-fg sm:text-4xl">
            {project.title}
          </h3>
          <p className="text-body mt-5 max-w-md">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-hairline px-2.5 py-1 text-xs text-fg-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-fg"
          >
            View System
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "flex min-w-0 flex-1 items-center transition-opacity duration-500",
          reversed && "lg:order-1",
          active ? "opacity-100" : "opacity-50"
        )}
      >
        <ProjectDiagram steps={project.flow} shape={project.flowShape} />
      </div>
    </article>
  );
}

function HorizontalShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      systems.length - 1,
      Math.max(0, Math.round(v * (systems.length - 1)))
    );
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.4,
  });

  const travel = (systems.length - 1) * (PANEL_VW + GAP_VW);
  const xVw = useTransform(smoothProgress, [0, 1], [0, -travel]);
  const x = useTransform(xVw, (v) => `${v}vw`);

  return (
    <div
      ref={sectionRef}
      className="hidden lg:motion-safe:block"
      style={{ height: `${systems.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute top-24 right-6 z-10 flex items-center gap-1.5 font-mono text-xs text-fg-faint md:right-10">
          <span className="text-accent">{String(active + 1).padStart(2, "0")}</span>
          <span>/ {String(systems.length).padStart(2, "0")}</span>
        </div>

        <motion.div style={{ x }} className="flex items-center" role="list">
          {systems.map((project, i) => (
            <div
              key={project.slug}
              role="listitem"
              className="shrink-0 pl-[10vw]"
              style={{ paddingRight: i === systems.length - 1 ? "10vw" : `${GAP_VW}vw` }}
            >
              <ProjectPanel project={project} reversed={i % 2 === 1} active={i === active} />
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center gap-1.5">
          {systems.map((project, i) => (
            <span
              key={project.slug}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === active ? "w-6 bg-accent" : "w-1.5 bg-hairline-strong"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  return (
    <>
      {/* Desktop, motion allowed: vertical scroll pins the section and
          drives horizontal project movement — an exhibition, not a list. */}
      <HorizontalShowcase />

      {/* Small screens, and desktop with reduced motion requested: the
          same project data as a plain vertical sequence. Pure CSS toggle
          (motion-safe/motion-reduce) rather than a JS check, so there's no
          hydration mismatch and no dependency on scroll-linked JS at all. */}
      <div className="block py-14 md:py-20 lg:motion-safe:hidden">
        <Container>
          <Work />
        </Container>
      </div>
    </>
  );
}
