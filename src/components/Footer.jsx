import { FiLinkedin, FiGithub } from "react-icons/fi";
import { profile } from "../utils/data";

export default function Footer() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const links = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Case Study", href: "#case-study" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-[var(--font-display)] font-bold text-xl sm:text-2xl mb-2">
              {profile.name}
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              {profile.title}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
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
        </div>

        <p className="text-center text-xs text-[var(--text-muted)] font-mono pt-8 border-t border-[var(--border)]">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}