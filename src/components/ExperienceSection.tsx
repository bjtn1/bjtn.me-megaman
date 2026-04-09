import { workExperience } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12" aria-label="Work experience">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-4">
        <SectionHeading>Experience</SectionHeading>
        <div className="relative">
          <div
            className="absolute left-[7px] top-4 bottom-4 w-px hidden sm:block"
            style={{ background: `linear-gradient(to bottom, color-mix(in srgb, var(--t-primary) 50%, transparent), color-mix(in srgb, var(--t-primary) 20%, transparent), transparent)` }}
            aria-hidden="true"
          />
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.article
                key={job.company + job.period}
                className="relative flex gap-4 sm:gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="hidden sm:flex flex-col items-center pt-1" aria-hidden="true">
                  <div className="w-[14px] h-[14px] rounded-sm border-2 z-10" style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-primary)" }} />
                </div>
                <div
                  className="flex-1 min-w-0 pixel-border rounded-lg backdrop-blur-sm overflow-hidden"
                  style={{ backgroundColor: "color-mix(in srgb, var(--t-bg-card) 60%, transparent)" }}
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
                        <h3 className="text-sm font-medium" style={{ color: "var(--t-text)" }}>{job.position}</h3>
                        <p className="text-xs mt-0.5" style={{ color: "var(--t-text-muted)" }}>{job.company} - {job.location}</p>
                      </div>
                      <span className="pixel-text text-[7px] shrink-0" style={{ color: "color-mix(in srgb, var(--t-primary) 70%, transparent)" }}>{job.period}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <ul className="flex flex-col gap-2 list-none" aria-label={`Achievements at ${job.company}`}>
                      {job.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "var(--t-text-muted)" }}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <span className="mt-0.5 text-xs shrink-0" style={{ color: "var(--t-primary)" }} aria-hidden="true">{"//"}</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
