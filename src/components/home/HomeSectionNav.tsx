"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "contact", label: "Contact" },
];

export function HomeSectionNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section progress"
      className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-3.5 lg:flex"
    >
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-2.5"
          >
            <span
              className={cn(
                "pointer-events-none text-[10px] font-medium tracking-wide uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                isActive ? "text-accent" : "text-fg-faint"
              )}
            >
              {section.label}
            </span>
            <span
              className={cn(
                "block h-1.5 w-1.5 rounded-full border transition-all duration-300",
                isActive
                  ? "scale-125 border-accent bg-accent"
                  : "border-hairline-strong bg-transparent group-hover:border-accent/60"
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
