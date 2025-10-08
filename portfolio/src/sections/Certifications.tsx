import { motion } from "framer-motion";
import { profile } from "../data/profile";

export const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <div className="glass-panel">
        <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">Certifications</p>
        <h2 className="mt-3 text-3xl font-bold text-white">Credibility in machine learning & engineering</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {profile.certifications.map((cert) => (
            <motion.div
              key={cert.title}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
              <p className="text-sm text-white/70">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
