'use client';

import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export const RosePetals: React.FC<{ count?: number; className?: string }> = ({
  count = 10,
  className = '',
}) => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = ['#EED3C6', '#F7E7DE', '#D5DFCE', '#E3CDB8'];
    const generated: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 95,
      size: Math.random() * 10 + 14,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 8,
      color: colors[i % colors.length],
    }));
    setPetals(generated);
  }, [count]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden z-10 ${className}`}
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <svg
          key={petal.id}
          viewBox="0 0 30 30"
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-20px',
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animation: `petalDrift ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <path
            d="M15 2 C8 6, 2 15, 7 24 C12 30, 22 28, 26 20 C30 12, 22 4, 15 2 Z"
            fill={petal.color}
            opacity="0.75"
          />
        </svg>
      ))}
    </div>
  );
};
