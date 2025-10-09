import { motion } from "framer-motion";

export const NeuralBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 neural-background opacity-30 dark:opacity-60"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-charan-primary/20 blur-[160px] dark:bg-charan-primary/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-200px] left-[-120px] h-[460px] w-[460px] rounded-full bg-charan-secondary/15 blur-[160px] dark:bg-charan-secondary/25"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.55, 0.3]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};
