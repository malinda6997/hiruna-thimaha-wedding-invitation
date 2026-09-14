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
      // Fluid Colorful Mesh Animation
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
        ".loader-subtitle",
        { opacity: 0, letterSpacing: "0.1em", y: 20 },
        { opacity: 1, letterSpacing: "0.4em", y: 0, duration: 1.2, ease: "power2.out" }
      )
        .fromTo(
          ".loader-names",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".loader-tagline",
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
      className="fixed inset-0 z-[999] bg-[#050508] flex flex-col items-center justify-center overflow-hidden p-6 select-none"
    >
      {/* RICH COLORFUL GRADIENT MESH LAYER 1 */}
      <div
        ref={orb1Ref}
        className="absolute -top-20 -left-20 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-br from-[#be185d]/30 via-[#831843]/20 to-transparent blur-[130px] pointer-events-none mix-blend-screen"
      />

      {/* RICH COLORFUL GRADIENT MESH LAYER 2 */}
      <div
        ref={orb2Ref}
        className="absolute -bottom-20 -right-20 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full bg-gradient-to-tr from-[#6b21a8]/35 via-[#4c1d95]/25 to-transparent blur-[140px] pointer-events-none mix-blend-screen"
      />

      {/* RICH COLORFUL GRADIENT MESH LAYER 3 */}
      <div
        ref={orb3Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-r from-[#d4af37]/25 via-[#b45309]/20 to-transparent blur-[120px] pointer-events-none mix-blend-screen"
      />

      {/* Subtle Noise Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50" />

      {/* DIRECT LUXURY FLOATING CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        
        {/* Top Subtitle */}
        <p className="loader-subtitle font-cinzel text-xs sm:text-sm text-[#d4af37] uppercase font-semibold tracking-[0.4em] mb-4">
          An Invitation for You
        </p>

        {/* Couple Names - Luxury Serif Font */}
        <h1 className="loader-names font-cinzel text-3xl sm:text-5xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#fce7f3] to-[#f3e5ab] my-2 drop-shadow-lg">
          HIRUNA & THIMASHA
        </h1>

        {/* Western Cursive Script (වැල් අකුරු) Tagline */}
        <p className="loader-tagline font-cursive text-2xl sm:text-4xl text-amber-100/90 mt-2 font-normal tracking-wide">
          Together with their families
        </p>

        {/* Luxury Gold Shimmer Line */}
        <div className="w-56 h-[1.5px] bg-white/10 mt-8 relative overflow-hidden rounded-full">
          <div className="shimmer-line w-full h-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent origin-left" />
        </div>

      </div>
    </div>
  );
}