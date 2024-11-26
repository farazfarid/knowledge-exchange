"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface HeaderProps extends HTMLMotionProps<"div"> {
  title: string;
  description?: string;
}

export function Header({ title, description, ...props }: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
      {...props}
    >
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {description && (
        <p className="text-xl text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
} 
