import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

export const Skills = () => {
  const categories = useMemo(() => profile.skills.map((skill) => skill.category), []);
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  return (
    <section id="skills" className="section-container">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">Skills</p>
        <h2 className="mt-3 text-4xl font-bold text-charan-dark dark:text-white">Multidisciplinary stack for AI-first products</h2>
      </div>
      <div className="glass-panel">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "border-charan-accent/70 bg-charan-accent/20 text-charan-dark dark:text-white"
                  : "border-charan-dark/15 bg-white/70 text-charan-dark/70 hover:text-charan-primary dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {profile.skills
            .find((skill) => skill.category === selectedCategory)
            ?.items.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-charan-dark/10 bg-white/75 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-charan-dark dark:text-white">{item.name}</span>
                  <span className="text-sm text-charan-accent">{item.level}%</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-charan-dark/10 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-charan-primary to-charan-accent"
                  />
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
