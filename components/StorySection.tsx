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

  useGSAP(
    () => {
      // 1. Header Text Staggered Reveal
      gsap.fromTo(
        ".story-reveal",
        { opacity: 0, y: 40, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // 2. Cinematic 3D Arch Image Entrance Animation
      gsap.fromTo(
        imgWrapperRef.current,
        {
          opacity: 0,
          scale: 0.85,
          y: 70,
          rotateX: 12,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imgWrapperRef.current,
            start: "top 80%",
          },
        }
      );

      // 3. Subtle Parallax Effect on Scroll
      gsap.to(".story-arch-img", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: imgWrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="chapter-story"
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#030206] text-white py-20 px-6 flex flex-col items-center justify-center overflow-hidden select-none [perspective:1000px]"
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

      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-purple-900/15 blur-[130px] pointer-events-none" />

      {/* TOP HEADER CONTENT */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
        <span className="story-reveal story-font-lora text-xs sm:text-sm text-purple-300 tracking-[0.3em] uppercase font-semibold mb-3 block">
          A BEAUTIFUL BEGINNING
        </span>

        <h2 className="story-reveal story-font-lora italic text-2xl sm:text-4xl text-purple-100 font-normal leading-relaxed mb-4 drop-shadow-md">
          "එකිනෙකට බැඳුණු දෙහදක, <br className="hidden sm:block" /> අලංකාර සොඳුරු ඇරඹුම..."
        </h2>

        <p className="story-reveal story-font-lora text-sm sm:text-base text-purple-200/80 leading-relaxed font-light max-w-xl mx-auto">
          අපගේ ජීවිතයේ සොඳුරුතම පරිච්ඡේදය පටන් ගන්නා මේ මොහොතේ, අපගේ ආදරණීයයන් වන ඔබ සැමගේ ආශීර්වාදය හා සහභාගීත්වය අපි ඉතා ආදරයෙන් අපේක්ෂා කරමු.
        </p>
      </div>

      {/* ARCH-FRAMED IMAGE CONTAINER WITH 3D GSAP ANIMATION */}
      <div
        ref={imgWrapperRef}
        className="relative z-10 w-full max-w-md sm:max-w-lg h-[400px] sm:h-[530px] rounded-t-[180px] sm:rounded-t-[220px] rounded-b-3xl overflow-hidden border border-purple-500/30 shadow-[0_15px_50px_rgba(88,28,135,0.35)] bg-purple-950/20 backdrop-blur-md p-2 mb-10 transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)]"
      >
        <div className="w-full h-full rounded-t-[172px] sm:rounded-t-[212px] rounded-b-2xl overflow-hidden relative">
          <img
            src="/assets/story-img.jpg"
            alt="Hiruna and Thimasha Story"
            className="story-arch-img w-full h-[115%] object-cover object-center -mt-6 will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent opacity-60" />
        </div>
      </div>

      {/* BOTTOM COUPLE DETAILS */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <div className="story-reveal inline-flex items-center gap-2 mb-2">
          <Heart className="w-4 h-4 text-purple-400 fill-purple-400/30" />
          <span className="story-font-cinzel text-xs text-purple-300 tracking-[0.3em] uppercase">
            THE COUPLE
          </span>
          <Heart className="w-4 h-4 text-purple-400 fill-purple-400/30" />
        </div>

        <h3 className="story-reveal story-font-cinzel text-3xl sm:text-5xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-3">
          HIRUNA & THIMASHA
        </h3>

        <p className="story-reveal story-font-lora italic text-sm sm:text-lg text-purple-200/90 leading-relaxed max-w-lg mx-auto">
          "සිනහව, සෙනෙහස සහ නොමැකෙන මතකයන් රැසක් සමඟින් අප ගෙවා ආ ගමන, අද සිට සදාතනික ආදරයක ඇරඹුමයි."
        </p>
      </div>
    </section>
  );
}