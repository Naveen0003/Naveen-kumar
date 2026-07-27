import { motion } from "framer-motion";
import { FiDownload, FiEye, FiFileText } from "react-icons/fi";

export default function Resume() {
  return (
    <section id="resume" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-white shrink-0">
              <FiFileText size={24} />
            </div>
            <div>
              <h2 className="font-[var(--font-display)] font-bold text-2xl mb-1">
                Want the full picture?
              </h2>
              <p className="text-[var(--text-muted)] text-sm max-w-md">
                Grab a copy of my resume — a two-page, ATS-friendly summary of
                my experience, skills, and projects.
              </p>
            </div>
          </div>

          <div className="flex gap-3 shrink-0">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass font-medium text-sm hover:scale-[1.03] transition-transform"
            >
              <FiEye size={16} /> View
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full gradient-bg text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <FiDownload size={16} /> Download
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
