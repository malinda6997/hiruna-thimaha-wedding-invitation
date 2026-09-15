"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sparkles } from "lucide-react";

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
    { src: "/assets/p1.jpg", title: "Engagement Moment I" },
    { src: "/assets/p2.jpg", title: "Engagement Moment II" },
    { src: "/assets/p3.jpg", title: "Engagement Moment III" },
    { src: "/assets/p4.jpg", title: "Engagement Moment IV" },
    { src: "/assets/p5.jpg", title: "Engagement Moment V" },
    { src: "/assets/p6.jpg", title: "Engagement Moment VI" },
    { src: "/assets/p7.jpg", title: "Engagement Moment VII" },
    { src: "/assets/p8.jpg", title: "Engagement Moment VIII" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#fbfbfa] text-[#1a1820] overflow-hidden flex flex-col justify-center select-none pt-20"
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

      {/* FLOATING HEADER WITH PROPER GAP & PURE WHITE BG FRIENDLY ACCENTS */}
      <div className="absolute top-6 left-6 sm:left-12 z-30 flex flex-col pointer-events-none mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-50 mb-2 w-max shadow-sm">
          <Sparkles className="w-3 h-3 text-[#7e22ce]" />
          <span className="gal-font-lora text-[10px] sm:text-xs text-[#7e22ce] tracking-[0.25em] uppercase font-semibold">
            ENGAGEMENT GALLERY
          </span>
        </div>
        <h2 className="gal-font-cinzel text-xl sm:text-3xl font-extrabold tracking-wide text-[#1a1820]">
          Our Precious <span className="text-[#7e22ce] italic font-serif">Story</span>
        </h2>
      </div>

      {/* HORIZONTAL TRACK WITH GAP FOR TITLE */}
      <div
        ref={trackRef}
        className="flex items-center w-max h-full pt-16"
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center p-4 sm:p-12 overflow-hidden"
          >
            {/* FULLSCREEN IMAGE CONTAINER WITH WHITE THEME COMPATIBILITY */}
            <div className="relative w-full h-full max-w-5xl max-h-[78vh] rounded-3xl overflow-hidden shadow-2xl bg-white border border-purple-100 flex items-center justify-center mt-12 sm:mt-16">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
              />

              {/* GRADIENT OVERLAY FOR TEXT */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent flex flex-col justify-end p-8 sm:p-12">
                <span className="gal-font-cinzel text-xs sm:text-sm font-bold text-purple-200 uppercase tracking-[0.3em] mb-2">
                  Memory 0{index + 1} / 08
                </span>
                <h3 className="gal-font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
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