import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MegaManSprite, { BusterShot } from "./MegaManSprite";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden" aria-label="Introduction">
      {/* Floating particles - decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-sm"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              backgroundColor: "color-mix(in srgb, var(--t-primary) 30%, transparent)",
            }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left flex-1 min-w-0">
            <motion.div
              className="inline-flex items-center gap-2 mb-4 pixel-text text-[8px]"
              variants={childVariants}
              aria-hidden="true"
              style={{ color: "var(--t-success)" }}
            >
              <span
                className="inline-block w-2 h-2 rounded-sm animate-[blink_1s_ease-in-out_infinite]"
                style={{ backgroundColor: "var(--t-success)" }}
              />
              READY
            </motion.div>

            <motion.h1
              className="pixel-text text-sm sm:text-lg md:text-xl lg:text-2xl mb-3 leading-relaxed break-words"
              variants={childVariants}
              style={{ color: "var(--t-primary)", textShadow: "0 0 20px var(--t-glow)" }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base mb-6"
              variants={childVariants}
              style={{ color: "var(--t-text-muted)" }}
            >
              Software Engineer, musician, and{" "}
              <span style={{ color: "var(--t-primary)" }}>Mega Man</span> fan
            </motion.p>

            <motion.div className="flex flex-col gap-2 items-center md:items-start" variants={containerVariants}>
              {[
                { icon: MapPin, text: personalInfo.location, href: undefined, label: `Location: ${personalInfo.location}` },
                { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}`, label: `Email: ${personalInfo.email}` },
                { icon: Github, text: "GitHub", href: personalInfo.github, label: "GitHub profile (opens in new tab)" },
                { icon: Linkedin, text: "LinkedIn", href: personalInfo.linkedin, label: "LinkedIn profile (opens in new tab)" },
              ].map((item) => {
                const Icon = item.icon;
                const inner = (
                  <span className="flex items-center gap-2 text-sm transition-colors group" style={{ color: "var(--t-text-muted)" }}>
                    <span className="text-xs font-mono" style={{ color: "color-mix(in srgb, var(--t-primary) 50%, transparent)" }} aria-hidden="true">{">"}</span>
                    <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{item.text}</span>
                  </span>
                );
                return item.href ? (
                  <a key={item.text} href={item.href} target={item.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" aria-label={item.label}
                    onMouseEnter={(e) => { const s = e.currentTarget.querySelector("span"); if (s) s.style.color = "var(--t-primary)"; }}
                    onMouseLeave={(e) => { const s = e.currentTarget.querySelector("span"); if (s) s.style.color = "var(--t-text-muted)"; }}
                  >{inner}</a>
                ) : (
                  <div key={item.text} aria-label={item.label}>{inner}</div>
                );
              })}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div className="flex justify-center" variants={childVariants}>
            <div className="relative animate-float">
              <div className="absolute -inset-2 rounded-lg blur-md" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 10%, transparent)" }} aria-hidden="true" />
              <div className="relative pixel-border rounded-lg p-1" style={{ backgroundColor: "var(--t-bg)" }}>
                <img src="/profile.jpg" alt="Portrait of Brandon Jose Tenorio Noguera" className="w-36 sm:w-44 md:w-56 rounded-md" style={{ objectFit: "cover" }} />
              </div>
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: "var(--t-primary)" }} aria-hidden="true" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: "var(--t-primary)" }} aria-hidden="true" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: "var(--t-primary)" }} aria-hidden="true" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: "var(--t-primary)" }} aria-hidden="true" />
            </div>
          </motion.div>
        </motion.div>

        {/* Bio box */}
        <motion.div
          className="mt-8 sm:mt-10 pixel-border rounded-lg p-4 sm:p-5 backdrop-blur-sm"
          style={{ backgroundColor: "color-mix(in srgb, var(--t-bg-card) 80%, transparent)" }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-3" aria-hidden="true">
            <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "var(--t-primary)" }} />
            <span className="pixel-text text-[8px]" style={{ color: "var(--t-primary)" }}>MISSION BRIEF</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
            Computer science graduate from the University of Maryland, Baltimore County.
            Interests: Privacy, Data Recovery, Cybersecurity, Data Management, and Machine Learning.
          </p>
        </motion.div>

        {/* Sprite - decorative */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center md:justify-start gap-2" aria-hidden="true">
          <div className="animate-float">
            <MegaManSprite size={64} />
          </div>
          <BusterShot className="ml-1" />
        </div>
      </div>
    </section>
  );
}
