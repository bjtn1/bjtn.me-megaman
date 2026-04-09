import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Code, Cpu, GraduationCap, Briefcase } from "lucide-react";

const navItems = [
  { id: "resume", label: "RESUME", icon: FileText },
  { id: "projects", label: "PROJECTS", icon: Code },
  { id: "skills", label: "SKILLS", icon: Cpu },
  { id: "education", label: "EDUCATION", icon: GraduationCap },
  { id: "experience", label: "EXPERIENCE", icon: Briefcase },
];

export default function MegaHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        borderBottom: "2px solid color-mix(in srgb, var(--t-primary) 30%, transparent)",
        backgroundColor: "color-mix(in srgb, var(--t-bg) 90%, transparent)",
      }}
    >
      <nav aria-label="Main navigation">
        <div className="container max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <a
            className="pixel-text text-[10px] sm:text-xs tracking-wider hover:opacity-80 transition-opacity"
            href="/"
            aria-label="BJTN - Home"
            style={{ color: "var(--t-primary)" }}
          >
            BJTN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="pixel-text text-[8px] px-3 py-2 transition-colors"
                role="listitem"
                style={{ color: "var(--t-text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t-text-muted)")}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            style={{ color: "var(--t-primary)" }}
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation - Stage Select Grid */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-nav"
              className="md:hidden fixed inset-0 top-[53px] z-50 backdrop-blur-md overflow-y-auto"
              style={{ backgroundColor: "color-mix(in srgb, var(--t-bg-deep) 98%, transparent)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-label="Stage select navigation"
            >
              <div className="text-center pt-8 pb-4">
                <span className="pixel-text text-[10px] tracking-widest" style={{ color: "var(--t-accent2)" }}>
                  STAGE SELECT
                </span>
              </div>

              <div className="px-6 py-4">
                <div className="grid grid-cols-3 gap-3 max-w-[280px] mx-auto" role="list">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const gridPositions = [
                      "col-start-2", "col-start-1", "col-start-2", "col-start-3", "col-start-2",
                    ];
                    return (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        role="listitem"
                        className={`${gridPositions[index]} aspect-square flex flex-col items-center justify-center gap-2 rounded-lg border-2 transition-all`}
                        style={{
                          borderColor: "color-mix(in srgb, var(--t-primary) 40%, transparent)",
                          backgroundColor: "color-mix(in srgb, var(--t-bg-card) 80%, transparent)",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 + index * 0.06 }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--t-accent2)";
                          e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--t-accent2) 10%, transparent)";
                          e.currentTarget.style.boxShadow = `0 0 15px color-mix(in srgb, var(--t-accent2) 30%, transparent)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "color-mix(in srgb, var(--t-primary) 40%, transparent)";
                          e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--t-bg-card) 80%, transparent)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <Icon size={22} style={{ color: "var(--t-primary)" }} aria-hidden="true" />
                        <span className="pixel-text text-[6px] leading-tight text-center" style={{ color: "var(--t-text-muted)" }}>
                          {item.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="text-center mt-6 pb-8">
                <span className="pixel-text text-[7px] animate-[blink_1.5s_ease-in-out_infinite]" style={{ color: "color-mix(in srgb, var(--t-text-muted) 60%, transparent)" }} aria-hidden="true">
                  SELECT A STAGE
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
