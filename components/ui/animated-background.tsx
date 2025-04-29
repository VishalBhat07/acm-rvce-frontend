'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
  density?: number;
  speed?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  disableAnimation?: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
}

const generateParticles = (
  count: number, 
  minSize: number, 
  maxSize: number
): Particle[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: minSize + Math.random() * (maxSize - minSize),
    opacity: 0.1 + Math.random() * 0.4,
    delay: Math.random() * 5
  }));
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className,
  density = 15,
  speed = 20,
  color = "var(--primary)",
  minSize = 2,
  maxSize = 20,
  disableAnimation = false
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Call once to initialize
    handleResize();

    // Calculate particle count based on screen size and density
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / (15000 / density));
    setParticles(generateParticles(particleCount, minSize, maxSize));

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [density, minSize, maxSize]);

  return (
    <div className={cn("fixed inset-0 pointer-events-none overflow-hidden", className)}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            opacity: particle.opacity,
          }}
          initial={{ scale: 0 }}
          animate={{ 
            scale: disableAnimation ? 1 : [1, 1.2, 1],
            x: disableAnimation ? 0 : [0, Math.random() * 50 - 25, 0],
            y: disableAnimation ? 0 : [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: speed,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground; 