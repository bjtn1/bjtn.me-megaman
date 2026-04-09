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
              className="pixel-border rounded-lg bg-[#0f1528]/60 backdrop-blur-sm overflow-hidden group hover:bg-[#0f1528]/80 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Header bar */}
              <div className="px-4 sm:px-5 py-3 border-b border-[#00a8e8]/10 bg-[#00a8e8]/5 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00a8e8] rounded-sm group-hover:animate-[blink_1s_ease-in-out_infinite]" aria-hidden="true" />
                <h3 className="pixel-text text-[8px] sm:text-[9px] text-[#00a8e8] tracking-wide">
                  {project.title.toUpperCase()}
                </h3>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                {/* Tech tags */}
                <ul className="flex flex-wrap gap-1.5 mb-3 list-none" aria-label={`Technologies used in ${project.title}`}>
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-sm bg-[#00a8e8]/10 text-[#00a8e8] border border-[#00a8e8]/20 font-mono"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-[#7a8ba8] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Footer links */}
              <div className="px-4 sm:px-5 py-3 border-t border-[#00a8e8]/10 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#7a8ba8] hover:text-[#00a8e8] transition-colors"
                  aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="font-mono">Source</span>
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#7a8ba8] hover:text-[#ffd700] transition-colors"
                    aria-label={`View ${project.title} live demo (opens in new tab)`}
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
