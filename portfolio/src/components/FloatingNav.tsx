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
          <div className="relative overflow-hidden rounded-[2.75rem] border border-white/40 bg-gradient-to-br from-white/90 via-white/60 to-white/20 px-6 py-3 shadow-[0_22px_65px_rgba(10,9,35,0.22)] backdrop-blur-3xl dark:border-white/10 dark:bg-gradient-to-br dark:from-[#060820] dark:via-[#0c1538] dark:to-[#131b3f] dark:shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(92,71,255,0.22),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(79,209,255,0.2),transparent_55%)]" />
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div className="absolute inset-x-8 bottom-0 h-[1px] bg-gradient-to-r from-charan-primary/40 via-white/50 to-charan-secondary/40" />
            </div>

            <div className="relative grid items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
              <a
                href="#hero"
                className="group flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-[0.55rem] font-semibold uppercase tracking-[0.55em] text-charan-dark shadow-[0_14px_35px_rgba(18,16,52,0.22)] transition hover:border-charan-primary/60 hover:text-charan-primary hover:shadow-[0_26px_55px_rgba(84,77,232,0.35)] dark:border-white/20 dark:bg-white/10 dark:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-charan-primary to-charan-secondary text-[0.65rem] font-black text-white shadow-[0_18px_45px_rgba(86,78,230,0.45)] transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-105">
                  C
                </span>
                {profile.nickname}
              </a>

              <div className="hidden items-center justify-center lg:flex">
                <nav className="relative flex items-center gap-1 rounded-full border border-white/60 bg-white/20 px-4 py-1.5 text-[0.5rem] font-semibold uppercase tracking-[0.42em] text-charan-dark/70 shadow-inner shadow-white/40 dark:border-white/20 dark:bg-white/5 dark:text-white/65">
                  <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(100,92,255,0.18),rgba(44,211,255,0.12))]" />
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent" />
                  <ul className="flex items-center gap-1.5">
                    {sections.map(({ id, label }) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="group relative block overflow-hidden rounded-full px-3 py-1 transition"
                        >
                          <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-gradient-to-r from-charan-primary/35 via-charan-accent/25 to-charan-secondary/40 transition-transform duration-300 ease-out group-hover:scale-x-100 dark:from-charan-primary/55 dark:via-charan-accent/45 dark:to-charan-secondary/55" />
                          <span className="relative text-[0.5rem] tracking-[0.42em] text-charan-dark/70 transition-colors duration-300 group-hover:text-charan-dark dark:text-white/70 dark:group-hover:text-white">
                            {label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="hidden items-center gap-3 lg:flex">
                <div className="relative overflow-hidden rounded-full border border-white/60 bg-white/30 p-1.5 shadow-[0_10px_28px_rgba(15,15,55,0.22)] transition hover:border-charan-primary/50 dark:border-white/20 dark:bg-white/10">
                  <div className="pointer-events-none absolute -inset-2 bg-[radial-gradient(circle_at_20%_20%,rgba(92,71,255,0.28),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(94,211,247,0.25),transparent_55%)] opacity-70" />
                  <div className="relative">
                    <ThemeToggle />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 lg:hidden">
                <div className="relative overflow-hidden rounded-full border border-white/70 bg-white/40 p-1.5 shadow-[0_12px_32px_rgba(16,14,48,0.22)] dark:border-white/20 dark:bg-white/10">
                  <ThemeToggle />
                </div>
                <button
                  onClick={() => setOpen(true)}
                  className="relative flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-[0.55rem] font-semibold uppercase tracking-[0.55em] text-charan-dark transition hover:border-charan-primary/50 hover:text-charan-primary dark:border-white/20 dark:bg-white/10 dark:text-white"
                >
                  Menu
                  <Menu className="h-4 w-4" />
                </button>
              </div>
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
