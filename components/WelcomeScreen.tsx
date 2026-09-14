"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface WelcomeScreenProps {
  onFinished: () => void;
}

export default function WelcomeScreen({ onFinished }: WelcomeScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: onFinished,
          });
        },
      });

      // 1. Welcome Text Fade In & Scale Up
      tl.fromTo(
        ".welcome-text",
        { opacity: 0, scale: 0.85, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
        // 2. Pause for a moment so user reads it
        .to(".welcome-text", { opacity: 1, duration: 0.8 })
        // 3. Fade Out Text before screen transitions
        .to(".welcome-text", { opacity: 0, y: -20, duration: 0.6, ease: "power2.in" });
    }, containerRef);

    return () => ctx.revert();
  }, [onFinished]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[998] bg-[#030303] flex flex-col items-center justify-center p-6 select-none"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Onest:wght@100..900&display=swap');

        .welcome-font-cinzel {
          font-family: 'Cinzel', serif;
          font-optical-sizing: auto;
          font-style: normal;
        }

        .welcome-font-onest {
          font-family: 'Onest', sans-serif;
          font-optical-sizing: auto;
          font-style: normal;
        }
      `}</style>

      {/* Ambient Soft Gold Background Glow */}
      <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* Center Floating Welcome Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        <span className="welcome-text welcome-font-onest text-xs sm:text-sm text-[#d4af37] tracking-[0.4em] uppercase font-medium mb-3">
          Warmest Greetings
        </span>

        <h1 className="welcome-text welcome-font-cinzel text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f3e5ab] to-[#d4af37] tracking-widest drop-shadow-xl">
          WELCOME
        </h1>

        <p className="welcome-text welcome-font-onest text-sm sm:text-base text-amber-100/70 mt-3 font-light tracking-wide">
          To the wedding celebration of Hiruna & Thimasha
        </p>
      </div>
    </div>
  );
}