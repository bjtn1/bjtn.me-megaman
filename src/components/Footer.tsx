import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#00a8e8]/20 py-8 bg-[#060a14]/80">
      <div className="container max-w-5xl mx-auto px-6 md:px-4">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-[#7a8ba8] font-mono">
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-[#00a8e8]/40 rounded-sm"
                />
              ))}
            </div>
            <p className="pixel-text text-[7px] text-[#7a8ba8]">
              BUILT WITH{" "}
              <a
                href="https://astro.build"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00a8e8] hover:text-[#00d4ff] transition-colors"
              >
                ASTRO
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
