"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { WavyLine } from "@/components/animations/wavy-line";
import { DecorativeLine } from "@/components/animations/decorative-line";
import { WaterWave } from "@/components/animations/water-wave";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header 
        title="About Knowledge Exchange"
        description="Learn more about our mission and what we offer"
      />
      
      <main className="container mx-auto px-4">
        <WaterWave />
        
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              We believe in making knowledge accessible to everyone. Our platform
              serves as a bridge between learners and experts, creating a
              community where knowledge flows freely.
            </p>
            <DecorativeLine />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Interactive learning experiences</li>
              <li>Expert-curated content</li>
              <li>Community-driven knowledge sharing</li>
              <li>Modern learning tools and resources</li>
            </ul>
            <DecorativeLine />
          </motion.div>
        </div>

        <WavyLine />
      </main>
    </div>
  );
} 
