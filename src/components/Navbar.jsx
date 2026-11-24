import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon, DownloadIcon } from "./Icons";

export const Navbar = ({ data }) => {
  const { personal } = data;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-bold text-lg tracking-tight text-white hover:text-blue-400 transition"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-emerald-500 to-amber-500 p-[2px] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-black text-sm tracking-tight flex items-center select-none">
                <span className="text-blue-400">D</span>
                <span className="text-emerald-400">G</span>
              </span>
            </div>
          </div>
          <span className="font-semibold text-slate-100 group-hover:text-blue-300 transition">
            Deep<span className="text-blue-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA: Resume & Contact */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full bg-slate-900 border border-slate-700/80 hover:border-slate-600 hover:bg-slate-800 text-slate-200 transition duration-200 active:scale-95 shadow-sm"
          >
            <DownloadIcon className="w-3.5 h-3.5 text-blue-400" />
            Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition duration-200 active:scale-95"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 space-y-3 backdrop-blur-xl animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200"
            >
              <DownloadIcon className="w-4 h-4 text-blue-400" />
              View Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
