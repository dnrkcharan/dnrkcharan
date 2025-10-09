import { motion } from "framer-motion";
import { profile } from "../data/profile";

export const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">Work Experience</p>
        <h2 className="mt-3 text-4xl font-bold text-charan-dark dark:text-white">Roles & responsibilities</h2>
        <p className="mt-3 text-charan-dark/70 dark:text-white/70">
          Snapshot of end-to-end engineering ownership across Golden Hills Capital and Cogoport.
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
            className="relative overflow-hidden rounded-3xl border border-charan-dark/10 bg-white/80 p-8 shadow-[0_24px_60px_rgba(5,1,10,0.1)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-charan-dark/10 bg-white/80 dark:border-white/10 dark:bg-white/10">
                      <img src={experience.logo} alt={experience.logoAlt} className="h-12 w-12 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-charan-dark dark:text-white">{experience.role}</h3>
                      <a
                        href={experience.site}
                        className="text-sm text-charan-accent transition hover:text-charan-primary/80 dark:hover:text-white"
                      >
                        {experience.company}
                      </a>
                    </div>
                  </div>
                  <div className="text-right text-xs uppercase tracking-[0.35em] text-charan-dark/50 dark:text-white/50">
                    <p>{experience.period}</p>
                    <p className="mt-1 text-charan-dark/60 dark:text-white/60">{experience.location}</p>
                  </div>
                </div>
                <ul className="grid gap-3 text-sm text-charan-dark/75 dark:text-white/80">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-charan-accent" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-charan-dark/10 bg-white/70 p-6 dark:border-white/10 dark:bg-charan-dark/50">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-charan-dark/50 dark:text-white/50">Stack Arsenal</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-charan-dark/70 dark:text-white/80">
                    {experience.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-charan-dark/10 bg-white/80 px-4 py-2 dark:border-white/10 dark:bg-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-charan-dark/10 bg-white/80 px-4 py-3 text-xs text-charan-dark/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                  <span className="uppercase tracking-[0.3em] text-charan-accent">Key highlight</span>
                  <p className="mt-2 text-sm text-charan-dark/70 dark:text-white/75">{experience.achievements[0]}</p>
                </div>
              </div>
            </div>
            <motion.div
              className="pointer-events-none absolute -right-24 -top-24 hidden h-48 w-48 rounded-full bg-charan-primary/20 blur-3xl dark:block"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
};
