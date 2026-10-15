import { motion } from "framer-motion";
import { aboutPoints, stats } from "../utils/data";
import Counter from "./Counter";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">
            About Me
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl mt-3 mb-10">
            Who I am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {aboutPoints.map((point) => (
              <p key={point} className="text-[var(--text-muted)] leading-relaxed">
                {point}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-[var(--text-muted)] mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
