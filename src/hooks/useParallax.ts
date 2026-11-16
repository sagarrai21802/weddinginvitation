'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useParallax<T extends HTMLElement = HTMLElement>(speed = 0.4) {
  const sectionRef = useRef<T>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const element = elementRef.current;
    if (!section || !element) return;

    const ctx = gsap.context(() => {
      // Parallax scroll effect
      gsap.fromTo(
        element,
        {
          yPercent: -15 * speed,
        },
        {
          yPercent: 15 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [speed]);

  return { sectionRef, elementRef };
}
