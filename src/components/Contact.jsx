import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
} from "react-icons/fi";
import { profile } from "../utils/data";
import { sendContactMessage } from "../services/emailService";

const initialForm = { name: "", email: "", phone: "", website: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;

    // Name field: only letters and spaces allowed
    if (name === "name") {
      const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");
      setForm((f) => ({ ...f, name: lettersOnly }));
      return;
    }

    // Phone field: only digits allowed
    if (name === "phone") {
      const digitsOnly = value.replace(/[^0-9]/g, "");
      setForm((f) => ({ ...f, phone: digitsOnly }));
      return;
    }

    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });
    try {
      await sendContactMessage(form);
      setStatus({ state: "success", message: "Message sent — I'll get back to you soon!" });
      setForm(initialForm);
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">
            Contact
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl mt-3 mb-4">
            Let's talk about your project
          </h2>
          <p className="text-[var(--text-muted)] mb-12">
            Tell me what you need and I'll reply within 24 hours with next steps. The first audit conversation is free.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform"
            >
              <span className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                <FiMail size={17} />
              </span>
              <div>
                <p className="text-xs text-[var(--text-muted)]">Email</p>
                <p className="text-sm font-medium">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform"
            >
              <span className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                <FiPhone size={17} />
              </span>
              <div>
                <p className="text-xs text-[var(--text-muted)]">Phone</p>
                <p className="text-sm font-medium">{profile.phone}</p>
              </div>
            </a>

            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <span className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                <FiMapPin size={17} />
              </span>
              <div>
                <p className="text-xs text-[var(--text-muted)]">Location</p>
                <p className="text-sm font-medium">{profile.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-4 flex items-center justify-center gap-2 text-sm font-medium hover:-translate-y-1 transition-transform"
              >
                <FiLinkedin size={16} /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-4 flex items-center justify-center gap-2 text-sm font-medium hover:-translate-y-1 transition-transform"
              >
                <FiGithub size={16} /> GitHub
              </a>
              {profile.upwork && (
                <a
                  href={profile.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-4 flex items-center justify-center gap-2 text-sm font-medium hover:-translate-y-1 transition-transform"
                >
                  Upwork
                </a>
              )}
              {profile.fiverr && (
                <a
                  href={profile.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-4 flex items-center justify-center gap-2 text-sm font-medium hover:-translate-y-1 transition-transform"
                >
                  Fiverr
                </a>
              )}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="glass rounded-2xl p-7 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--border)] text-sm outline-none focus:border-blue-500 transition-colors"
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--border)] text-sm outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={onChange}
              placeholder="Phone number (optional)"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--border)] text-sm outline-none focus:border-blue-500 transition-colors"
            />
            <input
              name="website"
              type="url"
              value={form.website}
              onChange={onChange}
              placeholder="Website URL (optional)"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--border)] text-sm outline-none focus:border-blue-500 transition-colors"
            />
            <select
              name="service"
              value={form.service}
              onChange={onChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--border)] text-sm outline-none focus:border-blue-500 transition-colors"
            >
              <option value="">What do you need?</option>
              <option value="React development">React development</option>
              <option value="SEO audit">SEO audit</option>
              <option value="Local SEO">Local SEO</option>
              <option value="Link building">Link building</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Your message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--border)] text-sm outline-none focus:border-blue-500 transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={status.state === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gradient-bg text-white font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              <FiSend size={16} />
              {status.state === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status.state === "success" && (
              <p className="text-sm text-emerald-500">{status.message}</p>
            )}
            {status.state === "error" && (
              <p className="text-sm text-red-500">{status.message}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}