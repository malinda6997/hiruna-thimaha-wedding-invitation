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
      // 1. Text reveal with 3D rotation & blur on scroll
      gsap.fromTo(
        ".story-reveal",
        { opacity: 0, y: 60, rotationX: 15, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      // 2. Cinematic Arch Image 3D Scale & Slide Entrance
      gsap.fromTo(
        imgWrapperRef.current,
        {
          opacity: 0,
          scale: 0.75,
          y: 100,
          rotateX: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          duration: 1.6,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imgWrapperRef.current,
            start: "top 75%",
          },
        }
      );

      // 3. Dynamic Parallax on the inside image
      gsap.to(".story-arch-img", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: imgWrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="chapter-story"
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#fbfbfa] text-[#1a1820] py-28 px-6 flex flex-col items-center justify-center overflow-hidden select-none [perspective:1200px]"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

        .story-font-cinzel {
          font-family: 'Cinzel', serif;
        }

        .story-font-lora {
          font-family: 'Lora', serif;
        }

        @keyframes borderBeamLight {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .border-beam-container {
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          overflow: hidden;
          pointer-events-none;
          z-index: 5;
        }
        .border-beam-light {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            transparent 310deg,
            rgba(88, 28, 135, 0.2) 335deg,
            rgba(88, 28, 135, 0.7) 355deg,
            #581c87 360deg
          );
          animation: borderBeamLight 8s linear infinite;
        }

        @keyframes fullBreathLightGlow {
          0%, 100% { opacity: 0.25; transform: scale(0.97); }
          50% { opacity: 0.6; transform: scale(1.03); }
        }
        .animate-light-breath-glow {
          animation: fullBreathLightGlow 4s ease-in-out infinite;
          will-change: opacity, transform;
        }
      `}</style>

      {/* TOP HEADER CONTENT */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-14">
        <span className="story-reveal story-font-lora text-xs sm:text-sm text-[#7e22ce] tracking-[0.3em] uppercase font-semibold mb-3 block">
          A BEAUTIFUL BEGINNING
        </span>

        <h2 className="story-reveal story-font-lora italic text-2xl sm:text-4xl text-[#2e233d] font-normal leading-relaxed mb-4 drop-shadow-sm">
          "එකිනෙකට බැඳුණු දෙහදක, <br className="hidden sm:block" /> අලංකාර සොඳුරු ඇරඹුම..."
        </h2>

        <p className="story-reveal story-font-lora text-sm sm:text-base text-[#554d63] leading-relaxed font-light max-w-xl mx-auto">
          අපගේ ජීවිතයේ සොඳුරුතම පරිච්ඡේදය පටන් ගන්නා මේ මොහොතේ, අපගේ ආදරණීයයන් වන ඔබ සැමගේ ආශීර්වාදය හා සහභාගීත්වය අපි ඉතා ආදරයෙන් අපේක්ෂා කරමු.
        </p>
      </div>

      {/* ARCH-FRAMED IMAGE CONTAINER */}
      <div className="relative flex flex-col items-center mb-14">
        <div className="absolute inset-0 rounded-t-[190px] sm:rounded-t-[230px] rounded-b-3xl bg-gradient-to-r from-purple-300/50 via-purple-500/30 to-indigo-300/50 blur-[35px] pointer-events-none animate-light-breath-glow z-0" />

        <div
          ref={imgWrapperRef}
          className="relative z-10 w-full max-w-md sm:max-w-lg h-[400px] sm:h-[530px] rounded-t-[180px] sm:rounded-t-[220px] rounded-b-3xl overflow-hidden p-[2px] shadow-[0_25px_60px_rgba(88,28,135,0.2)] bg-white"
          style={{ border: "1px solid rgba(126, 34, 206, 0.25)" }}
        >
          <div className="border-beam-container">
            <div className="border-beam-light" />
          </div>

          <div className="w-full h-full rounded-t-[178px] sm:rounded-t-[218px] rounded-b-[22px] overflow-hidden relative bg-[#fbfbfa] z-10">
            <img
              src="/assets/story-img.jpg"
              alt="Hiruna and Thimasha Story"
              className="story-arch-img w-full h-[120%] object-cover object-center -mt-8 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2e233d]/40 via-transparent to-transparent opacity-40" />
          </div>
        </div>
      </div>

      {/* BOTTOM COUPLE DETAILS */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <div className="story-reveal inline-flex items-center gap-2 mb-2">
          <Heart className="w-4 h-4 text-[#7e22ce] fill-[#7e22ce]/30 animate-pulse" />
          <span className="story-font-cinzel text-xs text-[#7e22ce] tracking-[0.3em] uppercase font-semibold">
            THE COUPLE
          </span>
          <Heart className="w-4 h-4 text-[#7e22ce] fill-[#7e22ce]/30 animate-pulse" />
        </div>

        <h3 className="story-reveal story-font-cinzel text-3xl sm:text-5xl font-bold tracking-widest text-[#1a1820] mb-3">
          HIRUNA & THIMASHA
        </h3>

        <p className="story-reveal story-font-lora italic text-sm sm:text-lg text-[#554d63] leading-relaxed max-w-lg mx-auto">
          "සිනහව, සෙනෙහස සහ නොමැකෙන මතකයන් රැසක් සමඟින් අප ගෙවා ආ ගමන, අද සිට සදාතනික ආදරයක ඇරඹුමයි."
        </p>
      </div>
    </section>
  );
}