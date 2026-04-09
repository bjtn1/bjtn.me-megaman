import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["resume", "projects", "skills", "education", "experience"];

export default function MegaHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              key={item}
              href={`#${item}`}
              className="pixel-text text-[8px] px-3 py-2 text-[#7a8ba8] hover:text-[#00a8e8] transition-colors relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.08 }}
              whileHover={{
                textShadow: "0 0 8px #00a8e8",
                color: "#00a8e8",
              }}
            >
              {item.toUpperCase()}
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

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-[#00a8e8]/20 bg-[#0a0e1a]/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="pixel-text text-[8px] py-3 px-3 text-[#7a8ba8] hover:text-[#00a8e8] hover:bg-[#00a8e8]/5 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {`> ${item.toUpperCase()}`}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
