"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sparkles, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EngagementGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + track.scrollWidth,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    },
    { scope: containerRef }
  );

  const photos = [
    { src: "/assets/p1.jpg", title: "Moment I" },
    { src: "/assets/p2.jpg", title: "Moment II" },
    { src: "/assets/p3.jpg", title: "Moment III" },
    { src: "/assets/p4.jpg", title: "Moment IV" },
    { src: "/assets/p5.jpg", title: "Moment V" },
    { src: "/assets/p6.jpg", title: "Moment VI" },
    { src: "/assets/p7.jpg", title: "Moment VII" },
    { src: "/assets/p8.jpg", title: "Moment VIII" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#fbfbfa] text-[#1a1820] overflow-hidden flex flex-col justify-center select-none"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

        .gal-font-cinzel {
          font-family: 'Cinzel', serif;
        }
        .gal-font-lora {
          font-family: 'Lora', serif;
        }
      `}</style>

      {/* HEADER TOP INFO */}
      <div className="absolute top-6 left-6 sm:left-12 z-20 flex flex-col">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-50 mb-1.5 w-max shadow-sm">
          <Sparkles className="w-3 h-3 text-[#7e22ce]" />
          <span className="gal-font-lora text-[10px] sm:text-xs text-[#7e22ce] tracking-[0.25em] uppercase font-semibold">
            ENGAGEMENT GALLERY
          </span>
        </div>
        <h2 className="gal-font-cinzel text-xl sm:text-4xl font-extrabold tracking-wide text-[#1a1820]">
          Our Precious <span className="text-[#7e22ce] italic font-serif">Story</span>
        </h2>
      </div>

      <div className="absolute top-8 right-8 z-20 hidden sm:flex items-center gap-2 text-xs font-semibold text-[#554d63] gal-font-lora">
        <span>Scroll to Explore</span>
        <ArrowRight className="w-4 h-4 text-[#7e22ce] animate-pulse" />
      </div>

      {/* HORIZONTAL MOVING TRACK WITH REDUCED PADDING & BALANCED SPACING */}
      <div
        ref={trackRef}
        className="flex items-center gap-5 sm:gap-8 px-4 sm:px-12 w-max h-full pt-12"
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative w-[260px] sm:w-[360px] h-[340px] sm:h-[450px] rounded-2xl overflow-hidden bg-white border border-purple-100 shadow-xl shadow-purple-950/10 flex-shrink-0 p-2.5 transition-transform duration-500 hover:-translate-y-1.5"
          >
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* GRADIENT OVERLAY & TITLE */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="gal-font-cinzel text-[10px] sm:text-xs font-bold text-purple-300 uppercase tracking-widest mb-1">
                  Memory {index + 1}
                </span>
                <h3 className="gal-font-cinzel text-base sm:text-xl font-bold text-white">
                  {photo.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}