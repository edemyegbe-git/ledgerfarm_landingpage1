import { motion } from "motion/react";

export const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[60%] h-[70%] w-[70%] rounded-full bg-[#0a2540]/5 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[60%] left-[10%] h-[60%] w-[60%] rounded-full bg-[#3b82f6]/5 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[10%] left-[20%] h-[50%] w-[50%] rounded-full bg-emerald-500/10 blur-[120px]"
      />
    </div>
  );
};
