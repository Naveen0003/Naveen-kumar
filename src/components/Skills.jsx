import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiFeather,
  FiGlobe,
  FiGitBranch,
  FiDatabase,
  FiTool,
} from "react-icons/fi";
import { skillGroups } from "../utils/data";

const icons = {
  Frontend: FiCode,
  "State Management": FiLayers,
  Styling: FiFeather,
  API: FiGlobe,
  "Version Control": FiGitBranch,
  Database: FiDatabase,
  Tools: FiTool,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">
            Skills
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl mt-3 mb-10">
            Tools I build with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = icons[group.category] || FiCode;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: gi * 0.05 }}
                className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold">{group.category}</h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-[var(--text-muted)]">
                          {skill.name}
                        </span>
                        <span className="text-[var(--text-muted)] font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
                        <motion.div
                          className="h-full gradient-bg rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
