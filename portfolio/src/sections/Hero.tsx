import { motion } from "framer-motion";
import { ArrowDownToLine, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";

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
    <section id="hero" className="section-container pt-28 lg:pt-32">
      <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 via-charan-dark/70 to-charan-dark/90 p-8 lg:p-12">
        <div className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-charan-primary/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-16 h-96 w-96 rounded-full bg-charan-secondary/20 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.4em] text-white/70"
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
              Dasari Narada Rama Krishna <span className="text-charan-accent">Charan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="max-w-2xl text-lg text-white/75 sm:text-xl"
            >
              {profile.summary}
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
              <div className="flex flex-wrap items-center gap-3">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm transition hover:border-white/40 hover:bg-white/20"
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
              className="flex flex-wrap items-center gap-3"
            >
              {profile.focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70"
                >
                  {area}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={profile.resumeUrl}
                className="group flex items-center gap-3 rounded-full bg-gradient-to-br from-charan-primary to-charan-secondary px-6 py-3 text-base font-semibold text-white shadow-[0_15px_45px_rgba(67,56,202,0.35)]"
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
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-charan-primary/30 via-charan-secondary/20 to-charan-accent/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[3rem] border border-white/15 bg-charan-dark/60 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 via-charan-dark/60 to-charan-dark/80 p-4">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-charan-dark/70">
                    <img src={profile.photo.src} alt={profile.photo.alt} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
                  <span>{profile.photo.caption}</span>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-charan-accent">AI-native</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 left-1/2 w-full max-w-xs -translate-x-1/2 space-y-3 rounded-3xl border border-white/10 bg-white/10 p-4 text-xs text-white/70 backdrop-blur">
              {profile.heroHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={heroVariants}
                  className="rounded-2xl bg-charan-dark/70 p-3 shadow-inner-glow"
                >
                  <p className="text-[10px] uppercase tracking-[0.4em] text-charan-accent">{highlight.accent}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{highlight.title}</p>
                  <p className="text-xs text-white/70">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
