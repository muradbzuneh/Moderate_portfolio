import { motion } from "framer-motion";

export const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-gradient-to-br from-cyan-500/15 to-blue-500/10 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -140, 90, 0],
          y: [0, 140, -80, 0],
          scale: [1, 1.3, 0.85, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] bg-gradient-to-br from-blue-500/15 to-teal-500/10 dark:from-blue-600/10 dark:to-teal-500/10 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 90, -110, 0],
          y: [0, 110, 90, 0],
          scale: [1, 1.15, 1.25, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 left-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-teal-500/15 to-cyan-500/10 dark:from-teal-500/10 dark:to-cyan-600/10 rounded-full blur-[100px]"
      />

      {/* Modern High-End Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
};
