import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useFranchise } from "@/lib/useFranchise";

export default function StageWipe({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const config = useFranchise();

  // Mega Man: horizontal bars sliding out
  if (config.franchise === "megaman") {
    const barCount = 8;
    return (
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.1, delay: 0.4 }}
        >
          {children}
        </motion.div>
        {!isInView ? null : (
          <div className="absolute inset-0 pointer-events-none z-10 flex flex-col overflow-hidden" aria-hidden="true">
            {[...Array(barCount)].map((_, i) => (
              <motion.div
                key={i}
                className="flex-1"
                style={{ backgroundColor: "var(--t-bg)" }}
                initial={{ x: 0 }}
                animate={{ x: i % 2 === 0 ? "-105%" : "105%" }}
                transition={{ duration: 0.35, delay: 0.05 + i * 0.04, ease: [0.4, 0, 0.2, 1] }}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Pokemon: fade up with a soft flash
  if (config.franchise === "pokemon") {
    return (
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
        {!isInView ? null : (
          <motion.div
            className="absolute inset-0 pointer-events-none z-10 rounded-xl"
            style={{ backgroundColor: "var(--t-primary)" }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            aria-hidden="true"
          />
        )}
      </div>
    );
  }

  // Overwatch: diagonal wipe
  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.1, delay: 0.35 }}
      >
        {children}
      </motion.div>
      {!isInView ? null : (
        <motion.div
          className="absolute inset-0 pointer-events-none z-10 origin-left"
          style={{ backgroundColor: "var(--t-bg)" }}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
