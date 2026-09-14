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
      // 1. Slow Ken Burns Zoom Effect for Photo
      gsap.fromTo(
        imgRef.current,
        { scale: 1.12 },
        { scale: 1, duration: 10, ease: "sine.out" }
      );

      // 2. Animated Purple Mesh Glow Movement (At the bottom)
      gsap.to(purpleOrbRef.current, {
        x: "15vw",
        y: "-5vh",
        scale: 1.25,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Staggered Entrance Animations
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.2 }
      )
        .fromTo(
          ".hero-title-main",
          { opacity: 0, scale: 0.92, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-datetime-text",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          ".hero-quote",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-scroll-btn",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-end pb-12 sm:pb-16 p-6 text-center overflow-hidden select-none bg-[#030206]"
    >
      {/* 1. BACKGROUND PHOTO */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imgRef}
          src="/assets/hero-img.jpg"
          alt="Hiruna and Thimasha Wedding"
          className="w-full h-full object-cover object-center"
        />
        {/* Top subtle vignette so image top is clean */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#030206]" />
      </div>

      {/* 2. BOTTOM PURPLE GRADIENT MESH */}
      <div
        ref={purpleOrbRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-t from-[#581c87]/60 via-[#3b0764]/40 to-transparent blur-[140px] pointer-events-none z-1"
      />

      {/* 3. HERO CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-2">
        
        {/* Top Celebration Sub-Badge */}
        <div className="hero-badge flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-950/40 backdrop-blur-md mb-4 shadow-[0_0_25px_rgba(147,51,234,0.25)]">
          <Heart className="w-3.5 h-3.5 text-purple-300 fill-purple-300/30" />
          <span className="font-cinzel text-xs sm:text-sm text-purple-100 tracking-[0.35em] uppercase font-semibold">
            The Wedding Celebration
          </span>
          <Heart className="w-3.5 h-3.5 text-purple-300 fill-purple-300/30" />
        </div>

        {/* LOKUWATA HIRUNA & THIMASHA NAMES */}
        <h1 className="hero-title-main font-cinzel text-4xl sm:text-7xl md:text-8xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f3e8ff] to-[#e9d5ff] drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] my-2">
          HIRUNA & THIMASHA
        </h1>

        {/* DIRECT FLOATING DATE, TIME & LOCATION (NO CARD CONTAINER) */}
        <div className="hero-datetime-text flex flex-wrap items-center justify-center gap-3 sm:gap-6 my-4 text-xs sm:text-base font-cinzel text-white font-medium tracking-widest uppercase drop-shadow-md">
          <span>NOVEMBER 15, 2026</span>
          <span className="text-purple-300">•</span>
          <span>10:30 AM – 4:30 PM</span>
          <span className="text-purple-300">•</span>
          <span>COLOMBO, SRI LANKA</span>
        </div>

        {/* PODI WADANAK */}
        <p className="hero-quote font-cursive text-2xl sm:text-4xl text-white font-normal tracking-wide max-w-2xl my-2 leading-relaxed drop-shadow-md">
          "Two souls with but a single thought, two hearts that beat as one."
        </p>

        {/* Scroll Indicator Button */}
        <div className="hero-scroll-btn mt-6">
          <button
            onClick={() => {
              const nextSection = document.getElementById("chapter-story");
              nextSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-purple-200 hover:text-white transition-colors duration-300 group cursor-pointer"
          >
            <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.3em] uppercase font-medium">
              Scroll To Discover Our Story
            </span>
            <div className="w-9 h-9 rounded-full border border-purple-400/30 flex items-center justify-center group-hover:border-purple-300 group-hover:bg-purple-600/20 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <ChevronDown className="w-4 h-4 animate-bounce text-purple-200" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}