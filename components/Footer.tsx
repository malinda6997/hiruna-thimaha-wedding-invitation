"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Heart, Phone, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".footer-reveal",
        { opacity: 0, y: 30, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <footer
      ref={containerRef}
      className="relative min-h-[70vh] w-full bg-[#fbfbfa] text-[#1a1820] py-20 px-6 flex flex-col items-center justify-between overflow-hidden select-none"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

        .footer-font-cinzel {
          font-family: 'Cinzel', serif;
        }
        .footer-font-lora {
          font-family: 'Lora', serif;
        }
      `}</style>

      {/* TOP CONTENT */}
      <div className="footer-reveal text-center max-w-xl mx-auto my-auto flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50 mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#7e22ce]" />
          <span className="footer-font-lora text-[11px] sm:text-xs text-[#7e22ce] tracking-[0.25em] uppercase font-semibold">
            FOREVER TOGETHER
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#7e22ce]" />
        </div>

        <h2 className="footer-font-cinzel text-3xl sm:text-5xl font-extrabold tracking-wider text-[#1a1820] mb-3">
          Hiruna & Thimasha
        </h2>

        <p className="footer-font-lora italic text-sm sm:text-base text-[#554d63] mb-8">
          Thank you for being part of our special beginning.
        </p>

        {/* COUPLE CONTACT NUMBERS WITH NAMES */}
        <div className="footer-reveal flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
          
          {/* HIRUNA'S NUMBER */}
          <a
            href="tel:+94700000000"
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-purple-100 shadow-md shadow-purple-950/5 hover:border-purple-300 hover:scale-105 transition-all duration-300 text-left footer-font-lora"
          >
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center border border-purple-200 flex-shrink-0">
              <Phone className="w-4 h-4 text-[#7e22ce]" />
            </div>
            <div>
              <span className="block text-[11px] font-bold tracking-wider text-[#7e22ce] uppercase footer-font-cinzel">
                Hiruna
              </span>
              <span className="text-sm font-medium text-[#1a1820]">
                +94 70 000 0000
              </span>
            </div>
          </a>

          {/* THIMASHA'S NUMBER */}
          <a
            href="tel:+94710000000"
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-purple-100 shadow-md shadow-purple-950/5 hover:border-purple-300 hover:scale-105 transition-all duration-300 text-left footer-font-lora"
          >
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center border border-purple-200 flex-shrink-0">
              <Phone className="w-4 h-4 text-[#7e22ce]" />
            </div>
            <div>
              <span className="block text-[11px] font-bold tracking-wider text-[#7e22ce] uppercase footer-font-cinzel">
                Thimasha
              </span>
              <span className="text-sm font-medium text-[#1a1820]">
                +94 71 000 0000
              </span>
            </div>
          </a>

        </div>

      </div>

      {/* BOTTOM COPYRIGHT & DEVELOPED BY */}
      <div className="footer-reveal w-full max-w-4xl mx-auto pt-8 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#554d63] footer-font-lora text-center sm:text-left">
        
        <p>© 2026 Hiruna & Thimasha. All Rights Reserved.</p>

        <p className="flex items-center justify-center gap-1.5 font-medium">
          <span>Developed with</span>
          <Heart className="w-3.5 h-3.5 text-[#7e22ce] fill-[#7e22ce]" />
          <span>by <strong className="text-[#1a1820] footer-font-cinzel tracking-wider">Malinda Prabath</strong></span>
        </p>

      </div>
    </footer>
  );
}