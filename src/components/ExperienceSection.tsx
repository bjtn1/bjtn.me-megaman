import { workExperience } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12" aria-label="Work experience">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-4">
        <SectionHeading>Experience</SectionHeading>

        <div className="relative">
          {/* Timeline line - decorative */}
          <div className="absolute left-[7px] top-4 bottom-4 w-px bg-gradient-to-b from-[#00a8e8]/50 via-[#00a8e8]/20 to-transparent hidden sm:block" aria-hidden="true" />

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
                {/* Timeline dot - decorative */}
                <div className="hidden sm:flex flex-col items-center pt-1" aria-hidden="true">
                  <div className="w-[14px] h-[14px] rounded-sm bg-[#0a0e1a] border-2 border-[#00a8e8] z-10" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pixel-border rounded-lg bg-[#0f1528]/60 backdrop-blur-sm overflow-hidden">
                  {/* Header */}
                  <div className="px-4 sm:px-5 py-3 border-b border-[#00a8e8]/10 bg-[#00a8e8]/5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                      <div className="min-w-0">
                        <h3 className="text-sm font-medium text-[#e8f0ff]">
                          {job.position}
                        </h3>
                        <p className="text-xs text-[#7a8ba8] mt-0.5">
                          {job.company} - {job.location}
                        </p>
                      </div>
                      <span className="pixel-text text-[7px] text-[#00a8e8]/70 shrink-0">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="p-4 sm:p-5">
                    <ul className="flex flex-col gap-2 list-none" aria-label={`Achievements at ${job.company}`}>
                      {job.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm text-[#7a8ba8]"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <span className="text-[#00a8e8] mt-0.5 text-xs shrink-0" aria-hidden="true">
                            {"//"}
                          </span>
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
