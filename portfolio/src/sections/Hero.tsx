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
    <section id="hero" className="section-container pt-28 lg:pt-36">
      <div className="relative overflow-hidden rounded-[3rem] border border-[#c1c8ff]/50 bg-gradient-to-br from-[#eef1ff] via-[#c7cffd] to-[#96a4ff] p-8 shadow-[0_34px_95px_rgba(18,16,70,0.2)] backdrop-blur-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-charan-dark/70 dark:to-charan-dark/90 lg:p-12">
        <div className="absolute -top-32 -left-16 hidden h-72 w-72 rounded-full bg-charan-primary/30 blur-3xl dark:block" />
        <div className="absolute -bottom-40 -right-16 hidden h-96 w-96 rounded-full bg-charan-secondary/20 blur-3xl dark:block" />

        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-charan-dark/10 bg-white/70 px-5 py-2 text-xs uppercase tracking-[0.4em] text-charan-dark/70 dark:border-white/15 dark:bg-white/10 dark:text-white/70"
            >
              Software Engineer
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-charan-accent" />
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl font-black leading-tight text-charan-dark sm:text-5xl lg:text-6xl dark:text-white"
            >
              Dasari Narada Rama Krishna <span className="text-charan-accent">Charan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="max-w-2xl text-lg text-charan-dark/70 sm:text-xl dark:text-white/75"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 text-charan-dark/60 dark:text-white/70"
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
                    className="flex items-center gap-2 rounded-full border border-charan-dark/10 bg-white/70 px-4 py-2 text-sm transition hover:border-charan-primary/40 hover:text-charan-primary dark:border-white/15 dark:bg-white/10 dark:text-white/80 dark:hover:border-white/40 dark:hover:text-white"
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
                  className="rounded-full border border-charan-dark/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-charan-dark/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
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
                className="flex items-center gap-3 rounded-full border border-charan-dark/10 bg-white/70 px-6 py-3 text-base font-semibold text-charan-dark/70 transition hover:border-charan-primary/40 hover:text-charan-primary dark:border-white/20 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/40 dark:hover:text-white"
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
            <div className="relative w-full max-w-[420px] space-y-6">
              <div className="relative overflow-hidden rounded-[3rem] border border-white/60 bg-gradient-to-br from-[#e7ebff] via-[#c1c9ff] to-[#8f9cff] p-4 shadow-[0_28px_70px_rgba(18,16,70,0.18)] dark:border-white/15 dark:bg-charan-dark/60 dark:shadow-[0_25px_60px_rgba(5,1,10,0.45)]">
                <div className="rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-[#f0f2ff] via-[#cdd4ff] to-[#9eaaff] p-4 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-charan-dark/60 dark:to-charan-dark/80">
                  <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-[#f2f4ff] via-[#cfd6ff] to-[#a4b0ff] dark:border-white/10 dark:bg-charan-dark/70">
                    <img src={profile.photo.src} alt={profile.photo.alt} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/60 bg-gradient-to-r from-[#f0f2ff] via-[#cdd3ff] to-[#a4afff] px-4 py-3 text-xs text-charan-dark/70 shadow-[0_12px_32px_rgba(18,16,70,0.14)] dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                  <span>{profile.photo.caption}</span>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-charan-accent">AI-native</span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {profile.heroHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={heroVariants}
                    className="rounded-2xl border border-white/60 bg-gradient-to-br from-[#eef1ff] via-[#c6ceff] to-[#9da9ff] p-4 text-left shadow-[0_16px_38px_rgba(18,16,70,0.14)] dark:border-white/10 dark:bg-charan-dark/60 dark:text-white"
                  >
                    <p className="text-[10px] uppercase tracking-[0.4em] text-charan-accent">{highlight.accent}</p>
                    <p className="mt-2 text-sm font-semibold text-charan-dark dark:text-white">{highlight.title}</p>
                    <p className="mt-1 text-xs text-charan-dark/70 dark:text-white/70">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
