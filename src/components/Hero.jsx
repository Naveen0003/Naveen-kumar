import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import { profile } from "../utils/data";
import image1 from "../assets/images/image1.jpg";

export default function Hero() {

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
            React Developer & SEO Specialist for Growing Businesses
          </h1>

          <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            {profile.intro}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-medium text-sm hover:opacity-90 hover:scale-[1.03] transition-all shadow-lg shadow-blue-500/20"
            >
              Get a Free Website Audit
            </button>
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium text-sm hover:scale-[1.03] transition-transform"
            >
              View My Work
            </button>
          </div>

          <p className="text-xs text-[var(--text-muted)] font-mono">
            2+ years of experience | React, JavaScript, Technical SEO | Replies within 24 hours | Working with clients in US, UK and beyond
          </p>
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
              alt={`${profile.name} - React Developer and SEO Specialist`}
              className="w-[100%] h-auto object-contain"
              width={384}
              height={384}
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