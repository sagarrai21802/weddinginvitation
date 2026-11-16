'use client';

import React, { useCallback } from 'react';
import confetti from 'canvas-confetti';
import { GoldDivider } from './ui/GoldDivider';
import { ScrollReveal } from './ui/ScrollReveal';

export const Closing: React.FC = () => {
  const triggerConfetti = useCallback(() => {
    // Elegant gold and sage confetti celebration
    const goldSageColors = ['#C5A55A', '#D4AF37', '#7A8B6F', '#FAF6F0', '#E8D5A3'];

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: goldSageColors,
      disableForReducedMotion: true,
    });
  }, []);

  return (
    <footer className="relative min-h-[85vh] flex flex-col items-center justify-between px-4 py-16 bg-gradient-to-b from-[#FAF6F0] via-[#F6ECE6] to-[#FAF6F0] text-center overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      <div className="my-auto z-10 max-w-2xl px-4">
        
        {/* Animated Heart Icon */}
        <ScrollReveal animation="zoom-in" duration={1}>
          <div className="text-5xl sm:text-6xl mb-4 animate-pulse-gently select-none">
            ❤️🥹
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2} duration={1}>
          <h2 className="font-script text-3xl sm:text-5xl text-sage-deep mb-3 leading-relaxed">
            We will be looking forward to your graceful presence
          </h2>
        </ScrollReveal>

        <GoldDivider variant="ornate" className="my-6 max-w-xs mx-auto" />

        <ScrollReveal animation="fade-up" delay={0.4} duration={1}>
          <p className="font-display text-2xl sm:text-3xl text-gold-dark font-medium mb-1">
            Dr. Aman & Dr. Yushra
          </p>
          <p className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-taupe">
            26th December 2026 • Indore
          </p>
        </ScrollReveal>

        {/* Interactive Shower Blessings Button */}
        <ScrollReveal animation="fade-up" delay={0.6} duration={1}>
          <div className="mt-8">
            <button
              onClick={triggerConfetti}
              type="button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-dark text-charcoal font-body font-bold text-sm tracking-widest uppercase shadow-[0_6px_25px_rgba(197,165,90,0.35)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>✨ Shower Blessings ✨</span>
            </button>
            <p className="text-xs text-taupe/80 font-body mt-2 italic">
              Tap to celebrate with golden flowers
            </p>
          </div>
        </ScrollReveal>

      </div>

      {/* Footer Bottom Bar */}
      <div className="z-10 pt-8 border-t border-gold/20 w-full max-w-3xl">
        <p className="font-body text-xs text-taupe tracking-wider">
          Crafted with love & prayers for Aman & Yushra • Walima Ceremony 2026
        </p>
      </div>

    </footer>
  );
};
