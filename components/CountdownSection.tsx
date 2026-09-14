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
      // 1. Header Cinematic Entrance
      gsap.fromTo(
        ".count-reveal",
        { opacity: 0, y: 50, filter: "blur(8px)" },
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

      // 2. Dynamic 3D Card Staggered Rotation & Spring Bounce
      gsap.fromTo(
        ".countdown-card",
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
          rotationX: 30,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.7)",
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
      className="relative min-h-[70vh] w-full bg-[#fbfbfa] text-[#1a1820] py-24 px-4 flex flex-col items-center justify-center overflow-hidden select-none [perspective:1200px]"
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

      {/* HEADER SECTION */}
      <div className="text-center max-w-xl mx-auto mb-12 relative z-10">
        <div className="count-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-300/60 bg-purple-50/80 backdrop-blur-md mb-3 shadow-sm">
          <Calendar className="w-3.5 h-3.5 text-[#7e22ce]" />
          <span className="count-font-lora text-[11px] sm:text-xs text-[#7e22ce] tracking-[0.25em] uppercase font-semibold">
            COUNTING DOWN TO FOREVER
          </span>
        </div>

        <h2 className="count-reveal count-font-cinzel text-3xl sm:text-5xl font-extrabold tracking-wider text-[#1a1820] my-2">
          Our Wedding Day
        </h2>

        <p className="count-reveal count-font-lora italic text-sm sm:text-lg text-[#554d63] mt-1">
          2026 නොවැම්බර් 15 • පෙ.ව. 10:30
        </p>
      </div>

      {/* COUNTDOWN TIMER GRID */}
      <div className="countdown-cards-container relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl mx-auto px-2">
        {/* DAYS */}
        <div className="countdown-card flex flex-col items-center justify-center p-5 sm:p-7 rounded-2xl bg-white border border-purple-100 shadow-xl shadow-purple-950/5 group hover:border-purple-300 hover:shadow-[0_15px_40px_rgba(126,34,206,0.12)] hover:-translate-y-1.5 transition-all duration-500">
          <span className="count-font-cinzel text-4xl sm:text-6xl font-black text-[#1a1820] tracking-wider group-hover:scale-105 transition-transform duration-300">
            {formatNumber(timeLeft.days)}
          </span>
          <span className="count-font-lora text-[10px] sm:text-xs text-[#7e22ce] tracking-[0.2em] uppercase font-semibold mt-2">
            දින (DAYS)
          </span>
        </div>

        {/* HOURS */}
        <div className="countdown-card flex flex-col items-center justify-center p-5 sm:p-7 rounded-2xl bg-white border border-purple-100 shadow-xl shadow-purple-950/5 group hover:border-purple-300 hover:shadow-[0_15px_40px_rgba(126,34,206,0.12)] hover:-translate-y-1.5 transition-all duration-500">
          <span className="count-font-cinzel text-4xl sm:text-6xl font-black text-[#1a1820] tracking-wider group-hover:scale-105 transition-transform duration-300">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="count-font-lora text-[10px] sm:text-xs text-[#7e22ce] tracking-[0.2em] uppercase font-semibold mt-2">
            පැය (HOURS)
          </span>
        </div>

        {/* MINUTES */}
        <div className="countdown-card flex flex-col items-center justify-center p-5 sm:p-7 rounded-2xl bg-white border border-purple-100 shadow-xl shadow-purple-950/5 group hover:border-purple-300 hover:shadow-[0_15px_40px_rgba(126,34,206,0.12)] hover:-translate-y-1.5 transition-all duration-500">
          <span className="count-font-cinzel text-4xl sm:text-6xl font-black text-[#1a1820] tracking-wider group-hover:scale-105 transition-transform duration-300">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="count-font-lora text-[10px] sm:text-xs text-[#7e22ce] tracking-[0.2em] uppercase font-semibold mt-2">
            මිනිත්තු (MINUTES)
          </span>
        </div>

        {/* SECONDS */}
        <div className="countdown-card flex flex-col items-center justify-center p-5 sm:p-7 rounded-2xl bg-white border border-purple-100 shadow-xl shadow-purple-950/5 group hover:border-purple-300 hover:shadow-[0_15px_40px_rgba(126,34,206,0.12)] hover:-translate-y-1.5 transition-all duration-500">
          <span className="count-font-cinzel text-4xl sm:text-6xl font-black text-[#7e22ce] tracking-wider group-hover:scale-105 transition-transform duration-300">
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="count-font-lora text-[10px] sm:text-xs text-[#7e22ce] tracking-[0.2em] uppercase font-semibold mt-2">
            තත්පර (SECONDS)
          </span>
        </div>
      </div>
    </section>
  );
}