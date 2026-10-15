import { motion } from "framer-motion";
import { FiCode, FiSearch, FiMapPin, FiLink } from "react-icons/fi";
import { services } from "../utils/data";

const icons = {
  code: FiCode,
  search: FiSearch,
  "map-pin": FiMapPin,
  link: FiLink,
};

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">
            Services
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl mt-3 mb-12">
            What I can do for you
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7">
          {services.map((service, i) => {
            const Icon = icons[service.icon] || FiCode;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass rounded-2xl p-7 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </div>

                <p className="text-sm text-[var(--text-muted)] mb-5">
                  {service.outcome}
                </p>

                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-xs text-[var(--text-muted)] flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-0.5">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-[var(--text-muted)] mt-10 text-center"
        >
          I focus on relevance and quality, not on promising a fixed number of links or guaranteed rankings.
        </motion.p>
      </div>
    </section>
  );
}
