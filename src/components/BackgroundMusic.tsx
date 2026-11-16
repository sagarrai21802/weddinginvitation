'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';

export const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  // Try to auto-play after first user interaction with the page
  const handleFirstInteraction = useCallback(() => {
    if (hasInteracted) return;
    setHasInteracted(true);

    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.35;
      audio.play().then(() => {
        setIsPlaying(true);
        setShowPrompt(false);
      }).catch(() => {
        // Auto-play blocked — user will need to tap the button
      });
    }

    // Clean up the listeners
    document.removeEventListener('click', handleFirstInteraction);
    document.removeEventListener('touchstart', handleFirstInteraction);
    document.removeEventListener('scroll', handleFirstInteraction);
  }, [hasInteracted]);

  useEffect(() => {
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    document.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [handleFirstInteraction]);

  // Hide the initial prompt after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.35;
      audio.play().then(() => {
        setIsPlaying(true);
        setShowPrompt(false);
      }).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/bg-music.mp3" loop preload="auto" />

      {/* Floating music toggle button — bottom-right corner */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
        {/* Tooltip prompt */}
        {showPrompt && !isPlaying && (
          <div className="animate-fade-in-up bg-ivory/95 backdrop-blur-sm border border-gold/40 rounded-xl px-4 py-2 shadow-lg max-w-[180px] text-center">
            <p className="font-body text-xs text-charcoal/80 leading-snug">
              🎵 Tap to play<br />background music
            </p>
            {/* Little arrow pointing down */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-ivory/95 border-r border-b border-gold/40 rotate-45" />
          </div>
        )}

        {/* The button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
          className={`
            group relative w-12 h-12 rounded-full
            border-2 transition-all duration-500 ease-out
            flex items-center justify-center
            shadow-lg hover:shadow-xl
            ${isPlaying
              ? 'bg-sage/90 border-sage-light text-ivory hover:bg-sage-dark'
              : 'bg-ivory/95 border-gold/50 text-gold-dark hover:bg-gold/10 hover:border-gold'
            }
            backdrop-blur-sm
          `}
        >
          {/* Rotating ring animation when playing */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold-light animate-[spin_3s_linear_infinite] pointer-events-none" />
          )}

          {/* Music icon */}
          {isPlaying ? (
            /* Sound bars animation */
            <div className="flex items-end gap-[3px] h-5">
              <span className="w-[3px] bg-ivory rounded-full animate-[musicBar1_0.8s_ease-in-out_infinite]" />
              <span className="w-[3px] bg-ivory rounded-full animate-[musicBar2_0.7s_ease-in-out_infinite_0.2s]" />
              <span className="w-[3px] bg-ivory rounded-full animate-[musicBar3_0.9s_ease-in-out_infinite_0.1s]" />
              <span className="w-[3px] bg-ivory rounded-full animate-[musicBar1_0.75s_ease-in-out_infinite_0.3s]" />
            </div>
          ) : (
            /* Music note icon */
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};
