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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-charan-dark/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70 transition hover:text-white"
          >
            {profile.nickname}
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            <ul className="flex items-center gap-6 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="transition hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white transition hover:border-white/30 hover:bg-white/20 lg:hidden"
          >
            <span className="text-xs uppercase tracking-[0.35em]">Menu</span>
            <Menu className="h-5 w-5" />
          </button>
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
              <Dialog.Panel className="glass-panel neural-background relative w-full max-w-sm overflow-hidden">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 p-2 text-white/70 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
                <nav className="mt-6 space-y-4 text-center text-lg font-semibold">
                  {sections.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-full border border-transparent px-4 py-3 transition hover:border-white/20 hover:bg-white/10"
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
