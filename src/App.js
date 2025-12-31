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
      <section id="about" className="min-h-screen ">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <SkillsTabs />
      </section>
      <section id="projects">
        <ProjectsFilter />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
