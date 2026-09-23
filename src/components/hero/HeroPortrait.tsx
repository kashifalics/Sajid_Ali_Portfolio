"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { orbitExpertise } from "@/data/expertise";
import { profile } from "@/data/profile";
import { HeroArchitecture } from "@/components/hero/HeroArchitecture";

function CornerBracket({ className }: { className: string }) {
  return <span aria-hidden="true" className={className} />;
}

export function HeroPortrait() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]"
    >
      {/* top technical caption row — small annotations "around" the frame,
          not badges: plain uppercase micro-type reading like a drawing label. */}
      <div className="mb-3 flex items-baseline justify-between gap-3 text-[10.5px] font-medium tracking-wide text-fg-faint uppercase">
        <span>{profile.yearsExperience} Years · Enterprise Delivery</span>
        <span className="shrink-0">{profile.location}</span>
      </div>

      <div className="relative">
        {/* ambient system network — reaches into the open margin above and
            right of the frame, but stops flush at the bottom edge so it
            never drifts into the annotation baseline below. */}
        <div className="pointer-events-none absolute -top-16 -right-16 bottom-0 -left-4 lg:-top-24 lg:-right-24 lg:-left-6">
          <HeroArchitecture />
        </div>

        {/* offset architectural frame — drawn in behind the photo, shifted
            down-right so its outline peeks past the photo's own edges. */}
        <motion.div
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, x: 12, y: 12 }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 border border-accent/30"
        />

        {/* Rectangular editorial frame — deliberately not a circular avatar. */}
        <div className="group relative aspect-[4/5] w-full overflow-hidden border border-hairline-strong bg-surface-2">
          <motion.div
            initial={shouldReduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.75, delay: shouldReduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/images/sajid-ali-portrait.jpg"
              alt={`${profile.name}, ${profile.role}`}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 300px"
              style={{ objectPosition: "46% 38%" }}
              className="scale-[1.85] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.9]"
              priority
            />
          </motion.div>

          {/* corner brackets — technical/architectural framing, not decoration */}
          <CornerBracket className="pointer-events-none absolute top-2.5 left-2.5 h-4 w-4 border-t-2 border-l-2 border-white/70" />
          <CornerBracket className="pointer-events-none absolute top-2.5 right-2.5 h-4 w-4 border-t-2 border-r-2 border-white/70" />
          <CornerBracket className="pointer-events-none absolute bottom-2.5 left-2.5 h-4 w-4 border-b-2 border-l-2 border-white/70" />
          <CornerBracket className="pointer-events-none absolute right-2.5 bottom-2.5 h-4 w-4 border-r-2 border-b-2 border-white/70" />
        </div>
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
    </motion.div>
  );
}
