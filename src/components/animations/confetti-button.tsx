"use client";

import { Button } from "@/components/button";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import type { HTMLMotionProps } from "framer-motion";

interface ConfettiPiece {
  id: number;
  angle: number;
  velocity: number;
  color: string;
  scale: number;
  shape: 'circle' | 'square' | 'triangle' | 'star';
}

interface ConfettiButtonProps extends HTMLMotionProps<"button"> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function ConfettiButton({ children, ...props }: ConfettiButtonProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);

  const createConfetti = () => {
    if (!buttonRef.current) return;

    const colors = [
      '#FF1493', // Deep Pink
      '#00CED1', // Dark Turquoise
      '#FFD700', // Gold
      '#FF4500', // Orange Red
      '#9370DB', // Medium Purple
      '#32CD32', // Lime Green
    ];
    const shapes = ['circle', 'square', 'triangle', 'star'] as const;

    // Create confetti pieces in a circular pattern
    const newConfetti = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      angle: (i * 360) / 50, // Distribute pieces in a circle
      velocity: 2 + Math.random() * 3, // Random velocity
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: 0.5 + Math.random() * 0.5,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));

    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 1500);
  };

  const getShapePath = (shape: 'circle' | 'square' | 'triangle' | 'star') => {
    switch (shape) {
      case 'circle':
        return 'rounded-full';
      case 'square':
        return 'rounded-none rotate-45';
      case 'triangle':
        return 'clip-path-triangle';
      case 'star':
        return 'clip-path-star';
    }
  };

  return (
    <div ref={buttonRef} className="relative inline-block">
      <Button
        onClick={(e) => {
          createConfetti();
          props.onClick?.(e);
        }}
        className="relative z-10 px-8 py-3 text-lg font-medium transition-all"
        {...props}
      >
        {children}
      </Button>
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className={`absolute w-3 h-3 ${getShapePath(piece.shape)}`}
          style={{
            backgroundColor: piece.color,
            scale: piece.scale,
            transformOrigin: 'center',
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          animate={{
            x: Math.cos(piece.angle * (Math.PI / 180)) * (100 * piece.velocity),
            y: Math.sin(piece.angle * (Math.PI / 180)) * (100 * piece.velocity),
            opacity: 0,
            rotate: piece.angle + 360 * 2,
          }}
          transition={{
            duration: 1 + Math.random() * 0.5,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        />
      ))}
      <style jsx global>{`
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-path-star {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
      `}</style>
    </div>
  );
} 
