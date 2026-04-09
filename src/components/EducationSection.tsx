import { education } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="py-12" aria-label="Education">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-4">
        <SectionHeading>Education</SectionHeading>

        <div className="space-y-5">
          {education.map((edu, index) => (
            <motion.article
              key={edu.institution}
              className="pixel-border rounded-lg bg-[#0f1528]/60 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Header */}
              <div className="px-4 sm:px-5 py-3 border-b border-[#00a8e8]/10 bg-[#00a8e8]/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium text-[#e8f0ff]">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-[#7a8ba8] mt-0.5">
                      {edu.institution} - {edu.location}
                    </p>
                  </div>
                  <span className="pixel-text text-[7px] text-[#00a8e8]/70 shrink-0">
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Coursework */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 bg-[#ffd700] rounded-sm" aria-hidden="true" />
                    <h4 className="pixel-text text-[7px] text-[#ffd700]">
                      COURSEWORK
                    </h4>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 list-none" aria-label="Relevant coursework">
                    {edu.achievements.map((course, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-[11px] sm:text-xs text-[#7a8ba8] font-mono"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <span className="text-[#00a8e8]/40 shrink-0" aria-hidden="true">{">"}</span>
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
