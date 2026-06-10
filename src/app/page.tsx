import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Connect from "@/components/Connect";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SideQuests from "@/components/SideQuests";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Connect />
        <Achievements />
        <Experience />
        <Projects />
        <SideQuests />
        <Footer />
      </main>
    </>
  );
}
