import { motion } from "framer-motion";

export default function SectionHeading({ children }: { children: string }) {
  return (
    <motion.div
      className="flex items-center gap-3 mb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Stage select indicator */}
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 bg-[#00a8e8] rounded-sm" />
        <div className="w-1.5 h-1.5 bg-[#00a8e8]/50 rounded-sm" />
      </div>

      <h2
        className="pixel-text text-xs sm:text-sm text-[#00a8e8] tracking-wider"
        style={{ textShadow: "0 0 10px rgba(0, 168, 232, 0.3)" }}
      >
        {children.toUpperCase()}
      </h2>

      {/* Expanding line */}
      <div className="flex-1 h-px bg-gradient-to-r from-[#00a8e8]/40 to-transparent" />
    </motion.div>
  );
}
