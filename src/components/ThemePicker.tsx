import { useState, useEffect, useRef } from "react";
import { Palette, X, Shuffle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getFranchise } from "@/lib/franchise";

interface ThemeDef {
  id: string;
  label: string;
  group: string;
  color: string; // preview swatch color
}

const themes: ThemeDef[] = [
  // Mega Man
  { id: "megaman", label: "Mega Man", group: "MEGA MAN", color: "#00a8e8" },
  { id: "protoman", label: "Proto Man", group: "MEGA MAN", color: "#e84040" },
  { id: "bass", label: "Bass", group: "MEGA MAN", color: "#9b59b6" },
  { id: "zero", label: "Zero", group: "MEGA MAN", color: "#dc3545" },
  { id: "roll", label: "Roll", group: "MEGA MAN", color: "#e6559a" },
  // Pokemon
  { id: "pokemon-red", label: "Red", group: "POKEMON", color: "#e03030" },
  { id: "pokemon-blue", label: "Blue", group: "POKEMON", color: "#3b82f6" },
  { id: "pokemon-gold", label: "Gold", group: "POKEMON", color: "#d4a017" },
  { id: "pokemon-emerald", label: "Emerald", group: "POKEMON", color: "#10b981" },
  // Overwatch
  { id: "overwatch", label: "Overwatch", group: "OVERWATCH", color: "#f99e1a" },
  { id: "dva", label: "D.Va", group: "OVERWATCH", color: "#ed4fac" },
  { id: "genji", label: "Genji", group: "OVERWATCH", color: "#76ee00" },
  { id: "reaper", label: "Reaper", group: "OVERWATCH", color: "#8b0000" },
];

const groups = ["MEGA MAN", "POKEMON", "OVERWATCH"];

function applyTheme(id: string) {
  document.documentElement.setAttribute("data-theme", id);
  document.documentElement.setAttribute("data-franchise", getFranchise(id));
  try { localStorage.setItem("bjtn-theme", id); } catch {}
}

export default function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("megaman");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActive(document.documentElement.getAttribute("data-theme") || "megaman");
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  const selectTheme = (id: string) => {
    applyTheme(id);
    setActive(id);
  };

  const randomize = () => {
    const others = themes.filter((t) => t.id !== active);
    const pick = others[Math.floor(Math.random() * others.length)];
    selectTheme(pick.id);
  };

  const activeTheme = themes.find((t) => t.id === active);

  return (
    <div className="relative" ref={panelRef}>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border transition-all"
        style={{
          borderColor: "color-mix(in srgb, var(--t-primary) 30%, transparent)",
          backgroundColor: "color-mix(in srgb, var(--t-primary) 5%, transparent)",
        }}
        aria-label={`Theme picker. Current theme: ${activeTheme?.label || active}. Click to change.`}
        aria-expanded={isOpen}
        aria-controls="theme-panel"
      >
        <div
          className="w-3 h-3 rounded-full ring-1"
          style={{
            backgroundColor: activeTheme?.color || "var(--t-primary)",
            ringColor: "color-mix(in srgb, var(--t-primary) 50%, transparent)",
          }}
          aria-hidden="true"
        />
        <span className="pixel-text text-[6px] sm:text-[7px] hidden sm:inline" style={{ color: "var(--t-primary)" }}>
          {activeTheme?.label.toUpperCase() || active.toUpperCase()}
        </span>
        <Palette size={14} style={{ color: "var(--t-text-muted)" }} aria-hidden="true" />
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="theme-panel"
            className="absolute right-0 top-full mt-2 w-[260px] sm:w-[300px] rounded-lg border-2 backdrop-blur-md z-[60] overflow-hidden"
            style={{
              borderColor: "color-mix(in srgb, var(--t-primary) 30%, transparent)",
              backgroundColor: "color-mix(in srgb, var(--t-bg-deep) 96%, transparent)",
            }}
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            role="dialog"
            aria-label="Choose a theme"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-2.5"
              style={{ borderBottom: "1px solid color-mix(in srgb, var(--t-primary) 15%, transparent)" }}
            >
              <span className="pixel-text text-[7px]" style={{ color: "var(--t-primary)" }}>
                SELECT THEME
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={randomize}
                  className="p-1 rounded transition-opacity hover:opacity-80"
                  aria-label="Random theme"
                  title="Random theme"
                >
                  <Shuffle size={14} style={{ color: "var(--t-accent2)" }} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded transition-opacity hover:opacity-80"
                  aria-label="Close theme picker"
                >
                  <X size={14} style={{ color: "var(--t-text-muted)" }} />
                </button>
              </div>
            </div>

            {/* Theme groups */}
            <div className="p-3 max-h-[60vh] overflow-y-auto space-y-3">
              {groups.map((group) => (
                <div key={group}>
                  <div className="pixel-text text-[6px] mb-2 px-1" style={{ color: "var(--t-text-muted)" }}>
                    {group}
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {themes
                      .filter((t) => t.group === group)
                      .map((t) => {
                        const isActive = t.id === active;
                        return (
                          <button
                            key={t.id}
                            onClick={() => selectTheme(t.id)}
                            className="flex flex-col items-center gap-1.5 py-2 px-1 rounded-md border transition-all"
                            style={{
                              borderColor: isActive
                                ? t.color
                                : "color-mix(in srgb, var(--t-primary) 10%, transparent)",
                              backgroundColor: isActive
                                ? `color-mix(in srgb, ${t.color} 15%, transparent)`
                                : "transparent",
                              boxShadow: isActive ? `0 0 8px color-mix(in srgb, ${t.color} 30%, transparent)` : "none",
                            }}
                            aria-label={`${t.label} theme`}
                            aria-pressed={isActive}
                          >
                            <div
                              className="w-5 h-5 rounded-full ring-1"
                              style={{
                                backgroundColor: t.color,
                                ringColor: isActive ? t.color : "transparent",
                                boxShadow: isActive ? `0 0 6px ${t.color}` : "none",
                              }}
                            />
                            <span
                              className="text-[8px] font-mono leading-tight text-center"
                              style={{ color: isActive ? t.color : "var(--t-text-muted)" }}
                            >
                              {t.label}
                            </span>
                          </button>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer hint */}
            <div
              className="px-4 py-2 text-center"
              style={{ borderTop: "1px solid color-mix(in srgb, var(--t-primary) 10%, transparent)" }}
            >
              <span className="text-[9px] font-mono" style={{ color: "var(--t-text-muted)" }}>
                your pick is saved across visits
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
