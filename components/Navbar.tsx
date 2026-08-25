"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled || menuOpen
            ? "backdrop-blur-xl bg-black/70 border-b border-cyan-500/20"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="font-black text-lg sm:text-xl tracking-wider relative z-50"
        >
          ALEENA<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                relative py-2
                text-gray-300
                hover:text-cyan-400
                transition-colors duration-300
                group
              "
            >
              {item.name}

              <span
                className="
                  absolute left-0 bottom-0
                  w-0 h-[2px]
                  bg-cyan-400
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            md:hidden
            relative z-50
            w-11 h-11
            flex flex-col
            items-center justify-center
            gap-1.5
            rounded-xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            hover:border-cyan-400/50
            transition
          "
        >
          <span
            className={`
              block w-5 h-[2px] bg-white
              transition-all duration-300
              ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}
            `}
          />

          <span
            className={`
              block w-5 h-[2px] bg-white
              transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}
            `}
          />

          <span
            className={`
              block w-5 h-[2px] bg-white
              transition-all duration-300
              ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}
            `}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          absolute top-full left-0 w-full
          border-b border-cyan-500/20
          bg-[#050816]/95
          backdrop-blur-2xl
          transition-all duration-300
          overflow-hidden
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="px-5 py-6 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="
                flex items-center
                px-4 py-4
                rounded-xl
                text-gray-300
                hover:text-cyan-400
                hover:bg-cyan-400/5
                transition-all duration-300
              "
              style={{
                transitionDelay: menuOpen
                  ? `${index * 50}ms`
                  : "0ms",
              }}
            >
              <span className="text-cyan-400 mr-3">
                0{index + 1}
              </span>

              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}