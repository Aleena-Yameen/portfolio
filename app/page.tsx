import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import About from "@/components/About";
import Skills from "@/components/Skills";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Loader />
      <Skills />
      <GithubStats />
      <Contact />
    </main>
  );
}