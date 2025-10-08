import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-16 items-center rounded-full border border-white/20 bg-white/10 px-1 py-1 text-white/70 shadow-inner-glow transition hover:border-white/40 hover:bg-white/20"
      aria-label="Toggle theme"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`absolute h-8 w-8 rounded-full bg-gradient-to-br from-charan-primary to-charan-secondary shadow-glow ${
          theme === "dark" ? "left-1" : "right-1"
        }`}
      />
      <span className="relative flex w-full items-center justify-between px-1 text-xs font-semibold uppercase tracking-widest">
        <Sun className="h-4 w-4" />
        <Moon className="h-4 w-4" />
      </span>
    </button>
  );
};
