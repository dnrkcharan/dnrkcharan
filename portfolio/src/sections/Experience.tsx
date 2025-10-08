import { motion } from "framer-motion";
import { profile } from "../data/profile";

export const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">Experience</p>
        <h2 className="mt-3 text-4xl font-bold text-white">
          Building intelligence across finance, logistics & automation
        </h2>
        <p className="mt-3 text-white/70">
          Leading engineering squads, shipping ML-driven features and unlocking operational leverage.
        </p>
      </div>
      <div className="space-y-8">
        {profile.experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl"
          >
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                      <img src={experience.logo} alt={experience.logoAlt} className="h-12 w-12 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
                      <a
                        href={experience.site}
                        className="text-sm text-charan-accent transition hover:text-white"
                      >
                        {experience.company}
                      </a>
                    </div>
                  </div>
                  <div className="text-right text-xs uppercase tracking-[0.35em] text-white/50">
                    <p>{experience.period}</p>
                    <p className="mt-1 text-white/60">{experience.location}</p>
                  </div>
                </div>
                <ul className="grid gap-3 text-sm text-white/80">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-charan-accent" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-charan-dark/50 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">Stack Arsenal</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/80">
                    {experience.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/10 px-4 py-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
                  <span className="uppercase tracking-[0.3em] text-charan-accent">Impact snapshot</span>
                  <p className="mt-2 text-sm text-white/75">
                    {experience.achievements[0]}
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-charan-primary/20 blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
};
