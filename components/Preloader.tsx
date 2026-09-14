"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onFinished: () => void;
}

export default function Preloader({ onFinished }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fluid Purple & Dark Violet Mesh Animation
      gsap.to(orb1Ref.current, {
        x: "25vw",
        y: "15vh",
        scale: 1.3,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: "-20vw",
        y: "-15vh",
        scale: 1.4,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb3Ref.current, {
        x: "15vw",
        y: "-20vh",
        scale: 1.2,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Text Entrance Sequence
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 1.05,
            duration: 1,
            ease: "power3.inOut",
            onComplete: onFinished,
          });
        },
      });

      tl.fromTo(
        ".loader-names",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          ".loader-subtitle-1",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".loader-tagline-2",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          ".shimmer-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.5, ease: "power2.inOut" },
          "-=1"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onFinished]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] bg-[#030206] flex flex-col items-center justify-center overflow-hidden p-6 select-none"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Onest:wght@100..900&display=swap');

        .loader-font-cinzel {
          font-family: 'Cinzel', serif;
          font-optical-sizing: auto;
          font-style: normal;
        }

        .loader-font-onest {
          font-family: 'Onest', sans-serif;
          font-optical-sizing: auto;
          font-style: normal;
        }
      `}</style>

      {/* ROYAL PURPLE GRADIENT MESH LAYER 1 */}
      <div
        ref={orb1Ref}
        className="absolute -top-20 -left-20 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-br from-[#6b21a8]/35 via-[#4c1d95]/20 to-transparent blur-[130px] pointer-events-none mix-blend-screen"
      />

      {/* ROYAL PURPLE GRADIENT MESH LAYER 2 */}
      <div
        ref={orb2Ref}
        className="absolute -bottom-20 -right-20 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full bg-gradient-to-tr from-[#581c87]/40 via-[#3b0764]/25 to-transparent blur-[140px] pointer-events-none mix-blend-screen"
      />

      {/* SOFT VIOLET SOFT AURA LAYER 3 */}
      <div
        ref={orb3Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-r from-[#9333ea]/20 via-[#a855f7]/15 to-transparent blur-[120px] pointer-events-none mix-blend-screen"
      />

      {/* Subtle Noise Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50" />

      {/* DIRECT LUXURY FLOATING CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        
        {/* Couple Names - Cinzel Pure White Gradient */}
        <h1 className="loader-names loader-font-cinzel text-3xl sm:text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f3e8ff] to-[#e9d5ff] mb-4 drop-shadow-lg">
          Hiruna & Thimasha
        </h1>

        {/* Tagline 1 - Purple Tinted Text */}
        <p className="loader-subtitle-1 loader-font-onest text-lg sm:text-2xl text-purple-200 font-medium tracking-wide my-1">
          Two hearts, one beautiful journey.
        </p>

        {/* Tagline 2 - Soft White Text */}
        <p className="loader-tagline-2 loader-font-onest text-base sm:text-xl text-purple-100/90 font-light tracking-wide mt-1">
          Our forever begins here... 💍
        </p>

        {/* Purple/Silver Shimmer Line */}
        <div className="w-56 h-[1.5px] bg-white/10 mt-8 relative overflow-hidden rounded-full">
          <div className="shimmer-line w-full h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent origin-left" />
        </div>

      </div>
    </div>
  );
}