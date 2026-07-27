import { FiLinkedin, FiGithub } from "react-icons/fi";
import { profile } from "../utils/data";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-[var(--font-display)] font-bold">
            {profile.name}
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            {profile.title}
          </p>
        </div>

        <div className="flex gap-6 text-sm text-[var(--text-muted)]">
          <button onClick={() => scrollTo("#experience")} className="hover:text-[var(--text)]">
            Experience
          </button>
          <button onClick={() => scrollTo("#projects")} className="hover:text-[var(--text)]">
            Projects
          </button>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)]">
            LinkedIn
          </a>
        </div>

        <div className="flex gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FiLinkedin size={15} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FiGithub size={15} />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-[var(--text-muted)] font-mono mt-8">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
