import { motion } from "framer-motion";
import { FiMessageCircle, FiFileText, FiCode, FiCheckCircle } from "react-icons/fi";
import { workProcess } from "../utils/data";

const icons = {
  1: FiMessageCircle,
  2: FiFileText,
  3: FiCode,
  4: FiCheckCircle,
};

export default function WorkProcess() {
  return (
    <section id="process" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">
            Process
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl mt-3 mb-12">
            How I work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workProcess.map((step, i) => {
            const Icon = icons[step.step] || FiMessageCircle;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white mb-4">
                  <Icon size={22} />
                </div>
                <div className="text-2xl font-bold gradient-text mb-2">
                  0{step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
