"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

const TYPE_MS = 45;
const DELETE_MS = 25;
const PAUSE_MS = 1600;
const SWAP_MS = 3000;

export function DynamicTitle() {
  const shouldReduceMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState<string>("");

  useEffect(() => {
    if (shouldReduceMotion) {
      let i = 0;
      const showCurrent = () => setDisplayed(profile.titles[i]);
      const startId = setTimeout(showCurrent, 0);
      const intervalId = setInterval(() => {
        i = (i + 1) % profile.titles.length;
        showCurrent();
      }, SWAP_MS);
      return () => {
        clearTimeout(startId);
        clearInterval(intervalId);
      };
    }

    let titleIndex = 0;
    let charCount = 0;
    let phase: "typing" | "deleting" = "typing";
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const fullText = profile.titles[titleIndex];

      if (phase === "typing") {
        charCount++;
        setDisplayed(fullText.slice(0, charCount));
        const done = charCount >= fullText.length;
        if (done) phase = "deleting";
        timeoutId = setTimeout(tick, done ? PAUSE_MS : TYPE_MS);
        return;
      }

      charCount--;
      setDisplayed(fullText.slice(0, charCount));
      if (charCount <= 0) {
        titleIndex = (titleIndex + 1) % profile.titles.length;
        phase = "typing";
      }
      timeoutId = setTimeout(tick, DELETE_MS);
    }

    timeoutId = setTimeout(tick, TYPE_MS);
    return () => clearTimeout(timeoutId);
  }, [shouldReduceMotion]);

  return (
    <div className="relative flex h-10 items-center gap-1 sm:h-12">
      <p
        aria-hidden="true"
        className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(1.15rem,5.2vw,1.25rem)] font-medium text-accent sm:text-2xl"
      >
        {displayed}
      </p>
      <span
        aria-hidden="true"
        className="h-[0.85em] w-0.5 shrink-0 translate-y-[0.05em] animate-pulse-soft bg-accent"
      />
      <span className="sr-only">{profile.titles.join(" · ")}</span>
    </div>
  );
}
