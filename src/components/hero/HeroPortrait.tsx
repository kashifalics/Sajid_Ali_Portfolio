"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { orbitExpertise } from "@/data/expertise";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

export function HeroPortrait() {
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <div className="mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[420px]">
      {/* The portrait is already a complete, self-contained circular
          composition (its own background + ring) — shown whole via
          object-contain, no crop into the portrait itself. Note: the
          source file has no alpha channel (flat opaque square behind the
          ring), invisible against the dark theme's canvas but visible as
          a hard rectangle in light mode — clipped to a circle so only the
          flat, content-free corners are removed; face/ring/shoulders are
          never touched. */}
      <div className="relative mx-auto aspect-square w-[clamp(220px,34vw,420px)]">
        <div
          aria-hidden="true"
          className="absolute inset-[-8%] rounded-full bg-accent/15 blur-3xl"
        />
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full [clip-path:circle(50%)]"
        >
          <Image
            src="/images/sajid-ali-portrait-ring.png"
            alt="Sajid Ali — Enterprise Technology Leader"
            fill
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 340px, 300px"
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* annotation baseline — drawn in, then four capability tags read off it
          like dimension callouts on a technical drawing. */}
      <motion.div
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 1.05, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
        className="mt-8 h-px w-full bg-hairline-strong"
      />

      <div className="mt-0 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4">
        {orbitExpertise.map((label, i) => (
          <motion.div
            key={label}
            initial={shouldReduceMotion ? false : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: shouldReduceMotion ? 0 : 1.2 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span aria-hidden="true" className="h-2.5 w-px bg-hairline-strong" />
            <span className="text-[10.5px] font-medium tracking-wide text-fg-faint uppercase">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
