import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-12 relative">
      <div className="container max-w-5xl mx-auto px-6 md:px-4">
        <SectionHeading>Resume</SectionHeading>

        <motion.a
          href="/BrandonJose_TenorioNoguera_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
        >
          <div className="pixel-border rounded-lg p-6 bg-[#0f1528]/60 backdrop-blur-sm hover:bg-[#0f1528]/80 transition-colors group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00a8e8]/10 border border-[#00a8e8]/20">
                  <FileText className="h-5 w-5 text-[#00a8e8]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#e8f0ff] group-hover:text-[#00a8e8] transition-colors">
                    BrandonJose_TenorioNoguera_Resume.pdf
                  </h3>
                  <p className="text-xs text-[#7a8ba8] mt-1">
                    Concise 1-page resume with key highlights
                  </p>
                </div>
              </div>
              <motion.div
                className="hidden sm:flex items-center gap-2 pixel-text text-[7px] text-[#00a8e8] opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
              >
                <Download className="h-3.5 w-3.5" />
                OPEN
              </motion.div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
