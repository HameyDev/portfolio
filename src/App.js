import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import SkillsTabs from "./components/SkillsTabs";
import ProjectsFilter from "./components/ProjectsFilter";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <section id="hero" className="min-h-screen w-6xl mx-auto flex justify-center items-center">
        <Hero />
      </section>
      <section id="about" className="min-h-screen pt-5">
        <About />
      </section>
      <section id="education" className="pt-10">
        <Education />
      </section>
      <section id="skills" className="pt-10">
        <SkillsTabs />
      </section>
      <section id="projects" className="pt-6">
        <ProjectsFilter />
      </section>
      <section id="contact" className="pt-10">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
