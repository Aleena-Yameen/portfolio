"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
const filters = [
  "All",
  "Frontend",
  "API",
  "Utility",
  "Security",
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (project) => project.category === active
        );

  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold mb-10">
        Project Laboratory
      </h2>

      <div className="flex flex-wrap gap-4 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`px-4 py-2 rounded-lg border ${
              active === filter
                ? "bg-cyan-500 text-black"
                : "border-cyan-500"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-5">
              {project.description}
            </p>
<div className="mb-4">
  <span className="text-sm text-cyan-400">
    {project.category}
  </span>
</div>
            <a
              href={project.github}
              target="_blank"
              className="text-cyan-400"
            >
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}