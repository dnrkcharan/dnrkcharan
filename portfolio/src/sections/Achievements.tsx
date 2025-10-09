import { motion } from "framer-motion";
import { profile } from "../data/profile";

export const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <div className="relative overflow-hidden rounded-[3rem] border border-charan-dark/10 bg-white/80 p-8 shadow-[0_28px_70px_rgba(5,1,10,0.1)] backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-charan-dark/70 dark:to-charan-dark/90 lg:p-12">
        <div className="absolute -top-24 left-0 hidden h-48 w-48 rounded-full bg-charan-secondary/20 blur-3xl dark:block" />
        <div className="absolute -bottom-24 right-0 hidden h-60 w-60 rounded-full bg-charan-accent/20 blur-3xl dark:block" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">Achievements</p>
          <h2 className="mt-3 text-3xl font-bold text-charan-dark dark:text-white">Key achievements</h2>
          <p className="mt-3 max-w-2xl text-charan-dark/70 dark:text-white/70">
            Highlights from competitive programming and academic recognition.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {profile.achievements.map((achievement, index) => (
              <motion.a
                key={achievement.title}
                href={achievement.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-3xl border border-charan-dark/10 bg-white/80 shadow-[0_20px_60px_rgba(5,1,10,0.1)] transition dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={achievement.image} alt={`${achievement.title} artwork`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charan-dark/80 via-charan-dark/30 to-transparent" />
                  <span className="absolute right-5 top-5 text-xs uppercase tracking-[0.3em] text-charan-dark/70 dark:text-white/80">
                    {`Achievement 0${index + 1}`}
                  </span>
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="text-lg font-semibold text-charan-dark dark:text-white">{achievement.title}</h3>
                  <p className="text-sm text-charan-dark/70 dark:text-white/75">{achievement.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-charan-accent transition group-hover:translate-x-1 group-hover:text-charan-primary dark:group-hover:text-white">
                    View details
                    <span className="h-1 w-6 bg-gradient-to-r from-charan-accent to-charan-secondary" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
