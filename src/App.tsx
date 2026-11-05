import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import ExperienceEducation from "@/components/ExperienceEducation";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <ExperienceEducation />
        <Contact />
      </main>
    </>
  );
}
