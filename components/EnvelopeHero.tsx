"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Sparkles, Calendar, MapPin, Heart } from "lucide-react";

interface EnvelopeHeroProps {
  onOpen?: () => void;
}

export default function EnvelopeHero({ onOpen }: EnvelopeHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const flapRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);
    if (onOpen) onOpen();

    const tl = gsap.timeline();

    // 1. Wax Seal Disappear
    tl.to(".wax-seal-wrapper", {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "back.in(1.5)",
    })
      // 2. Open Flap 180 deg
      .to(flapRef.current, {
        rotateX: 180,
        duration: 0.7,
        ease: "power2.inOut",
        transformOrigin: "top center",
      })
      // 3. Move Flap Behind Letter Z-index
      .set(flapRef.current, { zIndex: 2 })

      // 4. Smooth Slide Card Upwards to Screen Center
      .to(letterRef.current, {
        y: "-110%",
        zIndex: 25,
        duration: 0.8,
        ease: "power3.out",
      })
      // 5. Slightly expand card for clear viewing
      .to(letterRef.current, {
        scale: 1.05,
        y: "-65%",
        duration: 0.5,
        ease: "back.out(1.2)",
      })
      // 6. Fade In Text Content
      .to(".card-inner-text", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-4 sm:p-6 bg-[#070b19] overflow-hidden select-none"
    >
      {/* Background Soft Glow */}
      <div className="absolute w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#d4af37]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Guide Header */}
      {!isOpen && (
        <div className="text-center z-10 mb-8 animate-pulse px-2">
          <p className="font-cinzel text-xs sm:text-sm text-[#d4af37] tracking-[0.3em] uppercase">
            Official Wedding Invitation
          </p>
          <p className="font-sinhala text-xs text-amber-100/70 mt-1">
            ලිපිය විවෘත කිරීමට OPEN WAX SEAL එක ක්ලික් කරන්න
          </p>
        </div>
      )}

      {/* Main Responsive Envelope Base Wrapper */}
      <div className="relative w-full max-w-[340px] sm:max-w-[440px] h-[220px] sm:h-[270px] perspective-1000 flex justify-center items-end mt-12 sm:mt-16">
        
        {/* Base Drop Shadow */}
        <div className="absolute -bottom-4 w-4/5 h-6 bg-black/90 rounded-full blur-md" />

        {/* 1. THE INVITATION CARD (Hidden Inside Initially) */}
        <div
          ref={letterRef}
          className="absolute bottom-2 w-[90%] h-[340px] sm:h-[400px] bg-gradient-to-b from-[#0e172e] via-[#091024] to-[#070b19] rounded-xl border border-[#d4af37]/40 p-5 sm:p-6 shadow-2xl flex flex-col items-center justify-between text-center z-0"
        >
          <div className="card-inner-text opacity-0 translate-y-3">
            <span className="font-cursive text-2xl sm:text-3xl text-[#d4af37]">
              Together with their families
            </span>
            <h1 className="font-cinzel text-xl sm:text-3xl font-extrabold gold-gradient-text my-2 tracking-wider">
              HIRUNA & KAVEESHA
            </h1>
            <p className="font-sinhala text-xs sm:text-sm text-amber-100/90 leading-relaxed max-w-xs">
              අපගේ අභිනව විවාහ මංගලෝත්සවයේ ප්‍රීතිය ඔබ සැම හා බෙදාගනු වස් ආදරයෙන් ඇරයුම් කරමු.
            </p>
          </div>

          <div className="card-inner-text opacity-0 translate-y-3 my-2 border-y border-[#d4af37]/20 py-3 w-full flex justify-around text-[10px] sm:text-xs font-cinzel text-amber-200">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>DECEMBER 18, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>COLOMBO, SRI LANKA</span>
            </div>
          </div>

          <div className="card-inner-text opacity-0 translate-y-3 w-full">
            <button
              onClick={() => {
                const nextSection = document.getElementById("chapter-story");
                nextSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 py-2 rounded-full border border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10 hover:bg-[#d4af37] hover:text-black transition-all duration-300 font-cinzel text-[11px] sm:text-xs tracking-widest uppercase flex items-center justify-center gap-2 mx-auto cursor-pointer shadow-md active:scale-95"
            >
              <span>Explore Full Story</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2. ENVELOPE BACK PANEL */}
        <div className="absolute inset-0 bg-[#090f20] rounded-b-xl z-0" />

        {/* 3. ENVELOPE FRONT POCKET (V-Cut Front Face) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0c142e] to-[#070c1b] border-b border-x border-[#d4af37]/40 rounded-b-xl z-20 pointer-events-none shadow-2xl"
          style={{
            clipPath: "polygon(0 0, 50% 48%, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Decorative Inner Gold V-Line */}
        <div
          className="absolute inset-0 border-b border-x border-[#d4af37]/20 rounded-b-xl z-20 pointer-events-none"
          style={{
            clipPath: "polygon(0 0, 50% 45%, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* 4. ENVELOPE TOP FLAP (Closes Envelope completely) */}
        <div
          ref={flapRef}
          className="absolute top-0 w-full h-full bg-gradient-to-b from-[#0e1730] to-[#090f24] border-t border-x border-[#d4af37]/40 rounded-t-xl z-30 origin-top shadow-md flex justify-center"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 50%)",
          }}
        >
          {/* Inner Gold Flap Border */}
          <div
            className="absolute inset-0 border-t border-x border-[#d4af37]/20 rounded-t-xl pointer-events-none"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 47%)" }}
          />
        </div>

        {/* 5. RED & GOLD WAX SEAL BUTTON */}
        {!isOpen && (
          <div className="wax-seal-wrapper absolute top-[36%] z-40 flex items-center justify-center">
            <button
              onClick={handleOpenEnvelope}
              className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#8b0000] via-[#700000] to-[#3a0000] border-2 border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)] flex flex-col items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 group"
            >
              <div className="absolute inset-1 rounded-full border border-[#d4af37]/40 pointer-events-none" />
              <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37] mb-0.5 group-hover:scale-125 transition-transform" />
              <span className="font-cinzel text-[8px] sm:text-[9px] font-bold text-[#f9e79f] tracking-wider uppercase">
                OPEN
              </span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}