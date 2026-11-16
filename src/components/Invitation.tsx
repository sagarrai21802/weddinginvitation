'use client';

import React from 'react';
import { RosePetals } from './ui/RosePetals';
import { GoldDivider } from './ui/GoldDivider';
import { ScrollReveal } from './ui/ScrollReveal';

export const Invitation: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#FAF6F0] overflow-hidden">
      {/* Soft Floating Rose Petals */}
      <RosePetals count={14} />

      {/* Main Invitation Card Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
        <ScrollReveal animation="zoom-in" duration={1.2}>
          <div className="relative bg-[#FFFDF9] border-2 border-gold/40 rounded-3xl p-8 sm:p-14 md:p-16 royal-shadow text-center">
            
            {/* Corner Filigree Accents */}
            <div className="absolute top-3 left-3 text-gold text-sm select-none">╔══</div>
            <div className="absolute top-3 right-3 text-gold text-sm select-none">══╗</div>
            <div className="absolute bottom-3 left-3 text-gold text-sm select-none">╚══</div>
            <div className="absolute bottom-3 right-3 text-gold text-sm select-none">══╝</div>

            {/* Inner Border */}
            <div className="absolute inset-3 border border-gold/20 rounded-2xl pointer-events-none" />

            {/* Top Tag */}
            <p className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-taupe mb-4">
              With the blessings of our families
            </p>

            {/* Main Greeting */}
            <h3 className="font-script text-2xl sm:text-3xl md:text-4xl text-sage mb-2">
              You are cordially invited to the
            </h3>

            {/* Main Title */}
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold gold-gradient-text tracking-tight my-4">
              Walima Ceremony
            </h2>

            <p className="font-body text-sm sm:text-base text-taupe tracking-widest uppercase mb-6">
              (Wedding Reception)
            </p>

            <GoldDivider variant="ornate" className="my-6 max-w-md mx-auto" />

            {/* The Heartfelt Invitation Paragraph */}
            <p className="font-script text-2xl sm:text-3xl text-sage-deep leading-relaxed max-w-xl mx-auto mb-4">
              “With warm hearts and love, we will be looking forward to your graceful presence.”
            </p>

            <p className="font-body text-base sm:text-lg text-charcoal/80 max-w-lg mx-auto leading-relaxed mt-4">
              Your prayers, love, and joyous company will make our special evening truly complete.
            </p>

            {/* Couple Emojis with soft gentle pulse */}
            <div className="mt-8 flex items-center justify-center gap-2 text-3xl animate-pulse-gently">
              <span>❤️</span>
              <span>🥹</span>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
