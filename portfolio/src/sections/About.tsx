import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { profile } from "../data/profile";

export const About = () => {
  const typedText = useTypewriter(
    "From backend logic to machine learning magic — I bring AI craftsmanship to finance.",
    35
  );

  return (
    <section id="about" className="section-container">
      <div className="glass-panel grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">About</p>
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Turning complex financial data into intelligent, human-centered experiences.
          </h2>
          <p className="text-base leading-relaxed text-white/80">{profile.summary}</p>
          <motion.p
            className="text-lg font-semibold text-charan-accent"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {typedText}
          </motion.p>
          <div className="grid gap-6 sm:grid-cols-3">
            {["AI Platforms", "Automation", "Generative AI"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center text-sm font-semibold text-white/80"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {profile.experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-charan-dark/60 to-charan-dark/80 p-6 shadow-xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-charan-accent">{experience.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{experience.role}</h3>
              <p className="text-sm text-white/70">{experience.company} • {experience.location}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {experience.achievements.slice(0, 2).map((achievement) => (
                  <li key={achievement}>• {achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
