import { motion } from "framer-motion";
import { profile } from "../data/profile";

export const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <div className="glass-panel">
        <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">Achievements</p>
        <h2 className="mt-3 text-3xl font-bold text-white">Wins along the journey</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {profile.achievements.map((achievement) => (
            <motion.div
              key={achievement}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/80"
            >
              {achievement}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
