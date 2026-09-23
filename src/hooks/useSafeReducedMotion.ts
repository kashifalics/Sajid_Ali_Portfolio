"use client";

import { useEffect, useState } from "react";
import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Hydration-safe wrapper around framer-motion's useReducedMotion().
 *
 * framer-motion resolves the real OS/browser preference synchronously on
 * the client's very first render (it has `window` to check), but SSR has
 * no `window` and always renders assuming motion is on. Any component that
 * branches its `initial`/`animate` props on the raw hook's value can
 * therefore mismatch during hydration for visitors who actually have
 * reduced motion enabled — React discards and re-renders that subtree,
 * logging a hydration-mismatch warning.
 *
 * This wrapper forces `false` (motion on, matching what SSR assumed) until
 * after the component has mounted, then corrects to the real preference on
 * the next render — a normal client-side update, not a hydration diff, so
 * it never mismatches. The trade-off: an above-the-fold, animate-on-mount
 * element may play one brief entrance transition before the correction
 * lands, rather than being suppressed from the very first paint.
 */
export function useSafeReducedMotion(): boolean {
  const actual = useFramerReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // "Have we mounted on the client yet" cannot be computed during render
    // — that's the whole point of the check — so this is one of the
    // sanctioned exceptions to the set-state-in-effect rule: there is no
    // render-time equivalent for "are we past the first client commit".
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return mounted ? Boolean(actual) : false;
}
