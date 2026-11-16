import React from 'react';

interface LanternSVGProps {
  className?: string;
  side?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

export const LanternSVG: React.FC<LanternSVGProps> = ({
  className = '',
  side = 'left',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-12 h-44',
    md: 'w-16 h-60 sm:w-20 sm:h-72',
    lg: 'w-24 h-80 sm:w-28 sm:h-96',
  }[size];

  const swingClass = side === 'left' ? 'animate-swing' : 'animate-swing-delayed';

  return (
    <div className={`pointer-events-none select-none flex flex-col items-center ${swingClass} ${className}`}>
      <svg
        viewBox="0 0 100 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses} filter drop-shadow-[0_8px_16px_rgba(197,165,90,0.35)]`}
      >
        {/* Top Chain links */}
        <line x1="50" y1="0" x2="50" y2="90" stroke="url(#chainGold)" strokeWidth="2.5" strokeDasharray="3 3" />
        <circle cx="50" cy="92" r="4" fill="#C5A55A" stroke="#7D5E1B" strokeWidth="1" />

        {/* Hanging Ring & Top Cap */}
        <path
          d="M38 100 C38 94, 62 94, 62 100 L66 108 L34 108 Z"
          fill="url(#lanternGold)"
          stroke="#7D5E1B"
          strokeWidth="1"
        />

        {/* Dome Roof */}
        <path
          d="M32 108 C32 108, 50 115, 68 108 L74 122 C74 122, 50 130, 26 122 Z"
          fill="url(#domeGold)"
          stroke="#A68B3E"
          strokeWidth="1.2"
        />

        {/* Lantern Finial Crescent or Pin */}
        <circle cx="50" cy="115" r="2.5" fill="#FFF3D1" />

        {/* Inner Warm Glow Filter Effect */}
        <ellipse cx="50" cy="175" rx="22" ry="38" fill="url(#warmGlow)" />

        {/* Glass Body with Moroccan Arches */}
        <rect
          x="28"
          y="126"
          width="44"
          height="75"
          rx="5"
          fill="url(#glassGradient)"
          stroke="#C5A55A"
          strokeWidth="1.5"
        />

        {/* Internal Candle / Light Flame */}
        <ellipse cx="50" cy="172" rx="4" ry="10" fill="#FFFBE6" className="animate-pulse" />
        <ellipse cx="50" cy="175" rx="7" ry="16" fill="#FCE588" opacity="0.6" />

        {/* Lattice / Grille overlay lines */}
        <path
          d="M29 140 C40 148, 60 148, 71 140"
          stroke="#A68B3E"
          strokeWidth="1.2"
          strokeDasharray="2 2"
        />
        <path
          d="M29 175 C40 185, 60 185, 71 175"
          stroke="#A68B3E"
          strokeWidth="1.2"
          strokeDasharray="2 2"
        />
        <line x1="50" y1="126" x2="50" y2="201" stroke="#A68B3E" strokeWidth="1.2" />

        {/* Bottom Filigree Base */}
        <path
          d="M26 201 C35 208, 65 208, 74 201 L64 222 C56 226, 44 226, 36 222 Z"
          fill="url(#domeGold)"
          stroke="#7D5E1B"
          strokeWidth="1.2"
        />

        {/* Bottom Drop Finial & Bead */}
        <line x1="50" y1="225" x2="50" y2="245" stroke="#C5A55A" strokeWidth="2" />
        <path
          d="M50 245 L46 255 L50 265 L54 255 Z"
          fill="url(#lanternGold)"
          stroke="#A68B3E"
          strokeWidth="0.8"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="chainGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C5A55A" />
            <stop offset="100%" stopColor="#E8D5A3" />
          </linearGradient>
          <linearGradient id="lanternGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7D5E1B" />
            <stop offset="40%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#FFF3D1" />
            <stop offset="100%" stopColor="#A68B3E" />
          </linearGradient>
          <linearGradient id="domeGold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8A6B29" />
            <stop offset="50%" stopColor="#E0C379" />
            <stop offset="100%" stopColor="#705318" />
          </linearGradient>
          <radialGradient id="warmGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFEAA7" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#F9CA24" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F9CA24" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="glassGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FFF3D1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FAF6F0" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
