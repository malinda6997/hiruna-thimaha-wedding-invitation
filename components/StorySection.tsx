"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Heart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Text reveal on scroll
      gsap.fromTo(
        ".story-fade-in",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // 2. Arch Image Reveal & Slow Scale Effect
      gsap.fromTo(
        imgWrapperRef.current,
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgWrapperRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="chapter-story"
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#030206] text-white py-20 px-6 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

        .story-font-cinzel {
          font-family: 'Cinzel', serif;
        }

        .story-font-lora {
          font-family: 'Lora', serif;
        }
      `}</style>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-purple-900/20 blur-[130px] pointer-events-none" />

      {/* TOP HEADER CONTENT */}
      <div ref={textRef} className="relative z-10 text-center max-w-2xl mx-auto mb-12">
        <span className="story-fade-in story-font-lora text-xs sm:text-sm text-purple-300 tracking-[0.3em] uppercase font-semibold mb-3 block">
          A BEAUTIFUL BEGINNING
        </span>

        <h2 className="story-fade-in story-font-lora italic text-2xl sm:text-4xl text-purple-100 font-normal leading-relaxed mb-6 drop-shadow-md">
          "එකිනෙකට බැඳුණු දෙහදක, <br className="hidden sm:block" /> අලංකාර සොඳුරු ඇරඹුම..."
        </h2>

        <p className="story-fade-in story-font-lora text-sm sm:text-base text-purple-200/80 leading-relaxed font-light max-w-xl mx-auto">
          අපගේ ජීවිතයේ සොඳුරුතම පරිච්ඡේදය පටන් ගන්නා මේ මොහොතේ, අපගේ ආදරණීයයන් වන ඔබ සැමගේ ආශීර්වාදය හා සහභාගීත්වය අපි ඉතා ආදරයෙන් අපේක්ෂා කරමු.
        </p>
      </div>

      {/* ARCH-FRAMED IMAGE CONTAINER */}
      <div
        ref={imgWrapperRef}
        className="relative z-10 w-full max-w-md sm:max-w-lg h-[420px] sm:h-[550px] rounded-t-[180px] sm:rounded-t-[220px] rounded-b-3xl overflow-hidden border border-purple-500/20 shadow-[0_10px_40px_rgba(88,28,135,0.3)] bg-purple-950/30 backdrop-blur-sm p-2 mb-12"
      >
        <div className="w-full h-full rounded-t-[172px] sm:rounded-t-[212px] rounded-b-2xl overflow-hidden relative">
          <img
            src="/assets/story-img.jpg"
            alt="Hiruna and Thimasha Story"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent opacity-60" />
        </div>
      </div>

      {/* BOTTOM COUPLE DETAILS SECTION */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <div className="story-fade-in inline-flex items-center gap-2 mb-3">
          <Heart className="w-4 h-4 text-purple-400 fill-purple-400/30" />
          <span className="story-font-cinzel text-xs text-purple-300 tracking-[0.3em] uppercase">
            THE COUPLE
          </span>
          <Heart className="w-4 h-4 text-purple-400 fill-purple-400/30" />
        </div>

        <h3 className="story-fade-in story-font-cinzel text-3xl sm:text-5xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-4">
          HIRUNA & THIMASHA
        </h3>

        <p className="story-fade-in story-font-lora italic text-sm sm:text-lg text-purple-200/90 leading-relaxed max-w-lg mx-auto">
          "සිනහව, සෙනෙහස සහ නොමැකෙන මතකයන් රැසක් සමඟින් අප ගෙවා ආ ගමන, අද සිට සදාතනික ආදරයක ඇරඹුමයි."
        </p>
      </div>
    </section>
  );
}