"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { orbitExpertise } from "@/data/expertise";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function HeroOrbit() {
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative mx-auto aspect-square w-[220px] sm:w-[340px] md:w-[400px] lg:w-[440px]",
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
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 200px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/5" />
        </div>
        <div className="pointer-events-none absolute -inset-[6%] rounded-full border border-accent/20 transition-all duration-500 peer-hover:border-accent/50 peer-hover:shadow-[0_0_40px_-8px_rgba(37,99,235,0.35)]" />
      </div>

      {/* orbit track */}
      <div
        className="orbit-track absolute inset-0 [--radius:70px] sm:[--radius:150px] md:[--radius:175px] lg:[--radius:190px]"
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
  );
}
