import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-12 relative" aria-label="Resume">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-4">
        <SectionHeading>Resume</SectionHeading>

        <motion.a
          href="/BrandonJose_TenorioNoguera_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label="Open resume PDF in new tab: Brandon Jose Tenorio Noguera Resume"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
        >
          <div className="pixel-border rounded-lg p-4 sm:p-6 bg-[#0f1528]/60 backdrop-blur-sm hover:bg-[#0f1528]/80 transition-colors group overflow-hidden">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00a8e8]/10 border border-[#00a8e8]/20 shrink-0">
                <FileText className="h-5 w-5 text-[#00a8e8]" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm font-medium text-[#e8f0ff] group-hover:text-[#00a8e8] transition-colors break-all sm:break-normal">
                  BrandonJose_TenorioNoguera_Resume.pdf
                </h3>
                <p className="text-xs text-[#7a8ba8] mt-1">
                  Concise 1-page resume with key highlights
                </p>
              </div>
              <div
                className="hidden sm:flex items-center gap-2 pixel-text text-[7px] text-[#00a8e8] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                aria-hidden="true"
              >
                <Download className="h-3.5 w-3.5" />
                OPEN
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
