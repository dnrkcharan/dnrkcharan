import { motion } from "framer-motion";
import { profile } from "../data/profile";

export const Contact = () => {
  return (
    <footer id="contact" className="section-container pb-16">
      <div className="glass-panel relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -left-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-charan-accent/15 blur-3xl dark:bg-charan-accent/20"
          animate={{ x: [0, 30, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-charan-dark dark:text-white">Let&apos;s collaborate on intelligent systems</h2>
            <p className="mt-3 max-w-xl text-charan-dark/70 dark:text-white/70">
              Open to building AI-driven finance products, intelligent automation, and research-grade analytics. Let&apos;s connect.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-charan-dark/70 dark:text-white/80">
              <span className="rounded-full border border-charan-dark/15 bg-white/80 px-4 py-2 dark:border-white/10 dark:bg-white/10">
                Email: {profile.contact.email}
              </span>
              <span className="rounded-full border border-charan-dark/15 bg-white/80 px-4 py-2 dark:border-white/10 dark:bg-white/10">
                Phone: {profile.contact.phone}
              </span>
              <a
                href={profile.contact.github}
                className="rounded-full border border-charan-dark/15 bg-white/80 px-4 py-2 transition hover:border-charan-primary/40 hover:text-charan-primary dark:border-white/10 dark:bg-white/10 dark:hover:border-white/30 dark:hover:bg-white/20"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-charan-dark/10 bg-white/75 p-6 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-lg font-semibold text-charan-dark dark:text-white">Quick Links</h3>
            <div className="grid gap-3 text-sm text-charan-dark/70 dark:text-white/70">
              <a href="#experience" className="transition hover:text-charan-primary dark:hover:text-white">
                Experience & impact
              </a>
              <a href="#projects" className="transition hover:text-charan-primary dark:hover:text-white">
                Projects & case studies
              </a>
              <a href="#skills" className="transition hover:text-charan-primary dark:hover:text-white">
                Skills & stack
              </a>
              <a href="#resume" className="transition hover:text-charan-primary dark:hover:text-white">
                Download JSON Resume
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-charan-dark/40 dark:text-white/40">
          <span>© {new Date().getFullYear()} Dasari Narada Rama Krishna Charan</span>
          <span>Turning Code into Intelligence</span>
        </div>
      </div>
    </footer>
  );
};
