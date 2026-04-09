import { useState } from "react";
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#00a8e8]/30 bg-[#0a0e1a]/90 backdrop-blur-md">
      <div className="container max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a
          className="pixel-text text-[10px] sm:text-xs text-[#00a8e8] tracking-wider"
          href="/"
          whileHover={{ scale: 1.05, textShadow: "0 0 10px #00a8e8" }}
          whileTap={{ scale: 0.95 }}
        >
          BJTN
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className="pixel-text text-[8px] px-3 py-2 text-[#7a8ba8] hover:text-[#00a8e8] transition-colors relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.08 }}
              whileHover={{
                textShadow: "0 0 8px #00a8e8",
                color: "#00a8e8",
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-[#00a8e8]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Navigation - Stage Select Grid */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-[53px] z-50 bg-[#060a14]/98 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Stage Select title */}
            <motion.div
              className="text-center pt-8 pb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="pixel-text text-[10px] text-[#ffd700] tracking-widest">
                STAGE SELECT
              </span>
            </motion.div>

            {/* Grid of stage tiles */}
            <div className="px-6 py-4">
              <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isHovered = hoveredIndex === index;
                  // Place items in a cross pattern: top-center, middle-left, middle-center, middle-right, bottom-center
                  const gridPositions = [
                    "col-start-2", // resume - top center
                    "col-start-1", // projects - middle left
                    "col-start-2", // skills - middle center
                    "col-start-3", // education - middle right
                    "col-start-2", // experience - bottom center
                  ];

                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`${gridPositions[index]} aspect-square flex flex-col items-center justify-center gap-2 rounded-lg border-2 transition-all ${
                        isHovered
                          ? "border-[#ffd700] bg-[#ffd700]/10 shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                          : "border-[#00a8e8]/40 bg-[#0f1528]/80"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      onPointerEnter={() => setHoveredIndex(index)}
                      onPointerLeave={() => setHoveredIndex(null)}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.1 + index * 0.06,
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon
                        size={22}
                        className={
                          isHovered ? "text-[#ffd700]" : "text-[#00a8e8]"
                        }
                      />
                      <span
                        className={`pixel-text text-[6px] leading-tight text-center ${
                          isHovered ? "text-[#ffd700]" : "text-[#7a8ba8]"
                        }`}
                      >
                        {item.label}
                      </span>

                      {/* Selection cursor indicator */}
                      {isHovered && (
                        <motion.div
                          className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-lg border border-[#ffd700]/50"
                          layoutId="stage-cursor"
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Bottom hint */}
            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="pixel-text text-[7px] text-[#7a8ba8]/60 animate-[blink_1.5s_ease-in-out_infinite]">
                SELECT A STAGE
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
