import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { FloatingNav } from "./components/FloatingNav";
import { NeuralBackground } from "./components/NeuralBackground";
import { useTheme } from "./context/ThemeContext";

const ProjectsSection = lazy(() =>
  import("./sections/Projects").then(({ Projects }) => ({ default: Projects }))
);
const SkillsSection = lazy(() =>
  import("./sections/Skills").then(({ Skills }) => ({ default: Skills }))
);
const EducationSection = lazy(() =>
  import("./sections/Education").then(({ Education }) => ({ default: Education }))
);
const CertificationsSection = lazy(() =>
  import("./sections/Certifications").then(({ Certifications }) => ({ default: Certifications }))
);
const AchievementsSection = lazy(() =>
  import("./sections/Achievements").then(({ Achievements }) => ({ default: Achievements }))
);
const ResumeBuilderSection = lazy(() =>
  import("./components/ResumeBuilder").then(({ ResumeBuilder }) => ({ default: ResumeBuilder }))
);
const ContactSection = lazy(() =>
  import("./sections/Contact").then(({ Contact }) => ({ default: Contact }))
);
const AiChatbotWidget = lazy(() =>
  import("./components/AiChatbot").then(({ AiChatbot }) => ({ default: AiChatbot }))
);

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
  const [deferSections, setDeferSections] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

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

  useEffect(() => {
    const activate = () => {
      setDeferSections(true);
      setShowChatbot(true);
    };

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        const idleId = (window as typeof window & {
          requestIdleCallback: (callback: IdleRequestCallback) => number;
          cancelIdleCallback?: (handle: number) => void;
        }).requestIdleCallback(() => activate());

        return () => {
          (window as typeof window & {
            cancelIdleCallback?: (handle: number) => void;
          }).cancelIdleCallback?.(idleId);
        };
      }

      const timeoutId = window.setTimeout(activate, 150);
      return () => window.clearTimeout(timeoutId);
    }

    return () => undefined;
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
          {deferSections && (
            <Suspense fallback={null}>
              <ProjectsSection />
              <SkillsSection />
              <EducationSection />
              <CertificationsSection />
              <AchievementsSection />
              <ResumeBuilderSection />
              <ContactSection />
            </Suspense>
          )}
        </motion.main>
      </AnimatePresence>
      {showChatbot && (
        <Suspense fallback={null}>
          <AiChatbotWidget />
        </Suspense>
      )}
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
