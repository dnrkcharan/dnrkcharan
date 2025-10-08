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
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.3em] text-charan-accent">
                  <span>{experience.period}</span>
                  <span className="h-1 w-1 rounded-full bg-charan-accent" />
                  <span>{experience.location}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{experience.role}</h3>
                <p className="text-white/70">{experience.company}</p>
                <ul className="mt-5 grid gap-3 text-sm text-white/80">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-charan-accent" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-charan-dark/50 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Stack</p>
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
