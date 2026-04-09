import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MegaManSprite, { BusterShot } from "./MegaManSprite";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Floating pixel particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00a8e8]/30 rounded-sm"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container max-w-5xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left flex-1">
            {/* "READY" indicator */}
            <motion.div
              className="inline-flex items-center gap-2 mb-4 pixel-text text-[8px] text-[#44ff44]"
              variants={childVariants}
            >
              <span className="inline-block w-2 h-2 bg-[#44ff44] rounded-sm animate-[blink_1s_ease-in-out_infinite]" />
              READY
            </motion.div>

            <motion.h1
              className="pixel-text text-lg sm:text-xl md:text-2xl text-[#00a8e8] mb-3 leading-relaxed"
              variants={childVariants}
              style={{ textShadow: "0 0 20px rgba(0, 168, 232, 0.4)" }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="text-base text-[#7a8ba8] mb-6"
              variants={childVariants}
            >
              Software Engineer, musician, and{" "}
              <span className="text-[#00a8e8]">Mega Man</span> fan
            </motion.p>

            {/* Contact links styled like a menu */}
            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              {[
                {
                  icon: MapPin,
                  text: personalInfo.location,
                  href: undefined,
                },
                {
                  icon: Mail,
                  text: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: Github,
                  text: "GitHub",
                  href: personalInfo.github,
                },
                {
                  icon: Linkedin,
                  text: "LinkedIn",
                  href: personalInfo.linkedin,
                },
              ].map((item) => {
                const Icon = item.icon;
                const inner = (
                  <motion.span
                    className="flex items-center gap-2 text-sm text-[#7a8ba8] hover:text-[#00a8e8] transition-colors group"
                    variants={childVariants}
                    whileHover={{ x: 4, color: "#00a8e8" }}
                  >
                    <span className="text-[#00a8e8]/50 text-xs font-mono group-hover:text-[#00a8e8]">{">"}</span>
                    <Icon className="h-3.5 w-3.5" />
                    {item.text}
                  </motion.span>
                );
                return item.href ? (
                  <a
                    key={item.text}
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.text}>{inner}</div>
                );
              })}
            </motion.div>
          </div>

          {/* Profile image with Mega Man-style frame */}
          <motion.div
            className="flex justify-center"
            variants={childVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {/* Outer glow */}
              <div className="absolute -inset-2 bg-[#00a8e8]/10 rounded-lg blur-md" />
              {/* Frame */}
              <div className="relative pixel-border rounded-lg p-1 bg-[#0a0e1a]">
                <img
                  src="/profile.jpg"
                  alt="Brandon Jose Tenorio Noguera"
                  className="w-44 md:w-56 rounded-md"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#00a8e8]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#00a8e8]" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#00a8e8]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#00a8e8]" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bio box styled like a Mega Man dialog */}
        <motion.div
          className="mt-10 pixel-border rounded-lg p-5 bg-[#0f1528]/80 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-[#00a8e8] rounded-sm" />
            <span className="pixel-text text-[8px] text-[#00a8e8]">MISSION BRIEF</span>
          </div>
          <p className="text-[#7a8ba8] text-sm leading-relaxed">
            Computer science graduate from the University of Maryland, Baltimore County.
            Interests: Privacy, Data Recovery, Cybersecurity, Data Management, and Machine Learning.
          </p>
        </motion.div>

        {/* Mega Man sprite running across the bottom */}
        <motion.div
          className="mt-8 flex items-center justify-center md:justify-start gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <MegaManSprite size={64} />
          </motion.div>
          <BusterShot className="ml-1" />
        </motion.div>
      </div>
    </section>
  );
}
