import { motion } from "framer-motion";
import { ArrowDownToLine, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";

const heroHighlights = [
  {
    title: "3+ years",
    description: "Engineering AI-first financial platforms",
    accent: "Experience"
  },
  {
    title: "Finance × AI",
    description: "Blending quant insights, ML pipelines and UX",
    accent: "Focus"
  },
  {
    title: "Impact",
    description: "Accelerating IPO analytics, crypto research & ops automation",
    accent: "Value"
  }
];

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, duration: 0.6, ease: "easeOut" }
  })
};

export const Hero = () => {
  return (
    <section id="hero" className="section-container pt-32 lg:pt-36">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/60"
          >
            AI-first Engineer
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-charan-accent" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Dasari Narada Rama Krishna Charan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-lg text-white/75 sm:text-xl"
          >
            "Engineer by profession, learner by passion — turning code into intelligence." I architect intelligent financial systems,
            automation pipelines and AI-native products that deliver measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 text-white/70"
          >
            <span className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-charan-accent" />
              {profile.location}
            </span>
            <div className="flex items-center gap-3">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm transition hover:border-white/40 hover:bg-white/20"
                >
                  {social.label === "LinkedIn" && <Linkedin className="h-4 w-4" />}
                  {social.label === "GitHub" && <Github className="h-4 w-4" />}
                  {social.label === "Email" && <Mail className="h-4 w-4" />}
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={profile.resumeUrl}
              className="group flex items-center gap-3 rounded-full bg-gradient-to-br from-charan-primary to-charan-secondary px-6 py-3 text-base font-semibold text-white shadow-glow"
            >
              <ArrowDownToLine className="h-5 w-5 transition group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Explore Projects
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="group relative mx-auto flex h-80 w-80 items-center justify-center rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 shadow-2xl shadow-charan-primary/20 backdrop-blur xl:h-96 xl:w-96">
            <div className="absolute inset-4 animate-pulse-glow rounded-[2.5rem] border border-white/10" />
            <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-charan-primary/40 via-charan-secondary/30 to-charan-accent/20 p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_45%)]" />
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex h-full w-full items-center justify-center"
              >
                <span className="text-center text-2xl font-semibold leading-snug text-white">
                  Charan
                  <br />
                  builds
                  <br />
                  intelligent
                  <br />
                  systems.
                </span>
              </motion.div>
            </div>
          </div>

          <div className="absolute -bottom-14 right-0 flex w-56 flex-col gap-3 rounded-3xl border border-white/10 bg-white/10 p-4 text-xs text-white/70 backdrop-blur">
            {heroHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                className="rounded-2xl bg-charan-dark/60 p-3 shadow-inner-glow"
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-charan-accent">{highlight.accent}</p>
                <p className="mt-1 text-sm font-semibold text-white">{highlight.title}</p>
                <p className="text-xs text-white/70">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
