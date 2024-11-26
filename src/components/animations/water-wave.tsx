"use client";

import { motion, HTMLMotionProps } from "framer-motion";

export function WaterWave(props: HTMLMotionProps<"div">) {
  return (
    <motion.div className="relative h-32 overflow-hidden" {...props}>
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: `linear-gradient(180deg, transparent 50%, var(--primary) ${85 + i * 2}%)`,
            opacity: 0.1,
          }}
          animate={{
            y: [-20, 0, -20],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </motion.div>
  );
} 
