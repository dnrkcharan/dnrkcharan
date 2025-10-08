import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Layers } from "lucide-react";
import toast from "react-hot-toast";
import { profile, type Profile } from "../data/profile";

type SectionKey = "experience" | "projects" | "skills" | "education" | "certifications" | "achievements";

const sections: { key: SectionKey; label: string; profileKey: keyof Profile }[] = [
  { key: "experience", label: "Experience", profileKey: "experiences" },
  { key: "projects", label: "Projects", profileKey: "projects" },
  { key: "skills", label: "Skills", profileKey: "skills" },
  { key: "education", label: "Education", profileKey: "education" },
  { key: "certifications", label: "Certifications", profileKey: "certifications" },
  { key: "achievements", label: "Achievements", profileKey: "achievements" }
];

export const ResumeBuilder = () => {
  const [selectedSections, setSelectedSections] = useState<SectionKey[]>([
    "experience",
    "projects",
    "skills"
  ]);

  const toggleSection = (key: SectionKey) => {
    setSelectedSections((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  const downloadResumeJson = () => {
    const resume = {
      name: profile.name,
      nickname: profile.nickname,
      location: profile.location,
      tagline: profile.tagline,
      sections: selectedSections.reduce<Record<string, unknown>>((acc, key) => {
        const profileKey = sections.find((section) => section.key === key)?.profileKey;
        if (profileKey) {
          acc[key] = profile[profileKey];
        }
        return acc;
      }, {})
    };

    const blob = new Blob([JSON.stringify(resume, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `charan-resume-${selectedSections.length}-sections.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("AI-ready resume JSON downloaded");
  };

  return (
    <section id="resume" className="section-container">
      <div className="glass-panel relative overflow-hidden">
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-charan-accent/20 blur-3xl" aria-hidden />
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">AI-native Resume</p>
            <h2 className="mt-2 text-3xl font-bold text-white lg:text-4xl">
              Dynamic Resume Builder <span className="gradient-text">powered by structured data</span>
            </h2>
            <p className="mt-4 text-white/80">
              Export a JSON snapshot of Charan&apos;s journey tailored to the sections you need. Perfect for AI agents, recruiters and
              rapid LinkedIn updates.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {sections.map(({ key, label }) => {
                const active = selectedSections.includes(key);
                return (
                  <motion.button
                    key={key}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => toggleSection(key)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      active
                        ? "border-charan-accent/80 bg-charan-accent/20 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    <Layers className="mr-2 inline-block h-4 w-4" />
                    {label}
                  </motion.button>
                );
              })}
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={downloadResumeJson}
            className="group relative flex items-center gap-3 rounded-full bg-gradient-to-br from-charan-primary to-charan-secondary px-6 py-3 text-lg font-semibold text-white shadow-glow"
          >
            <Download className="h-5 w-5 transition group-hover:translate-y-0.5" />
            Download JSON Resume
          </motion.button>
        </div>
      </div>
    </section>
  );
};
