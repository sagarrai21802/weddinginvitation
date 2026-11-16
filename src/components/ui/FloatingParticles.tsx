'use client';

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const FloatingParticles: React.FC<{ count?: number; className?: string }> = ({
  count = 24,
  className = '',
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particle positions only on client to prevent hydration mismatch
    const generated: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(generated);
  }, [count]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden z-10 ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold-shimmer filter drop-shadow-[0_0_6px_rgba(212,175,55,0.8)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `floatParticle ${p.duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
