"use client";

import { motion } from "framer-motion";

interface HeaderProps {
  title: string;
  description?: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {description && (
        <p className="text-xl text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
} 
