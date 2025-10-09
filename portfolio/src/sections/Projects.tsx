import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

export const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">Projects</p>
          <h2 className="mt-3 text-4xl font-bold text-charan-dark dark:text-white">Selected work</h2>
          <p className="mt-3 max-w-2xl text-charan-dark/70 dark:text-white/70">
            Representative projects spanning finance analytics, automation, and energy research.
          </p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {profile.projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-charan-dark/10 bg-white/80 p-8 shadow-[0_20px_60px_rgba(5,1,10,0.1)] transition dark:border-white/10 dark:bg-gradient-to-br dark:from-charan-dark/80 dark:via-charan-dark/60 dark:to-charan-dark/40"
          >
            <div className="flex items-center justify-between text-sm text-charan-dark/60 dark:text-white/60">
              <span>{project.year}</span>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-charan-dark/10 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-charan-dark/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-charan-dark dark:text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-charan-dark/70 dark:text-white/70">{project.description}</p>
            <p className="mt-4 text-sm font-semibold text-charan-accent">{project.impact}</p>
            {project.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 rounded-full border border-charan-dark/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-charan-dark/70 transition hover:text-charan-primary group-hover:text-charan-primary dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
            <motion.div
              className="pointer-events-none absolute -right-16 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full bg-charan-secondary/20 blur-3xl dark:block"
              animate={{ x: [0, 20, -20, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
};
