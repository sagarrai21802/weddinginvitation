'use client';

import React from 'react';
import { GoldDivider } from './ui/GoldDivider';
import { ScrollReveal } from './ui/ScrollReveal';

export const Prayer: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-[#FAF6F0] overflow-hidden">
      
      {/* Background Islamic Geometric Pattern Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-[600px] h-[600px]" fill="currentColor">
          <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center px-4">
        
        {/* Quranic Verse */}
        <ScrollReveal animation="zoom-in" duration={1.2}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-ivory-light via-ivory to-blush/20 border border-gold/40 royal-shadow">
            
            <span className="text-xs uppercase tracking-[0.35em] text-taupe font-body">
              Holy Quran [78:8]
            </span>

            {/* Arabic Quranic Verse */}
            <div className="font-arabic text-3xl sm:text-5xl md:text-6xl text-gold-dark my-6 leading-relaxed">
              وَخَلَقْنَاكُمْ أَزْوَاجًا
            </div>

            {/* English Translation */}
            <p className="font-display italic text-xl sm:text-2xl text-sage-deep mb-2 font-medium">
              “And We Created You In Pairs”
            </p>

            <p className="font-body text-xs sm:text-sm text-taupe tracking-widest uppercase">
              — Surah An-Naba
            </p>

            <GoldDivider variant="ornate" className="my-8 max-w-sm mx-auto" />

            {/* Insha'Allah & Dua */}
            <h3 className="font-script text-4xl sm:text-5xl text-gold-dark mb-4">
              Insha&apos;Allah
            </h3>

            <p className="font-body italic text-lg sm:text-xl text-charcoal/85 max-w-lg mx-auto leading-relaxed">
              “May Allah accept our intentions, bless this union and grant us a lifetime of happiness, peace and affection together.”
            </p>

            <div className="mt-6">
              <span className="font-display text-2xl sm:text-3xl text-gold-dark font-semibold tracking-wider">
                — Ameen —
              </span>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
