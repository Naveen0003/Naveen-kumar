import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { certifications, education } from "../utils/data";

export default function Credentials() {
  return (
    <section className="py-24">
      <div className="section-container grid md:grid-cols-2 gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">
              Certifications
            </span>
            <h2 className="font-[var(--font-display)] font-bold text-2xl sm:text-3xl mt-3 mb-8">
              Continuous learning
            </h2>
          </motion.div>

          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform"
              >
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                  <FiAward size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{cert.name}</h3>
                  <p className="text-xs text-[var(--text-muted)]">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">
              Education
            </span>
            <h2 className="font-[var(--font-display)] font-bold text-2xl sm:text-3xl mt-3 mb-8">
              Academic background
            </h2>
          </motion.div>

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                <FiBookOpen size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{edu.degree}</h3>
                <p className="text-xs text-blue-500 mb-1">{edu.school}</p>
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  {edu.duration} · {edu.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
