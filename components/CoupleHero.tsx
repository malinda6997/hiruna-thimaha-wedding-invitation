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
        { scale: 1.06 },
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
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-4 sm:p-6 text-center overflow-hidden select-none bg-[#030206] will-change-transform"
    >
      {/* Dynamic Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

        .hero-font-cinzel {
          font-family: 'Cinzel', serif;
          font-optical-sizing: auto;
        }

        .hero-font-lora {
          font-family: 'Lora', serif;
          font-optical-sizing: auto;
        }
      `}</style>

      {/* 1. BACKGROUND PHOTO */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imgRef}
          src="/assets/hero-img.jpg"
          alt="Hiruna and Thimasha Wedding"
          className="w-full h-full object-cover object-[center_35%] sm:object-center will-change-transform brightness-[0.70]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#030206]" />
      </div>

      {/* 2. THADA PURPLE GRADIENT MESH */}
      <div
        ref={purpleOrbRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[800px] h-[300px] sm:h-[550px] rounded-full bg-gradient-to-t from-[#581c87]/90 via-[#3b0764]/70 to-transparent blur-[55px] md:blur-[140px] pointer-events-none z-1 will-change-transform"
      />

      {/* 3. HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-2 my-auto">
        
        {/* LOKU KERU BADGE */}
        <div className="hero-badge flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/40 bg-purple-950/70 backdrop-blur-md mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          <Heart className="w-3.5 h-3.5 text-purple-300 fill-purple-300/40" />
          <span className="hero-font-lora text-xs sm:text-sm text-purple-100 tracking-wider uppercase font-semibold">
            මංගල ආරාධනය
          </span>
          <Heart className="w-3.5 h-3.5 text-purple-300 fill-purple-300/40" />
        </div>

        {/* LOKUM LOKU COUPLE NAMES */}
        <h1 className="hero-title-main hero-font-cinzel text-5xl sm:text-8xl md:text-9xl font-black tracking-widest text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_20px_rgba(0,0,0,0.9)] my-2">
          HIRUNA & THIMASHA
        </h1>

        {/* LOKU DATE & TIME */}
        <div className="hero-datetime-text hero-font-lora flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 my-4 text-sm sm:text-xl text-white font-bold tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          <span>2026 නොවැම්බර් 15</span>
          <span className="text-purple-300">•</span>
          <span>පෙ.ව. 10:30 – ප.ව. 04:30</span>
        </div>

        {/* LOKU QUOTE */}
        <p className="hero-quote hero-font-lora italic text-xl sm:text-3xl text-purple-100 font-medium tracking-wide max-w-2xl my-3 leading-relaxed drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
          "එකිනෙකට බැඳුණු දෙහදක අලංකාර ආරම්භය..."
        </p>

        {/* PAHATHATA KARAPU SCROLL BUTTON */}
        <div className="hero-scroll-btn mt-8 sm:mt-12">
          <button
            onClick={() => {
              const nextSection = document.getElementById("chapter-story");
              nextSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-purple-100 hover:text-white transition-colors duration-300 group cursor-pointer"
          >
            <span className="hero-font-lora text-xs sm:text-sm tracking-wider uppercase font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              අපගේ කතාව බලන්න
            </span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-purple-400/50 bg-black/50 flex items-center justify-center group-hover:border-purple-300 group-hover:bg-purple-600/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce text-purple-200" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}