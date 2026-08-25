"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#050816]
        text-white
        flex
        items-center
        justify-center
        px-5
        sm:px-6
        pt-28
        pb-16
      "
    >
      {/* Background glow */}
      <div
        className="
          absolute
          -left-40
          top-20
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
          sm:blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-10
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          rounded-full
          bg-pink-500/10
          blur-[120px]
          sm:blur-[150px]
          pointer-events-none
        "
      />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-5xl
          mx-auto
          text-center
        "
      >
        {/* Label */}
        <p
          className="
            text-cyan-400
            text-xs
            sm:text-sm
            tracking-[0.2em]
            sm:tracking-[0.3em]
            font-medium
            mb-4
          "
        >
          FRONTEND DEVELOPER
        </p>

        {/* Name */}
        <h1
          className="
            text-5xl
            sm:text-6xl
            md:text-8xl
            font-black
            leading-none
            bg-gradient-to-r
            from-cyan-400
            via-violet-500
            to-pink-500
            bg-clip-text
            text-transparent
          "
        >
          ALEENA
        </h1>

        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            font-bold
            mt-2
            leading-tight
          "
        >
          YAMEEN
        </h2>

        {/* Typing animation */}
        <div
          className="
            mt-7
            sm:mt-8
            h-14
            sm:h-12
            flex
            items-center
            justify-center
            text-lg
            sm:text-xl
            md:text-2xl
            text-gray-300
          "
        >
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

        {/* Description */}
        <p
          className="
            max-w-2xl
            mx-auto
            mt-6
            sm:mt-8
            text-sm
            sm:text-base
            md:text-lg
            leading-7
            sm:leading-8
            text-gray-400
          "
        >
          Passionate frontend developer focused on creating
          responsive, accessible, and visually engaging web
          applications using modern JavaScript technologies.
        </p>

        {/* Stats */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-3
            sm:gap-4
            mt-9
            sm:mt-12
            max-w-4xl
            mx-auto
          "
        >
          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-4
              sm:p-5
              hover:border-cyan-400/40
              transition
            "
          >
            <h3
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-cyan-400
              "
            >
              5+
            </h3>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Projects
            </p>
          </div>

          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-4
              sm:p-5
              hover:border-cyan-400/40
              transition
            "
          >
            <h3
              className="
                text-xl
                sm:text-3xl
                font-bold
                text-cyan-400
              "
            >
              React
            </h3>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Primary Stack
            </p>
          </div>

          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-4
              sm:p-5
              hover:border-cyan-400/40
              transition
            "
          >
            <h3
              className="
                text-xl
                sm:text-3xl
                font-bold
                text-cyan-400
              "
            >
              API
            </h3>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Integrations
            </p>
          </div>

          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-4
              sm:p-5
              hover:border-cyan-400/40
              transition
            "
          >
            <h3
              className="
                text-xl
                sm:text-3xl
                font-bold
                text-cyan-400
              "
            >
              Next.js
            </h3>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Learning
            </p>
          </div>
        </div>

        {/* Main buttons */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            flex-wrap
            justify-center
            gap-3
            sm:gap-4
            mt-9
            sm:mt-10
          "
        >
          <a
            href="#projects"
            className="
              inline-flex
              items-center
              justify-center
              min-h-[48px]
              px-6
              py-3
              rounded-xl
              bg-cyan-500
              text-black
              font-bold
              hover:bg-cyan-400
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
            "
          >
            View Projects
            <span className="ml-2">→</span>
          </a>

          <a
            href="/resume.pdf"
            download
            className="
              inline-flex
              items-center
              justify-center
              min-h-[48px]
              px-6
              py-3
              rounded-xl
              border
              border-cyan-400
              text-white
              hover:bg-cyan-400/10
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
            "
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              min-h-[48px]
              px-6
              py-3
              rounded-xl
              border
              border-pink-500
              text-white
              hover:bg-pink-500/10
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
            "
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div
          className="
            flex
            justify-center
            gap-3
            sm:gap-4
            mt-7
            sm:mt-8
            flex-wrap
          "
        >
          <a
            href="https://github.com/Aleena-Yameen"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              min-h-[44px]
              px-5
              py-2.5
              rounded-xl
              bg-white/5
              border
              border-white/10
              text-sm
              hover:border-cyan-400
              hover:text-cyan-400
              transition
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aleena-y-400aa519b/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              min-h-[44px]
              px-5
              py-2.5
              rounded-xl
              bg-white/5
              border
              border-white/10
              text-sm
              hover:border-cyan-400
              hover:text-cyan-400
              transition
            "
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              min-h-[44px]
              px-5
              py-2.5
              rounded-xl
              bg-white/5
              border
              border-white/10
              text-sm
              hover:border-cyan-400
              hover:text-cyan-400
              transition
            "
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}