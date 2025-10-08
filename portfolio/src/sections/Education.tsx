import { motion } from "framer-motion";
import { profile } from "../data/profile";

export const Education = () => {
  return (
    <section id="education" className="section-container">
      <div className="glass-panel">
        <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">Education</p>
        <h2 className="mt-3 text-3xl font-bold text-white">Continuous learning across engineering & AI</h2>
        <div className="mt-8 space-y-6">
          {profile.education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  {edu.logo && (
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                      <img src={edu.logo} alt={edu.logoAlt} className="h-10 w-10 object-contain" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
                    <p className="text-sm text-white/70">{edu.program}</p>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">{edu.period}</span>
              </div>
              <p className="mt-3 text-sm text-white/80">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
