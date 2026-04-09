import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 relative" aria-label="Projects">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-4">
        <SectionHeading>Projects</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="pixel-border rounded-lg backdrop-blur-sm overflow-hidden group transition-all"
              style={{ backgroundColor: "color-mix(in srgb, var(--t-bg-card) 60%, transparent)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Header */}
              <div
                className="px-4 sm:px-5 py-3 flex items-center gap-2"
                style={{
                  borderBottom: "1px solid color-mix(in srgb, var(--t-primary) 10%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--t-primary) 5%, transparent)",
                }}
              >
                <div className="w-2 h-2 rounded-sm group-hover:animate-[blink_1s_ease-in-out_infinite]" style={{ backgroundColor: "var(--t-primary)" }} aria-hidden="true" />
                <h3 className="pixel-text text-[8px] sm:text-[9px] tracking-wide" style={{ color: "var(--t-primary)" }}>
                  {project.title.toUpperCase()}
                </h3>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <ul className="flex flex-wrap gap-1.5 mb-3 list-none" aria-label={`Technologies used in ${project.title}`}>
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-sm border font-mono"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--t-primary) 10%, transparent)",
                        color: "var(--t-primary)",
                        borderColor: "color-mix(in srgb, var(--t-primary) 20%, transparent)",
                      }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div
                className="px-4 sm:px-5 py-3 flex items-center gap-4"
                style={{ borderTop: "1px solid color-mix(in srgb, var(--t-primary) 10%, transparent)" }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs transition-colors"
                  style={{ color: "var(--t-text-muted)" }}
                  aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t-text-muted)")}
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="font-mono">Source</span>
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs transition-colors"
                    style={{ color: "var(--t-text-muted)" }}
                    aria-label={`View ${project.title} live demo (opens in new tab)`}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t-accent2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t-text-muted)")}
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="font-mono">Demo</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
