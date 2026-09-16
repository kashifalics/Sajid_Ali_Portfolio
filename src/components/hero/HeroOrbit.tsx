"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { orbitExpertise } from "@/data/expertise";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

function MobileLabel({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-hairline bg-surface/90 px-3 py-1.5 text-xs font-medium text-fg-muted shadow-sm">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
      {text}
    </span>
  );
}

export function HeroOrbit() {
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/*
        Mobile (<640px): the desktop's continuously-rotating orbit cannot fit
        wide label pills without either overlapping the portrait or spilling
        past the viewport edge at this radius — swapped for a static
        above/below arrangement instead of forcing the desktop composition.
      */}
      <div className="flex flex-col items-center gap-5 sm:hidden">
        <div className="flex flex-wrap items-center justify-center gap-2 px-2">
          <MobileLabel text="Solutions Architecture" />
          <MobileLabel text="Full-Stack Engineering" />
        </div>

        <div className="relative mx-auto aspect-square w-[calc(min(70vw,280px)+24px)]">
          <div className="absolute inset-0 rounded-full border border-dashed border-hairline" />
          <div className="absolute inset-[12px] overflow-hidden rounded-full border border-hairline-strong shadow-[0_8px_40px_-12px_rgba(17,17,17,0.25)]">
            <Image
              src="/images/sajid-ali-portrait.jpg"
              alt={`${profile.name}, ${profile.role}`}
              fill
              // Matches the rendered box exactly: min(70vw, 280px), and 0px
              // once this variant is hidden at the sm breakpoint (>=640px) —
              // audited against actual rendered size to avoid over-fetching.
              sizes="(min-width: 640px) 0px, (min-width: 400px) 280px, 70vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/5" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 px-2">
          <MobileLabel text="Cloud & DevOps" />
          <MobileLabel text="Enterprise Integration" />
        </div>
      </div>

      {/* Tablet / desktop (>=640px): original orbiting composition, unchanged */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative mx-auto hidden aspect-square sm:block sm:w-[340px] md:w-[400px] lg:w-[440px]",
          paused && "orbit-paused"
        )}
      >
        {/* orbit path */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute inset-0 rounded-full border border-dashed border-hairline"
        />

        {/* secondary subtle ring */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="absolute inset-[9%] rounded-full border border-hairline"
        />

        {/* portrait + primary ring */}
        <div className="absolute inset-[19%]">
          <div className="peer absolute inset-0 overflow-hidden rounded-full border border-hairline-strong shadow-[0_8px_40px_-12px_rgba(17,17,17,0.25)]">
            <Image
              src="/images/sajid-ali-portrait.jpg"
              alt={`${profile.name}, ${profile.role}`}
              fill
              // Audited against actual rendered size: the portrait is 62% of
              // the sm/md/lg orbit container (w-[340px]/[400px]/[440px]),
              // i.e. ~211/248/273px — not the container width itself. 0px
              // below sm since this variant is hidden there.
              sizes="(min-width: 1024px) 273px, (min-width: 768px) 248px, (min-width: 640px) 211px, 0px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/5" />
          </div>
          <div className="pointer-events-none absolute -inset-[6%] rounded-full border border-accent/20 transition-all duration-500 peer-hover:border-accent/50 peer-hover:shadow-[0_0_40px_-8px_rgba(62,107,156,0.4)]" />
        </div>

        {/* orbit track */}
        <div
          className="orbit-track absolute inset-0 sm:[--radius:150px] md:[--radius:175px] lg:[--radius:190px]"
          style={
            shouldReduceMotion
              ? undefined
              : ({ "--orbit-duration": "32s" } as React.CSSProperties)
          }
        >
          {orbitExpertise.map((label, i) => {
            const angle = i * 90 - 90;
            return (
              <div
                key={label}
                className="orbit-item"
                style={{ "--angle": `${angle}deg` } as React.CSSProperties}
              >
                <div className="orbit-item-content">
                  <motion.button
                    type="button"
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: shouldReduceMotion ? 0 : 1.1 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onFocus={() => setPaused(true)}
                    onBlur={() => setPaused(false)}
                    className="group flex items-center gap-1.5 whitespace-nowrap rounded-full border border-hairline bg-surface/90 px-2.5 py-1.5 text-[10px] font-medium text-fg-muted shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent/60 hover:text-accent focus-visible:scale-105 focus-visible:border-accent/60 focus-visible:text-accent focus-visible:outline-none sm:px-3 sm:text-xs"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50 transition-colors group-hover:bg-accent" />
                    {label}
                  </motion.button>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
