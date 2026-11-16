'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in' | 'flip-up';
  delay?: number;
  duration?: number;
  className?: string;
  triggerOffset?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 1,
  className = '',
  triggerOffset = 'top 85%',
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const el = elRef.current;
    if (!el) return;

    let fromVars: gsap.TweenVars = { opacity: 0 };

    switch (animation) {
      case 'fade-up':
        fromVars = { opacity: 0, y: 45 };
        break;
      case 'fade-down':
        fromVars = { opacity: 0, y: -45 };
        break;
      case 'fade-in':
        fromVars = { opacity: 0 };
        break;
      case 'slide-left':
        fromVars = { opacity: 0, x: -60 };
        break;
      case 'slide-right':
        fromVars = { opacity: 0, x: 60 };
        break;
      case 'zoom-in':
        fromVars = { opacity: 0, scale: 0.85 };
        break;
      case 'flip-up':
        fromVars = { opacity: 0, rotationX: -45, transformPerspective: 800, y: 30 };
        break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: triggerOffset,
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [animation, delay, duration, triggerOffset]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};
