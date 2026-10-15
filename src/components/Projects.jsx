import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../utils/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">
            Featured Projects
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl mt-3 mb-12">
            A few things I've built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1.5 transition-transform"
            >
              <div className="h-48 gradient-bg opacity-90 flex items-center justify-center">
                <span className="font-[var(--font-display)] text-white/90 font-semibold text-sm px-4 text-center">
                  {project.name}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">
                  {project.summary}
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs font-semibold text-blue-500 mb-1">Problem</p>
                    <p className="text-xs text-[var(--text-muted)]">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-500 mb-1">What I did</p>
                    <ul className="text-xs text-[var(--text-muted)] space-y-1">
                      {project.work.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-500 mb-1">Result</p>
                    <p className="text-xs text-[var(--text-muted)]">{project.result}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-blue-500 mb-2">Tech used</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2 py-1 rounded-full bg-blue-500/10 text-blue-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex gap-3 pt-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium py-2.5 rounded-full border border-[var(--border)] hover:border-blue-500 transition-colors"
                    >
                      <FiGithub size={14} /> GitHub
                    </a>
                  ) : (
                    <span className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium py-2.5 rounded-full border border-dashed border-[var(--border)] text-[var(--text-muted)]">
                      <FiGithub size={14} /> Coming soon
                    </span>
                  )}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium py-2.5 rounded-full gradient-bg text-white hover:opacity-90 transition-opacity"
                    >
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium py-2.5 rounded-full border border-dashed border-[var(--border)] text-[var(--text-muted)]">
                      <FiExternalLink size={14} /> Coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
