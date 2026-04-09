import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function HPBar({ name, level, index }: { name: string; level: number; index: number }) {
  const getBarColor = (lvl: number) => {
    if (lvl >= 80) return "#00a8e8";
    if (lvl >= 60) return "#00e5ff";
    if (lvl >= 40) return "#ffd700";
    return "#44ff44";
  };

  const color = getBarColor(level);

  return (
    <motion.div
      className="flex items-center gap-2 sm:gap-3 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      role="listitem"
    >
      <span className="text-[10px] sm:text-xs text-[#7a8ba8] w-24 sm:w-32 md:w-36 truncate font-mono group-hover:text-[#e8f0ff] transition-colors">
        {name}
      </span>
      <div
        className="flex-1 h-3 bg-[#1a2040] rounded-sm border border-[#00a8e8]/10 overflow-hidden relative"
        role="meter"
        aria-label={`${name} skill level`}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-sm relative"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 6px ${color}40`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.04, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(10, 14, 26, 0.3) 7px, rgba(10, 14, 26, 0.3) 8px)`,
            }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
      <span className="text-[9px] text-[#7a8ba8]/60 font-mono w-7 text-right tabular-nums" aria-hidden="true">
        {level}
      </span>
    </motion.div>
  );
}

function SkillCategory({
  title,
  skillList,
  startIndex = 0,
}: {
  title: string;
  skillList: { name: string; level: number }[];
  startIndex?: number;
}) {
  return (
    <div
      className="pixel-border rounded-lg p-4 sm:p-5 bg-[#0f1528]/60 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-[#ffd700] rounded-sm" aria-hidden="true" />
        <h3 className="pixel-text text-[7px] sm:text-[8px] text-[#ffd700] tracking-wider">
          {title.toUpperCase()}
        </h3>
      </div>
      <div className="flex flex-col gap-2.5" role="list" aria-label={title}>
        {skillList.map((skill, i) => (
          <HPBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            index={startIndex + i}
          />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12" aria-label="Skills">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-4">
        <SectionHeading>Skills</SectionHeading>

        <div className="space-y-5">
          <SkillCategory
            title="Programming & Development"
            skillList={skills.programmingAndDevelopment}
          />
          <SkillCategory
            title="Operating Systems"
            skillList={skills.operatingSystems}
            startIndex={skills.programmingAndDevelopment.length}
          />
          <SkillCategory
            title="Languages"
            skillList={skills.languages}
            startIndex={
              skills.programmingAndDevelopment.length +
              skills.operatingSystems.length
            }
          />
        </div>

        {/* Legend */}
        <div
          className="mt-5 flex flex-wrap gap-3 sm:gap-4 justify-center text-[10px] font-mono text-[#7a8ba8]"
          aria-label="Skill level legend"
          role="list"
        >
          {[
            { color: "#00a8e8", label: "Advanced (80-100)" },
            { color: "#00e5ff", label: "Intermediate (60-79)" },
            { color: "#ffd700", label: "Developing (40-59)" },
            { color: "#44ff44", label: "Basic (0-39)" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5" role="listitem">
              <div
                className="w-3 h-2 rounded-sm"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />
              {item.label.split(" (")[0]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
