'use client';

import React from 'react';
import { useParallax } from '@/hooks/useParallax';
import { LanternSVG } from './ui/LanternSVG';
import { GoldDivider } from './ui/GoldDivider';
import { ScrollReveal } from './ui/ScrollReveal';

export const EventDetails: React.FC = () => {
  const { sectionRef, elementRef } = useParallax<HTMLElement>(0.3);

  // Google Maps navigation URL for A1 Resort Khajrana Indore
  const mapsUrl = 'https://maps.google.com/?q=A1+Marriage+Hall+and+Resort+Khajrana+Indore';

  // Google Calendar URL generator
  const calendarUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Walima+Ceremony+-+Dr.+Aman+%26+Dr.+Yushra&dates=20261226T133000Z/20261226T183000Z&details=Walima+Ceremony+of+Dr.+Aman+and+Dr.+Yushra&location=A1+Marriage+Hall+and+Resort,+Khajrana,+Indore';

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-[#24352B] via-[#2F4538] to-[#1F2C23] text-ivory overflow-hidden"
    >
      {/* Background Parallax Subtle Star Lattice */}
      <div
        ref={elementRef}
        className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center scale-110"
      >
        <div className="w-[800px] h-[800px] rounded-full border-[10px] border-gold border-dashed" />
      </div>

      {/* Swaying Lanterns */}
      <div className="absolute top-0 left-3 sm:left-10 z-20">
        <LanternSVG side="left" size="sm" />
      </div>
      <div className="absolute top-0 right-3 sm:right-10 z-20">
        <LanternSVG side="right" size="sm" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <ScrollReveal animation="fade-down" duration={1}>
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-light font-body">
              Programme Particulars
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-ivory mt-2">
              Ceremony Details
            </h2>
            <GoldDivider variant="ornate" className="my-4" />
          </div>
        </ScrollReveal>

        {/* 3 Detail Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Date */}
          <ScrollReveal animation="flip-up" delay={0.1} duration={0.9}>
            <div className="h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-ivory/5 backdrop-blur-md border border-gold/30 hover:border-gold/70 transition-all text-center royal-shadow group">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-2xl text-gold-light mb-4 group-hover:scale-110 transition-transform">
                📅
              </div>
              <span className="text-xs tracking-widest text-gold-light uppercase font-body mb-1">
                The Blessed Date
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-ivory font-semibold">
                26 Dec 2026
              </h3>
              <p className="font-body text-sm text-ivory/70 mt-2">
                Saturday Evening
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: Time */}
          <ScrollReveal animation="flip-up" delay={0.25} duration={0.9}>
            <div className="h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-ivory/5 backdrop-blur-md border border-gold/30 hover:border-gold/70 transition-all text-center royal-shadow group">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-2xl text-gold-light mb-4 group-hover:scale-110 transition-transform">
                🕖
              </div>
              <span className="text-xs tracking-widest text-gold-light uppercase font-body mb-1">
                Reception Timing
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-ivory font-semibold">
                7:00 PM
              </h3>
              <p className="font-body text-sm text-ivory/70 mt-2">
                Dinner & Celebrations
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: Venue */}
          <ScrollReveal animation="flip-up" delay={0.4} duration={0.9}>
            <div className="h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-ivory/5 backdrop-blur-md border border-gold/30 hover:border-gold/70 transition-all text-center royal-shadow group">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-2xl text-gold-light mb-4 group-hover:scale-110 transition-transform">
                📍
              </div>
              <span className="text-xs tracking-widest text-gold-light uppercase font-body mb-1">
                The Venue
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-ivory font-semibold leading-snug">
                A1 Resort
              </h3>
              <p className="font-body text-sm text-ivory/80 mt-1">
                Khajrana, Indore (M.P.)
              </p>
            </div>
          </ScrollReveal>

        </div>

        {/* Action Buttons: Google Maps & Save to Calendar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <ScrollReveal animation="fade-up" delay={0.5} duration={1}>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gold text-charcoal font-body font-semibold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(197,165,90,0.4)] hover:bg-gold-light hover:scale-105 active:scale-95 transition-all"
            >
              <span>📍 Open in Google Maps</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.65} duration={1}>
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory border border-gold/40 font-body font-medium text-sm tracking-wider uppercase hover:border-gold hover:scale-105 active:scale-95 transition-all"
            >
              <span>📅 Add to Calendar</span>
            </a>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
