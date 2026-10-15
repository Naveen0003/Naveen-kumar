import { motion } from "framer-motion";
import { FiSearch, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import { seoCaseStudy } from "../utils/data";

export default function SeoCaseStudy() {
  return (
    <section id="case-study" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">
            Case Study
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl mt-3 mb-12">
            {seoCaseStudy.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white">
                <FiSearch size={18} />
              </div>
              <h3 className="font-semibold">Problem</h3>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {seoCaseStudy.problem}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white">
                <FiCheckCircle size={18} />
              </div>
              <h3 className="font-semibold">What I Checked</h3>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {seoCaseStudy.whatChecked}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white">
                <FiTrendingUp size={18} />
              </div>
              <h3 className="font-semibold">What I Changed</h3>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {seoCaseStudy.whatChanged}
            </p>
          </motion.div>
        </div>

        

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
