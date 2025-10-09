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
        className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center px-4"
      >
        <div className="pointer-events-auto w-full max-w-6xl rounded-full border border-charan-dark/10 bg-white/80 px-5 py-3 shadow-[0_18px_45px_rgba(5,1,10,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-charan-dark/80 dark:shadow-[0_18px_45px_rgba(5,1,10,0.45)]">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#hero"
              className="flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-charan-primary/20 to-charan-secondary/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-charan-dark transition hover:border-charan-primary/40 dark:text-white"
            >
              {profile.nickname}
            </a>
            <div className="hidden items-center gap-5 lg:flex">
              <ul className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-charan-dark/70 transition dark:text-white/70">
                {sections.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="rounded-full px-3 py-1 transition hover:text-charan-accent dark:hover:text-charan-accent"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <ThemeToggle />
            </div>
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 rounded-full border border-charan-dark/10 bg-white/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-charan-dark transition hover:border-charan-primary/40 hover:text-charan-primary dark:border-white/15 dark:bg-white/10 dark:text-white"
              >
                Menu
                <Menu className="h-4 w-4" />
              </button>
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
