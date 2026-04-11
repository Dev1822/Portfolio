import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import Reveal from "./animations/Reveal";
import logo from "../assets/profile/logo.png";

const navItems = [
  { name: "About", href: "/about-dev-patel" },
  { name: "Skills", href: "/developer-skills" },
  { name: "Projects", href: "/software-projects" },
  { name: "Hackathons", href: "/hackathon-experience" },
  { name: "Certifications", href: "/tech-certifications" },
  { name: "GitHub", href: "/github-contributions" },
  { name: "LeetCode", href: "/leetcode-profile" },
  { name: "Contact", href: "/contact-dev-patel" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 backdrop-blur-lg bg-black/40 border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Reveal y={0} delay={0.1}>
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 group-hover:border-accent/50 transition-colors">
              <img src={logo} alt="Dev Patel Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-syne text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
              Dev<span className="text-accent">.</span>
            </span>
          </Link>
        </Reveal>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item, idx) => (
            <Reveal key={item.name} y={0} delay={0.1 + idx * 0.05}>
              <Link
                to={item.href}
                className="font-sans text-sm text-secondary hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}

          {/* Theme Toggle */}
          <Reveal y={0} delay={0.5}>
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="ml-2 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
            >
              <motion.div
                key={isDark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? (
                  <Sun size={18} className="text-amber-400" />
                ) : (
                  <Moon size={18} className="text-indigo-500" />
                )}
              </motion.div>
            </button>
          </Reveal>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
          >
            <motion.div
              key={isDark ? "mob-moon" : "mob-sun"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-indigo-500" />
              )}
            </motion.div>
          </button>

          <button
            className="text-secondary hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 backdrop-blur-xl bg-black/90 border-b border-white/10 p-6 flex flex-col space-y-3 lg:hidden max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-sm text-secondary hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}