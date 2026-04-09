import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function HPBar({ name, level, index }: { name: string; level: number; index: number }) {
  // Use theme-aware colors based on level
  const getBarStyle = (lvl: number) => {
    if (lvl >= 80) return "var(--t-primary)";
    if (lvl >= 60) return "var(--t-accent)";
    if (lvl >= 40) return "var(--t-accent2)";
    return "var(--t-success)";
  };
  const color = getBarStyle(level);

  return (
    <motion.div
      className="flex items-center gap-2 sm:gap-3 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      role="listitem"
    >
      <span className="text-[10px] sm:text-xs w-24 sm:w-32 md:w-36 truncate font-mono transition-colors" style={{ color: "var(--t-text-muted)" }}>
        {name}
      </span>
      <div
        className="flex-1 h-3 rounded-sm border overflow-hidden relative"
        style={{
          backgroundColor: "var(--t-bg-muted)",
          borderColor: "color-mix(in srgb, var(--t-primary) 10%, transparent)",
        }}
        role="meter"
        aria-label={`${name} skill level`}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-sm relative"
          style={{ backgroundColor: color, boxShadow: `0 0 6px color-mix(in srgb, ${color} 40%, transparent)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.04, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 7px, color-mix(in srgb, var(--t-bg) 30%, transparent) 7px, color-mix(in srgb, var(--t-bg) 30%, transparent) 8px)` }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
      <span className="text-[9px] font-mono w-7 text-right tabular-nums" style={{ color: "color-mix(in srgb, var(--t-text-muted) 60%, transparent)" }} aria-hidden="true">
        {level}
      </span>
    </motion.div>
  );
}

function SkillCategory({ title, skillList, startIndex = 0 }: { title: string; skillList: { name: string; level: number }[]; startIndex?: number }) {
  return (
    <div className="pixel-border rounded-lg p-4 sm:p-5 backdrop-blur-sm" style={{ backgroundColor: "color-mix(in srgb, var(--t-bg-card) 60%, transparent)" }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "var(--t-accent2)" }} aria-hidden="true" />
        <h3 className="pixel-text text-[7px] sm:text-[8px] tracking-wider" style={{ color: "var(--t-accent2)" }}>
          {title.toUpperCase()}
        </h3>
      </div>
      <div className="flex flex-col gap-2.5" role="list" aria-label={title}>
        {skillList.map((skill, i) => (
          <HPBar key={skill.name} name={skill.name} level={skill.level} index={startIndex + i} />
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
          <SkillCategory title="Programming & Development" skillList={skills.programmingAndDevelopment} />
          <SkillCategory title="Operating Systems" skillList={skills.operatingSystems} startIndex={skills.programmingAndDevelopment.length} />
          <SkillCategory title="Languages" skillList={skills.languages} startIndex={skills.programmingAndDevelopment.length + skills.operatingSystems.length} />
        </div>
        <div className="mt-5 flex flex-wrap gap-3 sm:gap-4 justify-center text-[10px] font-mono" style={{ color: "var(--t-text-muted)" }} aria-label="Skill level legend" role="list">
          {[
            { var: "var(--t-primary)", label: "Advanced" },
            { var: "var(--t-accent)", label: "Intermediate" },
            { var: "var(--t-accent2)", label: "Developing" },
            { var: "var(--t-success)", label: "Basic" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5" role="listitem">
              <div className="w-3 h-2 rounded-sm" style={{ backgroundColor: item.var }} aria-hidden="true" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
