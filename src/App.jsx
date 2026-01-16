import { useRef } from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import SkillsTabs from "./components/SkillsTabs";
import ProjectsFilter from "./components/ProjectsFilter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EducationPage from "./pages/EducationPage";
import ProjectstPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="scroll-smooth">
      <Navbar
        refs={{
          heroRef,
          aboutRef,
          educationRef,
          skillsRef,
          projectsRef,
          contactRef,
        }}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section
                ref={heroRef}
                className="min-h-screen flex justify-center items-center"
              >
                <Hero contactRef={contactRef} />
              </section>
              <section ref={aboutRef} className="min-h-screen">
                <About />
              </section>

              <section ref={educationRef} className="min-h-screen">
                <Education />
              </section>

              <section ref={skillsRef} className="min-h-screen">
                <SkillsTabs />
              </section>

              <section ref={projectsRef} className="min-h-screen">
                <ProjectsFilter />
              </section>

              <section ref={contactRef} className="min-h-screen">
                <Contact ref={contactRef} />
              </section>
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectstPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
