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
      <div className="flex items-center gap-1" aria-hidden="true">
        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "var(--t-primary)" }} />
        <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 50%, transparent)" }} />
      </div>
      <h2
        className="pixel-text text-[10px] sm:text-xs md:text-sm tracking-wider"
        style={{ color: "var(--t-primary)", textShadow: "0 0 10px var(--t-glow)" }}
      >
        {children.toUpperCase()}
      </h2>
      <div
        className="flex-1 h-px"
        style={{ background: `linear-gradient(to right, color-mix(in srgb, var(--t-primary) 40%, transparent), transparent)` }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
