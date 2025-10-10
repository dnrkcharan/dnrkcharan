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
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pb-6"
      >
        <div className="pointer-events-auto mx-auto max-w-6xl">
          <div className="relative flex items-center gap-4 overflow-hidden rounded-[2.75rem] border border-charan-dark/10 bg-white/80 px-5 py-3 shadow-[0_28px_80px_rgba(8,4,20,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 dark:shadow-[0_40px_90px_rgba(2,0,12,0.65)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-32 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-charan-primary/25 blur-3xl opacity-60 dark:bg-charan-primary/40" />
              <div className="absolute -right-28 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-charan-secondary/25 blur-3xl opacity-60 dark:bg-charan-secondary/45" />
              <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-charan-accent/50 to-transparent" />
              <div className="absolute inset-x-8 bottom-0 h-[1px] bg-gradient-to-r from-charan-secondary/40 via-white/40 to-charan-primary/40 opacity-70" />
            </div>

            <a
              href="#hero"
              className="group relative z-10 flex items-center gap-3 rounded-full border border-charan-dark/5 bg-white/70 px-3 py-2 text-[0.55rem] font-semibold uppercase tracking-[0.6em] text-charan-dark shadow-[0_15px_35px_rgba(14,10,45,0.18)] transition hover:border-charan-primary/60 hover:text-charan-primary hover:shadow-[0_25px_55px_rgba(88,78,228,0.32)] dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-charan-primary to-charan-secondary text-[0.65rem] font-black text-white shadow-[0_18px_45px_rgba(86,78,230,0.45)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                C
              </span>
              {profile.nickname}
            </a>

            <div className="hidden flex-1 items-center justify-between gap-4 lg:flex">
              <div className="relative flex flex-1 items-center justify-center">
                <div className="relative flex items-center gap-2 overflow-hidden rounded-full border border-white/60 bg-white/40 px-4 py-2 text-[0.55rem] font-semibold uppercase tracking-[0.38em] text-charan-dark/70 shadow-inner shadow-white/40 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charan-primary/15 via-transparent to-charan-secondary/15" />
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-charan-primary/60 to-transparent opacity-70" />
                  <ul className="flex items-center gap-1.5">
                    {sections.map(({ id, label }) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="group relative block overflow-hidden rounded-full px-3 py-1 transition"
                        >
                          <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-gradient-to-r from-charan-primary/25 via-charan-accent/20 to-charan-secondary/30 transition-transform duration-300 ease-out group-hover:scale-x-100 dark:from-charan-primary/45 dark:via-charan-accent/35 dark:to-charan-secondary/45" />
                          <span className="relative text-[0.55rem] tracking-[0.38em] text-charan-dark/70 transition-colors duration-300 group-hover:text-charan-dark dark:text-white/70 dark:group-hover:text-white">
                            {label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative flex items-center gap-3">
                <div className="relative overflow-hidden rounded-full border border-charan-dark/10 bg-white/70 p-1.5 shadow-[0_14px_34px_rgba(10,5,24,0.15)] transition hover:border-charan-primary/50 dark:border-white/10 dark:bg-white/10">
                  <div className="pointer-events-none absolute -inset-3 bg-[radial-gradient(circle_at_20%_20%,rgba(92,71,255,0.28),transparent),radial-gradient(circle_at_80%_30%,rgba(94,211,247,0.25),transparent)] opacity-70" />
                  <div className="relative">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3 lg:hidden">
              <div className="relative overflow-hidden rounded-full border border-charan-dark/15 bg-white/70 p-1.5 shadow-[0_12px_30px_rgba(12,6,32,0.15)] dark:border-white/10 dark:bg-white/10">
                <ThemeToggle />
              </div>
              <button
                onClick={() => setOpen(true)}
                className="relative flex items-center gap-2 rounded-full border border-charan-dark/15 bg-white/80 px-3 py-2 text-[0.55rem] font-semibold uppercase tracking-[0.5em] text-charan-dark transition hover:border-charan-primary/50 hover:text-charan-primary dark:border-white/15 dark:bg-white/10 dark:text-white"
              >
                Menu
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

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
