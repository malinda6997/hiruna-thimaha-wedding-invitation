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

  useGSAP(
    () => {
      gsap.fromTo(
        ".story-reveal",
        { opacity: 0, y: 35, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#fbfbfa] text-[#1a1820] py-20 px-6 flex flex-col items-center justify-center overflow-hidden select-none"
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

      {/* CENTERED VERTICAL CONTAINER */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center text-center">
        
        {/* ARCH / DOME SHAPE IMAGE CONTAINER */}
        <div className="story-reveal relative w-[280px] sm:w-[340px] h-[360px] sm:h-[420px] rounded-t-[180px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-purple-100 bg-purple-50 mb-8 p-1">
          <div className="w-full h-full rounded-t-[170px] rounded-b-2xl overflow-hidden relative">
            <img
              src="/assets/p5.jpg"
              alt="Hiruna and Thimasha"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* THE COUPLE BADGE */}
        <div className="story-reveal inline-flex items-center gap-2 mb-2">
          <Heart className="w-3.5 h-3.5 text-[#7e22ce] fill-[#7e22ce]/30" />
          <span className="story-font-lora text-xs text-[#7e22ce] tracking-[0.3em] uppercase font-semibold">
            THE COUPLE
          </span>
          <Heart className="w-3.5 h-3.5 text-[#7e22ce] fill-[#7e22ce]/30" />
        </div>

        {/* NAMES */}
        <h2 className="story-reveal story-font-cinzel text-3xl sm:text-4xl font-extrabold tracking-wider text-[#1a1820] mb-4 uppercase">
          Hiruna & Thimasha
        </h2>

        {/* QUOTE */}
        <p className="story-reveal story-font-lora italic text-sm sm:text-base text-[#554d63] leading-relaxed font-light max-w-sm">
          &ldquo;Our journey of love, laughter, and endless memories leads us to this forever moment.&rdquo;
        </p>

      </div>
    </section>
  );
}