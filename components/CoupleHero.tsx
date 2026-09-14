"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronDown, Heart } from "lucide-react";

export default function CoupleHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const purpleOrbRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 8, ease: "sine.out", force3D: true }
      );

      gsap.to(purpleOrbRef.current, {
        x: "10vw",
        y: "-3vh",
        scale: 1.15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true,
      });

      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.1 }
      )
        .fromTo(
          ".hero-title-main",
          { opacity: 0, scale: 0.95, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-datetime-text",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-quote",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-scroll-btn",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-end pb-8 sm:pb-16 p-4 sm:p-6 text-center overflow-hidden select-none bg-[#030206] will-change-transform"
    >
      {/* 1. BACKGROUND PHOTO WITH MOBILE FOCAL ALIGNMENT */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imgRef}
          src="/assets/hero-img.jpg"
          alt="Hiruna and Thimasha Wedding"
          className="w-full h-full object-cover object-[center_25%] sm:object-center will-change-transform brightness-[0.65]"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#030206]" />
        <div className="absolute inset-0 bg-black/20 backdrop-brightness-90" />
      </div>

      {/* 2. PURPLE GRADIENT MESH */}
      <div
        ref={purpleOrbRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[700px] h-[220px] sm:h-[450px] rounded-full bg-gradient-to-t from-[#581c87]/70 via-[#3b0764]/50 to-transparent blur-[50px] md:blur-[140px] pointer-events-none z-1 will-change-transform"
      />

      {/* 3. HERO CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-2">
        {/* COMPACT MOBILE BADGE */}
        <div className="hero-badge flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-purple-400/30 bg-purple-950/60 backdrop-blur-md mb-2 sm:mb-4 shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
          <Heart className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-purple-300 fill-purple-300/40" />
          <span className="font-cinzel text-[9px] sm:text-xs text-purple-100 tracking-[0.25em] uppercase font-semibold">
            The Wedding Celebration
          </span>
          <Heart className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-purple-300 fill-purple-300/40" />
        </div>

        {/* HIRUNA & THIMASHA NAMES */}
        <h1 className="hero-title-main font-cinzel text-3xl sm:text-7xl md:text-8xl font-black tracking-widest text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_15px_rgba(0,0,0,0.9)] my-1 sm:my-2">
          HIRUNA & THIMASHA
        </h1>

        {/* DIRECT FLOATING DATE, TIME & LOCATION */}
        <div className="hero-datetime-text flex flex-wrap items-center justify-center gap-2 sm:gap-6 my-2 sm:my-4 text-[10px] sm:text-base font-cinzel text-white font-bold tracking-widest uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          <span>NOVEMBER 15, 2026</span>
          <span className="text-purple-300">•</span>
          <span>10:30 AM – 4:30 PM</span>
          <span className="text-purple-300">•</span>
          <span>COLOMBO, SRI LANKA</span>
        </div>

        {/* PODI WADANAK */}
        <p className="hero-quote font-cursive text-lg sm:text-4xl text-white font-normal tracking-wide max-w-2xl my-1 sm:my-2 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          "Two souls with but a single thought, two hearts that beat as one."
        </p>

        {/* Scroll Indicator Button */}
        <div className="hero-scroll-btn mt-4 sm:mt-6">
          <button
            onClick={() => {
              const nextSection = document.getElementById("chapter-story");
              nextSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-1.5 text-purple-100 hover:text-white transition-colors duration-300 group cursor-pointer"
          >
            <span className="font-cinzel text-[9px] sm:text-xs tracking-[0.25em] uppercase font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Scroll To Discover Our Story
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-purple-400/40 bg-black/40 flex items-center justify-center group-hover:border-purple-300 group-hover:bg-purple-600/30 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-purple-200" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}