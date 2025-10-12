import { motion } from "framer-motion";
import { profile } from "../data/profile";

export const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 via-charan-dark/70 to-charan-dark/90 p-8 lg:p-12">
        <div className="absolute -top-24 left-10 h-48 w-48 rounded-full bg-charan-accent/20 blur-3xl" />
        <div className="absolute -bottom-28 right-8 h-64 w-64 rounded-full bg-charan-primary/20 blur-3xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.4em] text-charan-accent">Certifications</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Credibility in machine learning & engineering</h2>
          <p className="mt-3 max-w-3xl text-white/70">
            Click a card to open the certificate. Imagery is AI-generated for a vibrant, futuristic vibe — replace the links with
            your official credentials when you're ready.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {profile.certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`${cert.title} artwork`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charan-dark/80 via-charan-dark/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
                    {`0${index + 1}`}
                  </span>
                </div>
                <div className="space-y-3 p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                    <p className="text-sm text-white/60">{cert.issuer}</p>
                  </div>
                  <p className="text-sm text-white/75">{cert.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-charan-accent transition group-hover:translate-x-1 group-hover:text-white">
                    View certificate
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
