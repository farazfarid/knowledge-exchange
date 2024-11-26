"use client";

import { motion } from "framer-motion";
import { WavyLine } from "@/components/animations/wavy-line";
import { ConfettiButton } from "@/components/animations/confetti-button";
import { Button } from "@/components/button";

export default function AnimatedHero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto space-y-6 z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          Knowledge Exchange
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Discover, Learn, and Share Knowledge
        </p>
        <div className="flex gap-4 justify-center pt-8">
          <ConfettiButton>Get Started</ConfettiButton>
          <Button variant="outline">Learn More</Button>
        </div>
      </motion.div>
      <WavyLine />
    </section>
  );
} 
