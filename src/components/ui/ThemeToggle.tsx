"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { applyTheme, getStoredTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type State = { mounted: boolean; theme: Theme };

export function ThemeToggle({ className }: { className?: string }) {
  // Same hydration-safe shape as useSafeReducedMotion: the server can't
  // know the stored preference, so render the default ("dark") on first
  // paint and correct after mount — a normal client re-render, not a
  // hydration diff.
  const [state, setState] = useState<State>({ mounted: false, theme: "dark" });

  useEffect(() => {
    // "Have we mounted, and what's the real stored theme" cannot be
    // computed during render — that's the whole point of the check — so
    // this is one of the sanctioned exceptions to the set-state-in-effect
    // rule: there is no render-time equivalent.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ mounted: true, theme: getStoredTheme() });
  }, []);

  function toggle() {
    const next: Theme = state.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setState({ mounted: true, theme: next });
  }

  const isLight = state.mounted && state.theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-fg-muted transition-colors hover:border-accent/60 hover:text-accent",
        className
      )}
    >
      {isLight ? (
        <Moon size={15} aria-hidden="true" />
      ) : (
        <Sun size={15} aria-hidden="true" />
      )}
    </button>
  );
}
