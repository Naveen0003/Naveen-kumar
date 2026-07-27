import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiArrowRight, FiCode } from "react-icons/fi";
import { profile } from "../utils/data";
import image1 from "../assets/images/image1.jpg";

const roles = [
  "React Frontend Developer",
  "UI Engineer",
  "REST API Integrator",
  "Performance Optimizer",
];

const stack = ["React", "Tailwind", "Node.js", "REST API"];

function useTypingEffect(words, speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 2
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(roles);

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* subtle grid backdrop */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full gradient-bg opacity-80 blur-3xl"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -left-24 w-80 h-80 rounded-full gradient-bg opacity-90 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-full glass text-blue-500 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>

          <h1 className="font-[var(--font-display)] font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-4">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="h-9 mb-6">
            <span className="font-mono text-lg sm:text-xl text-[var(--text-muted)]">
              {typed}
              <span className="inline-block w-[2px] h-5 bg-blue-700 ml-1 align-middle animate-pulse" />
            </span>
          </div>

          <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            {profile.intro}
          </p>

          {/* tech chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-medium text-sm hover:opacity-90 hover:scale-[1.03] transition-all shadow-lg shadow-blue-500/20"
            >
              <FiDownload size={16} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium text-sm hover:scale-[1.03] transition-transform"
            >
              <FiMail size={16} /> Contact Me
            </button>
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] font-medium text-sm hover:border-blue-500 transition-colors group"
            >
              View Projects{" "}
              <FiArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto"
        >
          {/* glow rings */}
          <div className="absolute inset-0 gradient-bg rounded-[2rem] blur-2xl opacity-30 scale-95" />
          <motion.div
            className="absolute -inset-4 rounded-[2.5rem] border border-blue-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-110 md:h-96 rounded-[2rem] glass flex items-center justify-center overflow-hidden">
            <motion.img
              src={image1}
              alt={`${profile.name} illustration, coding at a desk`}
              className="w-[100%] h-auto object-contain"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* floating "coding" badge */}
          <motion.div
            className="absolute -bottom-5 -left-5 sm:-left-8 glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
          >
            <span className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white">
              <FiCode size={16} />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold">Clean Code</p>
              <p className="text-[10px] text-[var(--text-muted)]">
                Pixel-perfect UI
              </p>
            </div>
          </motion.div>

          {/* floating stat chip */}
          <motion.div
            className="absolute -top-4 -right-4 sm:-right-8 glass rounded-2xl px-4 py-2.5 shadow-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.8 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
          >
            <p className="text-lg font-bold gradient-text leading-none">2+</p>
            <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
              Years Exp
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}