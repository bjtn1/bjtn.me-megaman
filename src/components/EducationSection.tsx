import { education } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useFranchise } from "@/lib/useFranchise";

export default function EducationSection() {
  const config = useFranchise();
  return (
    <section id="education" className="py-12" aria-label="Education">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-4">
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-5">
          {education.map((edu, index) => (
            <motion.article
              key={edu.institution}
              className="pixel-border rounded-lg backdrop-blur-sm overflow-hidden"
              style={{ backgroundColor: "color-mix(in srgb, var(--t-bg-card) 60%, transparent)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div
                className="px-4 sm:px-5 py-3"
                style={{
                  borderBottom: "1px solid color-mix(in srgb, var(--t-primary) 10%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--t-primary) 5%, transparent)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium" style={{ color: "var(--t-text)" }}>{edu.degree}</h3>
                    <p className="text-xs mt-0.5" style={{ color: "var(--t-text-muted)" }}>{edu.institution} - {edu.location}</p>
                  </div>
                  <span className="pixel-text text-[7px] shrink-0" style={{ color: "color-mix(in srgb, var(--t-primary) 70%, transparent)" }}>{edu.period}</span>
                </div>
              </div>
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: "var(--t-accent2)" }} aria-hidden="true" />
                    <h4 className="pixel-text text-[7px]" style={{ color: "var(--t-accent2)" }}>COURSEWORK</h4>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 list-none" aria-label="Relevant coursework">
                    {edu.achievements.map((course, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-[11px] sm:text-xs font-mono"
                        style={{ color: "var(--t-text-muted)" }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <span style={{ color: "color-mix(in srgb, var(--t-primary) 40%, transparent)" }} aria-hidden="true">{config.listPrefix}</span>
                        <span>{course}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
