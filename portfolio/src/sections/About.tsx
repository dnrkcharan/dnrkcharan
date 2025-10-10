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
      <div className="relative overflow-hidden rounded-[3rem] border border-white/20 bg-gradient-to-br from-[#121530] via-[#191f47] to-[#232c68] p-8 text-white shadow-[0_32px_90px_rgba(8,8,28,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-charan-dark/70 dark:to-charan-dark/90 lg:p-12">
        <div className="absolute -top-24 right-8 hidden h-48 w-48 rounded-full bg-charan-secondary/25 blur-3xl dark:block" />
        <div className="absolute -bottom-28 left-6 hidden h-64 w-64 rounded-full bg-charan-primary/20 blur-3xl dark:block" />

        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">About</p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">Professional snapshot</h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/80">{profile.aboutIntro}</p>
            <p className="max-w-2xl text-base leading-relaxed text-white/70">{profile.aboutStory}</p>

            <motion.p
              className="rounded-3xl border border-charan-accent/30 bg-charan-accent/10 p-5 text-lg font-semibold text-white"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {typedText}
            </motion.p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {profile.aboutStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/20 bg-gradient-to-br from-[#1a1f4a] via-[#233064] to-[#2e3f88] p-5 text-center text-white shadow-[0_14px_36px_rgba(8,8,32,0.45)] dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-charan-accent">{stat.label}</p>
                  <p className="mt-3 text-sm text-white/75">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-white/20 bg-gradient-to-br from-[#1b2050] via-[#243067] to-[#2d418c] p-6 text-white shadow-[0_16px_40px_rgba(8,8,32,0.45)] dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Currently learning</p>
              <p className="mt-3 text-base text-white/80">{profile.aboutCuriosity}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-2"
          >
            <div className="rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-[#181d45] via-[#22306a] to-[#2d4191] p-5 text-white shadow-[0_18px_48px_rgba(8,8,32,0.45)] dark:border-white/10 dark:bg-white/5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {profile.aboutHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="h-full rounded-3xl border border-white/20 bg-gradient-to-br from-[#1c2352] via-[#27346f] to-[#31448f] p-4 text-white shadow-[0_12px_32px_rgba(8,8,32,0.4)] dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="text-[11px] uppercase tracking-[0.35em] text-charan-accent">{`Focus ${index + 1}`}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{highlight.title}</h3>
                    <p className="mt-2 text-sm text-white/75">{highlight.description}</p>
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
