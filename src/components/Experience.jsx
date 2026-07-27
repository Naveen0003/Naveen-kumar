import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "../utils/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">
            Experience
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl mt-3 mb-12">
            Where I've worked
          </h2>
        </motion.div>

        <div className="relative pl-8 border-l-2 border-[var(--border)] space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[2.55rem] top-1 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white">
                <FiBriefcase size={14} />
              </span>

              <div className="glass rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-lg">{job.role}</h3>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {job.duration}
                  </span>
                </div>
                <p className="text-blue-500 text-sm font-medium mb-4">
                  {job.company} · {job.location}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-[var(--text-muted)] pl-4 relative"
                    >
                      <span className="absolute left-0 text-blue-500">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
