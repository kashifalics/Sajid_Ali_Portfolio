export const THEME_STORAGE_KEY = "theme";

export type Theme = "dark" | "light";

// Dark is the default/primary experience for this site — unlike a typical
// "respect system preference" setup, we only switch to light when the
// visitor has explicitly chosen it (stored value), not from OS preference.
export function applyTheme(theme: Theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // localStorage unavailable (private mode, etc.) — theme just won't persist.
  }
}

export function getStoredTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

// Inlined verbatim into a blocking <script> at the top of <body> so the
// correct theme is set before first paint — avoids a flash of the wrong
// theme for visitors who previously chose light mode. Kept as a plain
// string (not a function) since it runs outside the React/module graph.
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`;
