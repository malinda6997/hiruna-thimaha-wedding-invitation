"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onFinished: () => void;
}

export default function Preloader({ onFinished }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 1.05,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: onFinished,
          });
        },
      });

      // 1. White stroke outline drawing animation
      tl.fromTo(
        ".invitation-text-path",
        { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 3,
          ease: "power2.inOut",
        }
      )
        // 2. Pure White Fill animation
        .to(
          ".invitation-text-path",
          {
            fill: "#ffffff",
            duration: 0.8,
          },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onFinished]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] bg-[#030303] flex flex-col items-center justify-center overflow-hidden p-4 select-none"
    >
      {/* Subtle White Glow Background */}
      <div className="absolute w-[320px] h-[320px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Responsive SVG Container with Adjusted ViewBox */}
      <svg
        viewBox="0 0 1200 200"
        className="w-[95%] sm:w-[800px] md:w-[950px] h-auto relative z-10 overflow-visible"
      >
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            className="invitation-text-path font-cinzel text-[36px] sm:text-[48px] md:text-[56px] tracking-[0.25em] font-medium uppercase"
          >
            An Invitation for You
          </text>
        </g>
      </svg>
    </div>
  );
}