export default function GithubStats() {
  return (
    <section
      id="github"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl font-bold mb-10">
        GitHub Presence
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-cyan-400 text-sm mb-2">
            PROFILE
          </h3>

          <p className="text-2xl font-bold">
            Aleena-Yameen
          </p>

          <a
            href="https://github.com/Aleena-Yameen"
            target="_blank"
            className="text-cyan-400 mt-4 inline-block"
          >
            Visit GitHub →
          </a>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-cyan-400 text-sm mb-2">
            FEATURED PROJECTS
          </h3>

          <p className="text-4xl font-bold">
            5
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-cyan-400 text-sm mb-2">
            FOCUS
          </h3>

          <p className="text-xl">
            React • JavaScript • APIs
          </p>
        </div>

      </div>
    </section>
  );
}