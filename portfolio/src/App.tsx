import { useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Certifications } from "./sections/Certifications";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";
import { FloatingNav } from "./components/FloatingNav";
import { NeuralBackground } from "./components/NeuralBackground";
import { AiChatbot } from "./components/AiChatbot";
import { ResumeBuilder } from "./components/ResumeBuilder";
import { useTheme } from "./context/ThemeContext";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" }
];

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (id) {
            const navLink = document.querySelector(`a[href="#${id}"]`);
            if (navLink) {
              if (entry.isIntersecting) {
                navLink.classList.add("text-charan-accent");
              } else {
                navLink.classList.remove("text-charan-accent");
              }
            }
          }
        });
      },
      {
        threshold: 0.35
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const containerClass = useMemo(
    () =>
      `relative min-h-screen overflow-x-hidden transition-colors duration-500 ${
        theme === "dark" ? "bg-charan-dark text-white" : "bg-charan-light text-charan-dark"
      }`,
    [theme]
  );

  return (
    <div className={containerClass}>
      <NeuralBackground />
      <FloatingNav sections={sections} />
      <AnimatePresence mode="wait">
        <motion.main
          key={theme}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10"
        >
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Achievements />
          <ResumeBuilder />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <AiChatbot />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
