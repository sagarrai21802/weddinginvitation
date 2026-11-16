import React from 'react';

interface MughalArchProps {
  children?: React.ReactNode;
  className?: string;
  fill?: string;
  strokeColor?: string;
}

export const MughalArch: React.FC<MughalArchProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative p-6 sm:p-10 md:p-14 ${className}`}>
      {/* SVG Decorative Arch Frame Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 560"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldArchStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C5A55A" />
            <stop offset="35%" stopColor="#E8D5A3" />
            <stop offset="65%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#A68B3E" />
          </linearGradient>
        </defs>

        {/* Outer Border */}
        <rect
          x="10"
          y="10"
          width="380"
          height="540"
          rx="18"
          stroke="url(#goldArchStroke)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          opacity="0.6"
        />

        {/* Inner Mughal Cusped Arch Outline */}
        <path
          d="
            M 30,530
            L 30,170
            C 30,120 70,80 120,70
            C 145,65 170,40 200,18
            C 230,40 255,65 280,70
            C 330,80 370,120 370,170
            L 370,530
            Z
          "
          stroke="url(#goldArchStroke)"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Top Finial Point */}
        <circle cx="200" cy="18" r="3" fill="#D4AF37" />
        <path d="M200 6 L202 14 L200 18 L198 14 Z" fill="#C5A55A" />

        {/* Corner Flourish Dots */}
        <circle cx="30" cy="170" r="3" fill="#C5A55A" />
        <circle cx="370" cy="170" r="3" fill="#C5A55A" />
        <circle cx="30" cy="530" r="3" fill="#C5A55A" />
        <circle cx="370" cy="530" r="3" fill="#C5A55A" />
      </svg>

      {/* Content inside the arch */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
