"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import { useRef } from "react";
import { Header } from "@/components/header";
import { Card } from "@/components/card";
import { BasketballGame } from "@/components/basketball-game";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
          >
            Knowledge
            <meshNormalMaterial />
          </Text3D>
        </Center>
      </Float>
    </Canvas>
  );
}

export default function Specials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const features = [
    "Interactive 3D Visualizations",
    "Animated Learning Paths",
    "Dynamic Content",
    "Real-time Collaboration",
    "Virtual Workshops",
    "AI-Powered Recommendations",
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      <motion.div
        style={{ opacity, scale }}
        className="h-screen flex items-center justify-center"
      >
        <div className="h-[500px] w-full">
          <Scene />
        </div>
      </motion.div>

      <section className="container mx-auto px-4 py-16 grid gap-8">
        <Header 
          title="Special Features"
          description="Explore our cutting-edge features and technologies"
        />

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6">Interactive Basketball Game</h2>
          <BasketballGame />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature}
              title={feature}
              description={`Experience the future of learning with our cutting-edge ${feature.toLowerCase()} technology.`}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
    </div>
  );
} 
