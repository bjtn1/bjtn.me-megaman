import { workExperience } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12">
      <div className="container max-w-5xl mx-auto px-6 md:px-4">
        <SectionHeading>Experience</SectionHeading>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-px bg-gradient-to-b from-[#00a8e8]/50 via-[#00a8e8]/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.company + job.period}
                className="relative flex gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center pt-1">
                  <motion.div
                    className="w-[14px] h-[14px] rounded-sm bg-[#0a0e1a] border-2 border-[#00a8e8] z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: index * 0.15 + 0.1 }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pixel-border rounded-lg bg-[#0f1528]/60 backdrop-blur-sm overflow-hidden">
                  {/* Header */}
                  <div className="px-5 py-3 border-b border-[#00a8e8]/10 bg-[#00a8e8]/5">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="text-sm font-medium text-[#e8f0ff]">
                          {job.position}
                        </h3>
                        <p className="text-xs text-[#7a8ba8] mt-0.5">
                          {job.company} - {job.location}
                        </p>
                      </div>
                      <span className="pixel-text text-[7px] text-[#00a8e8]/70 whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="p-5">
                    <div className="flex flex-col gap-2">
                      {job.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-2 text-sm text-[#7a8ba8]"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <span className="text-[#00a8e8] mt-0.5 text-xs shrink-0">
                            {"//"}
                          </span>
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
