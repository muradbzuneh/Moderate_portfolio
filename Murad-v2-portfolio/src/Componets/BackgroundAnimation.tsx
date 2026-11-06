import { motion } from "framer-motion";

export const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl"
      />

      {/* Gradient Blob 2 */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -70, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl"
      />

      {/* Gradient Blob 3 */}
      <motion.div
        animate={{
          x: [0, 80, -90, 0],
          y: [0, 90, 100, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 left-1/3 w-[28rem] h-[28rem] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-3xl"
      />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
};
