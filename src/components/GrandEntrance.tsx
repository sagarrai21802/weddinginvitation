'use client';

import React from 'react';
import { LanternSVG } from './ui/LanternSVG';
import { FloatingParticles } from './ui/FloatingParticles';
import { GoldDivider } from './ui/GoldDivider';
import { ScrollReveal } from './ui/ScrollReveal';

export const GrandEntrance: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between px-4 py-10 sm:py-16 overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F8F3EA] to-[#FAF6F0]">
      {/* Ambient Floating Gold Particles */}
      <FloatingParticles count={28} />

      {/* Swaying Lanterns on Left and Right Top Corners */}
      <div className="absolute top-0 left-2 sm:left-8 md:left-14 z-20">
        <LanternSVG side="left" size="md" />
      </div>
      <div className="absolute top-0 right-2 sm:right-8 md:right-14 z-20">
        <LanternSVG side="right" size="md" />
      </div>

      {/* Decorative Top Border Arabesque */}
      <div className="w-full max-w-4xl text-center pt-8 z-10">
        <ScrollReveal animation="fade-in" duration={1.2}>
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-taupe font-body">
            ✦ Cordial Wedding Invitation ✦
          </p>
        </ScrollReveal>
      </div>

      {/* Centerpiece Content */}
      <div className="my-auto text-center z-10 max-w-3xl px-4">
        {/* Arabic Bismillah Calligraphy */}
        <ScrollReveal animation="zoom-in" duration={1.4}>
          <div className="font-arabic text-3xl sm:text-5xl md:text-6xl text-gold-dark mb-4 drop-shadow-[0_2px_8px_rgba(197,165,90,0.3)]">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2} duration={1}>
          <p className="font-body italic text-sm sm:text-base text-taupe tracking-wider mb-6">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
        </ScrollReveal>

        <GoldDivider variant="ornate" className="my-6" />

        <ScrollReveal animation="fade-up" delay={0.4} duration={1}>
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-sage drop-shadow-sm mb-3">
            Welcome to the Walima Ceremony of
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.6} duration={1.2}>
          <div className="font-display text-4xl sm:text-6xl md:text-7xl font-bold gold-gradient-text tracking-wide mt-2">
            Dr. Aman & Dr. Yushra
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.8} duration={1}>
          <p className="font-body text-base sm:text-lg text-charcoal/80 tracking-widest mt-4 uppercase">
            26 December 2026 • Indore
          </p>
        </ScrollReveal>
      </div>

      {/* Scroll Down Prompt */}
      <div className="z-10 pb-4 text-center">
        <ScrollReveal animation="fade-in" delay={1} duration={1}>
          <div className="flex flex-col items-center gap-2 cursor-pointer opacity-75 hover:opacity-100 transition-opacity">
            <span className="font-body text-xs sm:text-sm tracking-[0.25em] text-taupe uppercase">
              Scroll to unveil
            </span>
            <div className="w-5 h-8 rounded-full border border-gold/70 flex items-start justify-center p-1">
              <span className="w-1 h-2 rounded-full bg-gold animate-bounce-slow" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
