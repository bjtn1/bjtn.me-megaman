import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Stage intro wipe transition - horizontal bars that slide open
 * to reveal section content, like the Mega Man stage intro animation.
 */
export default function StageWipe({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const barCount = 8;

  return (
    <div ref={ref} className="relative">
      {/* Content underneath */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.1, delay: 0.4 }}
      >
        {children}
      </motion.div>

      {/* Wipe bars overlay */}
      {!isInView ? null : (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col overflow-hidden">
          {[...Array(barCount)].map((_, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className="flex-1 bg-[#0a0e1a]"
                initial={{ x: 0 }}
                animate={{ x: isEven ? "-105%" : "105%" }}
                transition={{
                  duration: 0.35,
                  delay: 0.05 + i * 0.04,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
