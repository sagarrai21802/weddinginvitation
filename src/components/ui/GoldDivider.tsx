import React from 'react';

interface GoldDividerProps {
  className?: string;
  variant?: 'simple' | 'ornate' | 'star';
}

export const GoldDivider: React.FC<GoldDividerProps> = ({
  className = '',
  variant = 'ornate',
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`} aria-hidden="true">
      {/* Left tapering line */}
      <div className="h-[1px] w-16 sm:w-28 md:w-40 bg-gradient-to-r from-transparent via-gold to-gold-dark" />

      {/* Central motif */}
      {variant === 'ornate' && (
        <div className="flex items-center gap-1.5 text-gold">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
          <svg
            className="w-5 h-5 text-gold-shimmer filter drop-shadow-[0_0_4px_rgba(212,175,55,0.6)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
        </div>
      )}

      {variant === 'star' && (
        <span className="text-gold text-lg transform rotate-45 inline-block">❖</span>
      )}

      {variant === 'simple' && (
        <span className="w-2 h-2 rotate-45 bg-gold border border-gold-light" />
      )}

      {/* Right tapering line */}
      <div className="h-[1px] w-16 sm:w-28 md:w-40 bg-gradient-to-l from-transparent via-gold to-gold-dark" />
    </div>
  );
};
