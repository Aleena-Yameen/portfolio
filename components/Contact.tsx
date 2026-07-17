"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl font-bold mb-10">
        Contact Terminal
      </h2>

      <div className="bg-black border border-cyan-500/30 rounded-3xl overflow-hidden">

        <div className="border-b border-cyan-500/20 px-6 py-4">
          <p className="text-cyan-400 font-mono">
            terminal@aleena:~$
          </p>
        </div>

        <div className="p-6">

          <p className="text-gray-400 mb-6 font-mono">
            &gt; Send me a message and I'll get back to you.
          </p>

<form
  action="https://formspree.io/f/mjgnyaaa"
  method="POST"
  className="space-y-4"
>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 bg-[#111827] border border-white/10 rounded-xl outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 bg-[#111827] border border-white/10 rounded-xl outline-none focus:border-cyan-400"
            />

            <textarea
              placeholder="Your Message"
              name="message"
              rows={6}
              className="w-full p-4 bg-[#111827] border border-white/10 rounded-xl outline-none focus:border-cyan-400 resize-none"
            />

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
            >
              Transmit Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}