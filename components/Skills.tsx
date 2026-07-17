const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Git",
  "GitHub",
  "REST APIs",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl font-bold mb-10">
        Skills Matrix
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="
              bg-white/5
              border
              border-cyan-500/20
              rounded-2xl
              p-5
              text-center
              hover:border-cyan-400
              hover:scale-105
              transition
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}