"use client";

import { motion } from "framer-motion";

export function WavyLine() {
  return (
    <motion.div
      className="relative h-24 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-full h-16"
          style={{
            top: `${i * 4}px`,
            left: 0,
            background: `linear-gradient(90deg, transparent, var(--primary) ${i * 20}%, transparent)`,
            opacity: 0.1 * (4 - i),
          }}
          animate={{
            x: [-1000, 1000],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
} 
