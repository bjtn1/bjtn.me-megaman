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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#00a8e8]/30 bg-[#0a0e1a]/90 backdrop-blur-md">
      <nav aria-label="Main navigation">
        <div className="container max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <a
            className="pixel-text text-[10px] sm:text-xs text-[#00a8e8] tracking-wider hover:opacity-80 transition-opacity"
            href="/"
            aria-label="BJTN - Home"
          >
            BJTN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="pixel-text text-[8px] px-3 py-2 text-[#7a8ba8] hover:text-[#00a8e8] transition-colors"
                role="listitem"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#00a8e8]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation - Stage Select Grid */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-nav"
              className="md:hidden fixed inset-0 top-[53px] z-50 bg-[#060a14]/98 backdrop-blur-md overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-label="Stage select navigation"
            >
              {/* Stage Select title */}
              <div className="text-center pt-8 pb-4">
                <span className="pixel-text text-[10px] text-[#ffd700] tracking-widest">
                  STAGE SELECT
                </span>
              </div>

              {/* Grid of stage tiles */}
              <div className="px-6 py-4">
                <div className="grid grid-cols-3 gap-3 max-w-[280px] mx-auto" role="list">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const gridPositions = [
                      "col-start-2",
                      "col-start-1",
                      "col-start-2",
                      "col-start-3",
                      "col-start-2",
                    ];

                    return (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        role="listitem"
                        className={`${gridPositions[index]} aspect-square flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-[#00a8e8]/40 bg-[#0f1528]/80 hover:border-[#ffd700] hover:bg-[#ffd700]/10 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] focus-visible:border-[#ffd700] focus-visible:bg-[#ffd700]/10 transition-all`}
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: 0.1 + index * 0.06,
                        }}
                      >
                        <Icon
                          size={22}
                          className="text-[#00a8e8]"
                          aria-hidden="true"
                        />
                        <span className="pixel-text text-[6px] leading-tight text-center text-[#7a8ba8]">
                          {item.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Bottom hint */}
              <div className="text-center mt-6 pb-8">
                <span className="pixel-text text-[7px] text-[#7a8ba8]/60 animate-[blink_1.5s_ease-in-out_infinite]" aria-hidden="true">
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
