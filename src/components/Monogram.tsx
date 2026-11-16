'use client';

import React from 'react';
import { MughalArch } from './ui/MughalArch';
import { GoldDivider } from './ui/GoldDivider';
import { ScrollReveal } from './ui/ScrollReveal';

export const Monogram: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-[#FAF6F0] overflow-hidden">
      {/* Background Soft Glow Ring */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="w-full max-w-xl mx-auto z-10">
        <ScrollReveal animation="zoom-in" duration={1.2}>
          <MughalArch className="bg-gradient-to-b from-ivory-light via-ivory to-blush/30 royal-shadow rounded-3xl">
            <div className="flex flex-col items-center text-center py-6 sm:py-10">
              
              {/* Crest Top Star */}
              <div className="text-gold-dark text-xl sm:text-2xl mb-2">❖</div>

              {/* Intertwined Monogram A & Y */}
              <div className="relative my-4 flex items-center justify-center">
                {/* Decorative Gold Circular Filigree Ring */}
                <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full border-2 border-gold/40 border-dashed animate-[spin_60s_linear_infinite] absolute inset-0 m-auto" />
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full border border-gold/60 absolute inset-0 m-auto shadow-[0_0_15px_rgba(197,165,90,0.15)]" />

                {/* The Letters */}
                <div className="relative z-10 flex items-center justify-center select-none py-8">
                  <span className="font-monogram text-7xl sm:text-9xl text-sage drop-shadow-md transform -translate-x-3 -translate-y-2">
                    A
                  </span>
                  <span className="font-monogram text-7xl sm:text-9xl gold-gradient-text drop-shadow-md transform translate-x-1 translate-y-3 font-semibold">
                    Y
                  </span>
                </div>
              </div>

              {/* Flourish subtitle */}
              <GoldDivider variant="ornate" className="my-5 w-48" />

              <p className="font-script text-2xl sm:text-3xl text-sage-deep tracking-wide px-4">
                Together in love, bound by faith…
              </p>

              <p className="font-body text-xs sm:text-sm text-taupe tracking-[0.3em] uppercase mt-3">
                Aman & Yushra
              </p>
            </div>
          </MughalArch>
        </ScrollReveal>
      </div>
    </section>
  );
};
