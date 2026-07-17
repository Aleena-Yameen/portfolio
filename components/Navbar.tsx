"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50
      transition-all duration-300
      ${
        scrolled
          ? "backdrop-blur-xl bg-black/50 border-b border-cyan-500/20"
          : "bg-transparent"
      }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="font-black text-xl tracking-wider">
          ALEENA<span className="text-cyan-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm">

          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#skills">Skills</a>

          <a href="#contact">Contact</a>

        </div>

      </div>
    </nav>
  );
}