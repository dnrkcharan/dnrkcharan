import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { profile } from "../data/profile";

export const About = () => {
  const typedText = useTypewriter(
    "Focused on ML automation, analytics platforms, and reliable engineering.",
    35
  );

  return (
    <section id="about" className="section-container">
      <div className="relative overflow-hidden rounded-[3rem] border border-charan-dark/10 bg-white/80 p-8 shadow-[0_28px_70px_rgba(5,1,10,0.1)] backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-charan-dark/70 dark:to-charan-dark/90 lg:p-12">
        <div className="absolute -top-24 right-8 hidden h-48 w-48 rounded-full bg-charan-secondary/25 blur-3xl dark:block" />
        <div className="absolute -bottom-28 left-6 hidden h-64 w-64 rounded-full bg-charan-primary/20 blur-3xl dark:block" />

        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">About</p>
            <h2 className="text-3xl font-bold text-charan-dark lg:text-4xl dark:text-white">Professional snapshot</h2>
            <p className="max-w-2xl text-base leading-relaxed text-charan-dark/75 dark:text-white/80">{profile.aboutIntro}</p>
            <p className="max-w-2xl text-base leading-relaxed text-charan-dark/70 dark:text-white/70">{profile.aboutStory}</p>

            <motion.p
              className="rounded-3xl border border-charan-accent/30 bg-charan-accent/10 p-5 text-lg font-semibold text-charan-dark dark:text-charan-accent"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {typedText}
            </motion.p>

            <div className="flex flex-col gap-4 md:flex-row">
              {profile.aboutHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex-1 rounded-3xl border border-charan-dark/10 bg-white/75 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-[11px] uppercase tracking-[0.35em] text-charan-accent">{`Focus ${index + 1}`}</p>
                  <h3 className="mt-2 text-lg font-semibold text-charan-dark dark:text-white">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-charan-dark/70 dark:text-white/70">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {profile.aboutStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-charan-dark/10 bg-white/75 p-5 text-center shadow-[0_12px_28px_rgba(5,1,10,0.08)] dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-3xl font-bold text-charan-dark dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-charan-accent">{stat.label}</p>
                  <p className="mt-3 text-sm text-charan-dark/60 dark:text-white/70">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-charan-dark/10 bg-white/75 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-charan-dark/50 dark:text-white/50">Currently learning</p>
              <p className="mt-3 text-base text-charan-dark/70 dark:text-white/80">{profile.aboutCuriosity}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
