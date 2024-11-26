"use client";

import { motion } from "framer-motion";

export function DecorativeLine() {
  return (
    <motion.div
      className="relative h-0.5 w-full overflow-hidden my-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{
          x: [-500, 500],
          scaleX: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
} 
