'use client';

import React from 'react';
import Image from 'next/image';
import { useParallax } from '@/hooks/useParallax';
import { GoldDivider } from './ui/GoldDivider';
import { ScrollReveal } from './ui/ScrollReveal';

export const TheCouple: React.FC = () => {
  const { sectionRef, elementRef } = useParallax<HTMLElement>(0.4);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-sage-deep text-ivory"
    >
      {/* Parallax Background Artwork */}
      <div
        ref={elementRef}
        className="absolute inset-0 -top-24 -bottom-24 w-full pointer-events-none opacity-30 select-none scale-105"
      >
        <Image
          src="/images/couple-arch.jpg"
          alt="Dr. Aman and Dr. Yushra"
          fill
          priority
          className="object-cover object-center filter blur-[1px] brightness-75 contrast-110"
        />
      </div>

      {/* Deep overlay gradients for readability and atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2F4538]/90 via-[#24352B]/85 to-[#2F4538]/95 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" duration={1}>
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-light font-body">
              The Happy Couple
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ivory mt-2">
              Two Souls, One Journey
            </h2>
            <GoldDivider variant="ornate" className="my-4" />
          </div>
        </ScrollReveal>

        {/* Groom & Bride Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-11 gap-6 sm:gap-8 items-center">
          
          {/* Groom Card (Ivory Accent) */}
          <div className="md:col-span-5">
            <ScrollReveal animation="slide-left" duration={1.1}>
              <div className="relative p-8 sm:p-10 rounded-2xl bg-ivory/10 backdrop-blur-md border border-gold/30 royal-shadow text-center hover:border-gold/60 transition-all duration-300">
                <div className="inline-block px-3 py-1 rounded-full bg-ivory/20 text-xs tracking-widest uppercase text-ivory mb-4 font-body border border-ivory/30">
                  Groom • Ivory
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-ivory tracking-wide mb-2">
                  Dr. Aman
                </h3>
                <p className="font-body italic text-sm text-ivory/80 leading-relaxed mt-3">
                  Standing in grace and devotion, ready to embark upon this blessed new chapter.
                </p>
                <div className="mt-4 text-gold text-lg">✦</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Center Interlocking "weds" Badge */}
          <div className="md:col-span-1 text-center my-2 md:my-0">
            <ScrollReveal animation="zoom-in" delay={0.2} duration={1}>
              <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gold-light/60 bg-sage-deep/80 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <span className="font-script text-2xl sm:text-3xl text-gold-light">
                  weds
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Bride Card (Sage Green Accent) */}
          <div className="md:col-span-5">
            <ScrollReveal animation="slide-right" duration={1.1}>
              <div className="relative p-8 sm:p-10 rounded-2xl bg-sage/20 backdrop-blur-md border border-sage-light/40 royal-shadow text-center hover:border-gold/60 transition-all duration-300">
                <div className="inline-block px-3 py-1 rounded-full bg-sage-light/20 text-xs tracking-widest uppercase text-sage-light mb-4 font-body border border-sage-light/30">
                  Bride • Sage Green
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-ivory tracking-wide mb-2">
                  Dr. Yushra
                </h3>
                <p className="font-body italic text-sm text-ivory/80 leading-relaxed mt-3">
                  Adorned in elegance, joining hearts to weave a lifetime of warmth and companionship.
                </p>
                <div className="mt-4 text-gold text-lg">✦</div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
