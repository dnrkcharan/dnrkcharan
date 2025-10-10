import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "../data/profile";

type SectionLink = {
  id: string;
  label: string;
};

type Props = {
  sections: SectionLink[];
};

export const FloatingNav: React.FC<Props> = ({ sections }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pb-3"
      >
        <div className="pointer-events-auto w-full max-w-6xl">
          <div className="relative overflow-hidden rounded-[32px] border border-charan-dark/15 bg-white/80 shadow-[0_25px_60px_rgba(12,8,32,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-charan-dark/85 dark:shadow-[0_35px_80px_rgba(5,1,10,0.55)]">
            <div className="pointer-events-none absolute inset-0 opacity-90">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-charan-primary/12 via-transparent to-transparent dark:from-charan-primary/25" />
              <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-charan-secondary/12 via-transparent to-transparent dark:from-charan-secondary/25" />
              <div className="absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-charan-primary/20 blur-3xl dark:bg-charan-primary/40" />
              <div className="absolute -right-24 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-charan-secondary/20 blur-3xl dark:bg-charan-secondary/35" />
            </div>
            <div className="relative flex items-center justify-between gap-4 px-6 py-3">
              <a
                href="#hero"
                className="group flex items-center gap-3 rounded-full border border-transparent bg-white/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.55em] text-charan-dark shadow-[0_10px_25px_rgba(12,8,32,0.08)] transition hover:border-charan-primary/50 hover:text-charan-primary hover:shadow-[0_18px_45px_rgba(67,56,202,0.28)] dark:bg-white/10 dark:text-white/90"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-charan-primary to-charan-secondary text-[11px] font-black text-white shadow-[0_10px_25px_rgba(67,56,202,0.35)] transition group-hover:scale-105 group-hover:shadow-[0_18px_45px_rgba(67,56,202,0.45)]">
                  C
                </span>
                {profile.nickname}
              </a>
              <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
                <div className="flex items-center gap-1 rounded-full border border-charan-dark/10 bg-white/50 px-3 py-1.5 shadow-inner shadow-white/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                  <ul className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.45em] text-charan-dark/60 dark:text-white/60">
                    {sections.map(({ id, label }) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="group relative block overflow-hidden rounded-full px-3 py-1 transition"
                        >
                          <span className="absolute inset-0 scale-x-0 rounded-full bg-gradient-to-r from-charan-primary/20 to-charan-secondary/25 transition-transform duration-300 ease-out group-hover:scale-x-100 dark:from-charan-primary/40 dark:to-charan-secondary/45 origin-left" />
                          <span className="relative transition-colors duration-300 group-hover:text-charan-dark dark:group-hover:text-white">
                            {label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-full border border-charan-dark/10 bg-white/60 p-1 shadow-inner shadow-white/40 transition hover:border-charan-primary/40 dark:border-white/10 dark:bg-white/10 dark:shadow-none">
                  <ThemeToggle />
                </div>
              </div>
              <div className="flex items-center gap-3 lg:hidden">
                <div className="rounded-full border border-charan-dark/10 bg-white/50 p-1 shadow-inner shadow-white/60 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                  <ThemeToggle />
                </div>
                <button
                  onClick={() => setOpen(true)}
                  className="flex items-center gap-2 rounded-full border border-charan-dark/10 bg-white/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.45em] text-charan-dark transition hover:border-charan-primary/40 hover:text-charan-primary dark:border-white/15 dark:bg-white/10 dark:text-white"
                >
                  Menu
                  <Menu className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <Transition show={open} as={Fragment}>
        <Dialog onClose={setOpen} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-charan-dark/10 bg-white/90 p-6 shadow-2xl shadow-charan-dark/10 backdrop-blur-xl dark:border-white/10 dark:bg-charan-dark/90">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 rounded-full border border-charan-dark/10 bg-white/70 p-2 text-charan-dark/70 transition hover:border-charan-primary/40 hover:text-charan-primary dark:border-white/10 dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
                <nav className="mt-6 space-y-3 text-center text-base font-semibold text-charan-dark dark:text-white">
                  {sections.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-full border border-charan-dark/10 bg-white/70 px-4 py-3 text-[12px] uppercase tracking-[0.35em] transition hover:border-charan-primary/40 hover:text-charan-primary dark:border-white/10 dark:bg-white/10 dark:hover:text-white"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="flex justify-center pt-2">
                    <ThemeToggle />
                  </div>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
