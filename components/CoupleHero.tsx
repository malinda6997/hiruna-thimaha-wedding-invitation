"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Calendar, Clock, MapPin, ChevronDown, Sparkles, Heart } from "lucide-react";

export default function CoupleHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      // 1. Slow Zoom-In Animation for Local Image (Ken Burns Effect)
      gsap.fromTo(
        imgRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 12, ease: "sine.out" }
      );

      // 2. Dynamic Auto Color-Changing Gradient Overlay Orbs Animation
      gsap.to(orb1Ref.current, {
        x: "22vw",
        y: "18vh",
        scale: 1.35,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: "-22vw",
        y: "-18vh",
        scale: 1.4,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Staggered Storytelling Text Reveal Animation Sequence
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      )
        .fromTo(
          ".hero-title-main",
          { opacity: 0, scale: 0.9, y: 35 },
          { opacity: 1, scale: 1, y: 0, duration: 1.3, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-datetime-card",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          ".hero-quote",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
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
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-6 text-center overflow-hidden select-none bg-[#030303]"
    >
      {/* 1. BACKGROUND PHOTO (Local Image from public/assets/hero-img.jpg) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imgRef}
          src="/assets/hero-img.jpg"
          alt="Hiruna and Thimasha Wedding"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Dark Vignette Gradient for Perfect Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/65 to-[#030303]/80" />
      </div>

      {/* 2. DYNAMIC COLOR-CHANGING GRADIENT AURA */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-br from-[#be185d]/35 via-[#831843]/25 to-transparent blur-[140px] pointer-events-none mix-blend-screen z-1"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/4 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-tr from-[#6b21a8]/40 via-[#d4af37]/25 to-transparent blur-[150px] pointer-events-none mix-blend-screen z-1"
      />

      {/* 3. HERO CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-2">
        {/* Top Celebration Sub-Badge */}
        <div className="hero-badge flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-black/40 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="font-cinzel text-xs sm:text-sm text-[#f3e5ab] tracking-[0.3em] uppercase font-medium">
            The Wedding Celebration
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
        </div>

        {/* LOKUWATA HIRUNA & THIMASHA NAMES */}
        <h1 className="hero-title-main font-cinzel text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#fce7f3] to-[#f3e5ab] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] my-2">
          HIRUNA & THIMASHA
        </h1>

        {/* DATE & TIME CARD (Under Names) */}
        <div className="hero-datetime-card flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 my-6 px-6 sm:px-8 py-3.5 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-xl shadow-2xl">
          {/* Date */}
          <div className="flex items-center gap-2 text-xs sm:text-base font-cinzel text-amber-100 font-semibold tracking-wider">
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span>NOVEMBER 15, 2026</span>
          </div>

          <div className="hidden sm:block w-[1px] h-4 bg-[#d4af37]/40" />

          {/* Time */}
          <div className="flex items-center gap-2 text-xs sm:text-base font-cinzel text-amber-100 font-semibold tracking-wider">
            <Clock className="w-4 h-4 text-[#d4af37]" />
            <span>10:30 AM – 4:30 PM</span>
          </div>

          <div className="hidden sm:block w-[1px] h-4 bg-[#d4af37]/40" />

          {/* Location */}
          <div className="flex items-center gap-2 text-xs sm:text-base font-cinzel text-amber-100 font-semibold tracking-wider">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>COLOMBO, SRI LANKA</span>
          </div>
        </div>

        {/* PODI WADANAK (Under Date & Time) */}
        <p className="hero-quote font-cursive text-xl sm:text-3xl text-[#d4af37] font-normal tracking-wide max-w-2xl my-2 leading-relaxed drop-shadow-md">
          "Two souls with but a single thought, two hearts that beat as one."
        </p>

        {/* Smooth Scroll Exploration Indicator Button */}
        <div className="hero-scroll-btn mt-8">
          <button
            onClick={() => {
              const nextSection = document.getElementById("chapter-story");
              nextSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-[#d4af37] hover:text-white transition-colors duration-300 group cursor-pointer"
          >
            <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] uppercase">
              Scroll To Discover Our Story
            </span>
            <div className="w-9 h-9 rounded-full border border-[#d4af37]/40 flex items-center justify-center group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/20 transition-all duration-300">
              <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}