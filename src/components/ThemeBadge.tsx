import { useState, useEffect } from "react";

const themeNames: Record<string, string> = {
  megaman: "MEGA MAN",
  protoman: "PROTO MAN",
  bass: "BASS",
  zero: "ZERO",
  roll: "ROLL",
};

/**
 * Small badge showing which random theme is active.
 * Lets the user know the color scheme changes on refresh.
 */
export default function ThemeBadge() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme") || "megaman";
    setTheme(t);
  }, []);

  if (!theme) return null;

  return (
    <div
      className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border"
      style={{
        borderColor: "color-mix(in srgb, var(--t-primary) 30%, transparent)",
        backgroundColor: "color-mix(in srgb, var(--t-primary) 5%, transparent)",
      }}
    >
      <div
        className="w-2 h-2 rounded-full animate-glow-pulse"
        style={{ backgroundColor: "var(--t-primary)" }}
        aria-hidden="true"
      />
      <span
        className="pixel-text text-[7px] tracking-wider"
        style={{ color: "var(--t-primary)" }}
      >
        {themeNames[theme] || theme.toUpperCase()} THEME
      </span>
      <span
        className="text-[10px] font-mono"
        style={{ color: "var(--t-text-muted)" }}
      >
        refresh for another
      </span>
    </div>
  );
}
