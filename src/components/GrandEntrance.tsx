'use client';

import React from 'react';
import Image from 'next/image';
import { LanternSVG } from './ui/LanternSVG';
import { FloatingParticles } from './ui/FloatingParticles';
import { GoldDivider } from './ui/GoldDivider';
import { ScrollReveal } from './ui/ScrollReveal';

export const GrandEntrance: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between px-4 py-6 sm:py-10 overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F8F3EA] to-[#FAF6F0]">
      {/* Ambient Floating Gold Particles */}
      <FloatingParticles count={28} />

      {/* Swaying Lanterns on Left and Right Top Corners */}
      <div className="absolute top-0 left-2 sm:left-8 md:left-14 z-20">
        <LanternSVG side="left" size="md" />
      </div>
      <div className="absolute top-0 right-2 sm:right-8 md:right-14 z-20">
        <LanternSVG side="right" size="md" />
      </div>

      {/* ── Top: Bismillah Block ── */}
      <div className="w-full max-w-4xl text-center pt-4 sm:pt-6 z-10">
        <ScrollReveal animation="fade-in" duration={1.2}>
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-taupe font-body mb-6 sm:mb-8">
            ✦ Cordial Wedding Invitation ✦
          </p>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" duration={1.4}>
          <div className="font-arabic text-2xl sm:text-4xl md:text-5xl text-gold-dark mb-1 drop-shadow-[0_2px_8px_rgba(197,165,90,0.3)]">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2} duration={1}>
          <p className="font-body italic text-xs sm:text-sm text-taupe tracking-wider">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
        </ScrollReveal>
      </div>

      {/* ── Center: Couple Image + Names ── */}
      <div className="my-auto text-center z-10 max-w-3xl px-4 flex flex-col items-center">

        {/* Hero Couple Image — compact portrait card */}
        <ScrollReveal animation="zoom-in" delay={0.3} duration={1.4}>
          <div className="relative my-2 sm:my-3">
            {/* Outer decorative gold ring */}
            <div className="absolute -inset-2 sm:-inset-3 rounded-2xl sm:rounded-[2rem] border border-gold/25 pointer-events-none" />
            {/* Subtle glow behind the image */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gold/5 blur-2xl pointer-events-none" />

            {/* The image container — portrait, responsive sizing that fits 800px screens */}
            <div className="relative w-[180px] h-[270px] sm:w-[220px] sm:h-[330px] md:w-[260px] md:h-[390px] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gold/50 royal-shadow">
              <Image
                src="/images/hero-couple.jpg"
                alt="Dr. Aman & Dr. Yushra — Wedding Portrait"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
              />
              {/* Soft vignette overlay */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(250,246,240,0.35)]" />
            </div>
          </div>
        </ScrollReveal>

        <GoldDivider variant="ornate" className="my-2 sm:my-3" />

        <ScrollReveal animation="fade-up" delay={0.5} duration={1}>
          <h2 className="font-script text-2xl sm:text-3xl md:text-4xl text-sage drop-shadow-sm mb-1">
            Welcome to the Walima Ceremony of
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.7} duration={1.2}>
          <div className="font-display text-3xl sm:text-5xl md:text-6xl font-bold gold-gradient-text tracking-wide mt-1">
            Dr. Aman & Dr. Yushra
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.9} duration={1}>
          <p className="font-body text-sm sm:text-base text-charcoal/80 tracking-widest mt-2 uppercase">
            26 December 2026 • Indore
          </p>
        </ScrollReveal>
      </div>

      {/* Scroll Down Prompt */}
      <div className="z-10 pb-1 text-center">
        <ScrollReveal animation="fade-in" delay={1.1} duration={1}>
          <div className="flex flex-col items-center gap-1 cursor-pointer opacity-75 hover:opacity-100 transition-opacity">
            <span className="font-body text-xs tracking-[0.25em] text-taupe uppercase">
              Scroll to unveil
            </span>
            <div className="w-5 h-7 rounded-full border border-gold/70 flex items-start justify-center p-1">
              <span className="w-1 h-2 rounded-full bg-gold animate-bounce-slow" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
