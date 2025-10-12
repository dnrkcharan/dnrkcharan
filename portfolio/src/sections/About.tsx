import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { profile } from "../data/profile";

export const About = () => {
  const typedText = useTypewriter(
    "Turning wild financial data into playful AI co-pilots for humans.",
    35
  );

  return (
    <section id="about" className="section-container">
      <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 via-charan-dark/70 to-charan-dark/90 p-8 lg:p-12">
        <div className="absolute -top-24 right-8 h-48 w-48 rounded-full bg-charan-secondary/20 blur-3xl" />
        <div className="absolute -bottom-28 left-6 h-64 w-64 rounded-full bg-charan-primary/20 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">About</p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">Inside Charan's AI playground</h2>
            <p className="text-base leading-relaxed text-white/80">{profile.aboutIntro}</p>
            <p className="text-base leading-relaxed text-white/70">{profile.aboutStory}</p>

            <motion.p
              className="rounded-3xl border border-charan-accent/20 bg-charan-accent/10 p-5 text-lg font-semibold text-charan-accent"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {typedText}
            </motion.p>

            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Curiosity fuel</p>
            <p className="text-base text-white/75">{profile.aboutCuriosity}</p>

            <div className="grid gap-4 sm:grid-cols-3">
              {profile.aboutStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center"
                >
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-charan-accent">{stat.label}</p>
                  <p className="mt-3 text-sm text-white/70">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {profile.aboutHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-charan-dark/60 to-charan-dark/80 p-6 shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-charan-accent">{`Mode ${index + 1}`}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{highlight.title}</h3>
                <p className="mt-3 text-sm text-white/75">{highlight.description}</p>
              </motion.div>
            ))}

            <div className="grid gap-4">
              {profile.experiences.map((experience, index) => (
                <motion.div
                  key={experience.company}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      <img
                        src={experience.logo}
                        alt={experience.logoAlt}
                        loading="lazy"
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{experience.period}</p>
                      <h4 className="text-lg font-semibold text-white">{experience.role}</h4>
                      <p className="text-sm text-white/70">{experience.company} • {experience.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-white/75">
                    {experience.achievements.slice(0, 2).map((achievement) => (
                      <li key={achievement} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-charan-accent" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
