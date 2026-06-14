import Ambient from "@/components/Ambient";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SideQuests from "@/components/SideQuests";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Ambient />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Projects />
        <SideQuests />
        <Footer />
      </main>
      <Chatbot />
    </>
  );
}
