"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Calendar } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CountdownSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetDate = new Date("2026-11-15T10:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  useGSAP(
    () => {
      // 1. Header Animation
      gsap.fromTo(
        ".count-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // 2. 3D Card Flip & Glow Reveal Animation
      gsap.fromTo(
        ".countdown-card",
        {
          opacity: 0,
          y: 50,
          scale: 0.85,
          rotateY: -25,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 1,
          stagger: 0.12,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".countdown-cards-container",
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] w-full bg-[#030206] text-white py-16 px-4 flex flex-col items-center justify-center overflow-hidden select-none [perspective:1000px]"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

        .count-font-cinzel {
          font-family: 'Cinzel', serif;
        }

        .count-font-lora {
          font-family: 'Lora', serif;
        }
      `}</style>

      {/* AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] rounded-full bg-purple-900/15 blur-[120px] pointer-events-none" />

      {/* HEADER SECTION */}
      <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
        <div className="count-reveal inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-400/30 bg-purple-950/40 backdrop-blur-md mb-3 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
          <Calendar className="w-3.5 h-3.5 text-purple-300" />
          <span className="count-font-lora text-[11px] sm:text-xs text-purple-200 tracking-[0.25em] uppercase font-semibold">
            COUNTING DOWN TO FOREVER
          </span>
        </div>

        <h2 className="count-reveal count-font-cinzel text-3xl sm:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white my-2">
          Our Wedding Day
        </h2>

        <p className="count-reveal count-font-lora italic text-sm sm:text-lg text-purple-200/80 mt-1">
          2026 නොවැම්බර් 15 • පෙ.ව. 10:30
        </p>
      </div>

      {/* COUNTDOWN TIMER GRID WITH STAGGERED REVEAL */}
      <div className="countdown-cards-container relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl mx-auto px-2">
        {/* DAYS */}
        <div className="countdown-card flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-purple-950/50 to-black/70 border border-purple-500/30 backdrop-blur-xl shadow-xl shadow-purple-950/30 group hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-500">
          <span className="count-font-cinzel text-4xl sm:text-6xl font-black text-white tracking-wider group-hover:scale-105 transition-transform duration-300">
            {formatNumber(timeLeft.days)}
          </span>
          <span className="count-font-lora text-[10px] sm:text-xs text-purple-300/80 tracking-[0.2em] uppercase font-medium mt-2">
            දින (DAYS)
          </span>
        </div>

        {/* HOURS */}
        <div className="countdown-card flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-purple-950/50 to-black/70 border border-purple-500/30 backdrop-blur-xl shadow-xl shadow-purple-950/30 group hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-500">
          <span className="count-font-cinzel text-4xl sm:text-6xl font-black text-white tracking-wider group-hover:scale-105 transition-transform duration-300">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="count-font-lora text-[10px] sm:text-xs text-purple-300/80 tracking-[0.2em] uppercase font-medium mt-2">
            පැය (HOURS)
          </span>
        </div>

        {/* MINUTES */}
        <div className="countdown-card flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-purple-950/50 to-black/70 border border-purple-500/30 backdrop-blur-xl shadow-xl shadow-purple-950/30 group hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-500">
          <span className="count-font-cinzel text-4xl sm:text-6xl font-black text-white tracking-wider group-hover:scale-105 transition-transform duration-300">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="count-font-lora text-[10px] sm:text-xs text-purple-300/80 tracking-[0.2em] uppercase font-medium mt-2">
            මිනිත්තු (MINUTES)
          </span>
        </div>

        {/* SECONDS */}
        <div className="countdown-card flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-purple-950/50 to-black/70 border border-purple-500/30 backdrop-blur-xl shadow-xl shadow-purple-950/30 group hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-500">
          <span className="count-font-cinzel text-4xl sm:text-6xl font-black text-purple-200 tracking-wider group-hover:scale-105 transition-transform duration-300">
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="count-font-lora text-[10px] sm:text-xs text-purple-300/80 tracking-[0.2em] uppercase font-medium mt-2">
            තත්පර (SECONDS)
          </span>
        </div>
      </div>
    </section>
  );
}