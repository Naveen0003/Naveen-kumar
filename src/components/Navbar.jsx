import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import image11 from "../assets/images/image11.png";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Case Study", href: "#case-study" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between py-2">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="relative flex items-center group"
        >
          <img
            src={image11}
            alt="Naveen Kumar Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center glass hover:scale-105 transition-transform"
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            onClick={(e) => handleClick(e, "#contact")}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full gradient-bg text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Hire Me
          </button>
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center glass"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-[var(--border)]">
          <ul className="flex flex-col py-3 px-6 gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block py-2.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={(e) => handleClick(e, "#contact")}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full gradient-bg text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}