import { motion } from "framer-motion";
import { FiLink, FiCheck } from "react-icons/fi";
import { linkBuildingSample } from "../utils/data";

export default function LinkBuilding() {
  return (
    <section id="link-building" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">
            Link Building
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl mt-3 mb-4">
            {linkBuildingSample.title}
          </h2>
          <p className="text-sm text-[var(--text-muted)] mb-12">
            {linkBuildingSample.disclaimer}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-semibold text-lg mb-4">My Process</h3>
            <ol className="space-y-3">
              {linkBuildingSample.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-semibold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-semibold text-lg mb-4">Quality Checklist</h3>
            <ul className="space-y-2">
              {linkBuildingSample.qualityChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <FiCheck className="text-blue-500 mt-0.5 shrink-0" size={14} />
                  <span className="text-sm text-[var(--text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>


        {linkBuildingSample.sampleReport && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-center"
          >
            <a
              href={linkBuildingSample.sampleReport}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass font-medium text-sm hover:scale-[1.03] transition-transform"
            >
              <FiLink size={16} /> Download Sample Report
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
