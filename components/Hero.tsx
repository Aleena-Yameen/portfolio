"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
<section className="min-h-screen flex items-center justify-center pt-32 bg-[#050816] text-white relative overflow-hidden">
      <div className="absolute left-0 top-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-20 w-[500px] h-[500px] bg-pink-500/10 blur-[150px]" />

      <div className="text-center px-6 relative z-10">

        {/* <p className="text-cyan-400 tracking-[0.3em] mb-4">
          DEVELOPER COMMAND CENTER
        </p> */}

        <div className="relative z-10 text-center">

  <p className="text-cyan-400 tracking-[0.3em] mb-4">
    FRONTEND DEVELOPER
  </p>

  <h1 className="text-4xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
    ALEENA
  </h1>

  <h2 className="text-2xl md:text-6xl font-bold mt-2">
    YAMEEN
  </h2>

  <div className="text-xl md:text-2xl text-gray-300 mt-8 h-12">
    <TypeAnimation
      sequence={[
        "Building Modern Web Experiences",
        2000,
        "React & Next.js Developer",
        2000,
        "Turning Ideas Into Products",
        2000,
        "Creating Interactive Interfaces",
        2000,
      ]}
      speed={50}
      repeat={Infinity}
    />
  </div>

  <p className="max-w-2xl mx-auto text-gray-400 mt-8 text-lg">
    Passionate frontend developer focused on creating
    responsive, accessible, and visually engaging web
    applications using modern JavaScript technologies.
  </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">

  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
    <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
    <p className="text-gray-400">Projects</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
    <h3 className="text-3xl font-bold text-cyan-400">React</h3>
    <p className="text-gray-400">Primary Stack</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
    <h3 className="text-3xl font-bold text-cyan-400">API</h3>
    <p className="text-gray-400">Integrations</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
    <h3 className="text-3xl font-bold text-cyan-400">Next.js</h3>
    <p className="text-gray-400">Learning</p>
  </div>

</div>
</div>

        {/* <div className="text-xl md:text-2xl text-gray-300 mt-8 h-12">
          <TypeAnimation
            sequence={[
              "React Developer",
              2000,
              "Node.js Developer",
              2000,
              "Creative Builder",
              2000,
              "Problem Solver",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div> */}

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <button className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold">
            View Projects
          </button>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl border border-cyan-400"
          >
            Download Resume
          </a>

          <button className="px-6 py-3 rounded-xl border border-pink-500">
            Contact Me
          </button>

        </div>
<div className="flex justify-center gap-4 mt-8 flex-wrap">

  <a
    href="https://github.com/Aleena-Yameen"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/aleena-y-400aa519b/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
  >
    LinkedIn
  </a>

  <a
    href="#contact"
    className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
  >
    Email Me
  </a>

</div>
      </div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
  <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
    <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
  </div>
</div>
    </section>
  );
}