"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Heart, MapPin, Calendar, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WeInviteSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const petalsContainerRef = useRef<HTMLDivElement>(null);

  // Rose petals falling generator for the image box
  useEffect(() => {
    const container = petalsContainerRef.current;
    if (!container) return;

    const petalCount = 12;
    const petals: HTMLDivElement[] = [];

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement("div");
      petal.className = "absolute pointer-events-none rounded-full bg-pink-300/60 blur-[0.5px]";
      
      // Random sizes, starting positions and opacity
      const size = Math.random() * 8 + 6;
      const startX = Math.random() * container.offsetWidth;
      const duration = Math.random() * 4 + 3;
      const delay = Math.random() * 5;

      petal.style.width = `${size}px`;
      petal.style.height = `${size * 1.4}px`;
      petal.style.left = `${startX}px`;
      petal.style.top = `-20px`;
      petal.style.borderRadius = "60% 40% 60% 40%";

      container.appendChild(petal);
      petals.push(petal);

      // GSAP Fall Animation
      gsap.to(petal, {
        y: container.offsetHeight + 40,
        x: `+=${(Math.random() - 0.5) * 80}`,
        rotation: Math.random() * 360,
        duration: duration,
        repeat: -1,
        delay: delay,
        ease: "none",
      });
    }

    return () => {
      petals.forEach((p) => p.remove());
    };
  }, []);

  useGSAP(
    () => {
      // Left Image Entrance Animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      // Right Content Stagger Animation
      gsap.fromTo(
        ".invite-reveal",
        { opacity: 0, y: 40, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#fbfbfa] text-[#1a1820] py-24 px-6 sm:px-12 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

        .invite-font-cinzel {
          font-family: 'Cinzel', serif;
        }
        .invite-font-lora {
          font-family: 'Lora', serif;
        }
      `}</style>

      {/* MAIN CONTAINER (GRID: LEFT IMAGE, RIGHT DETAILS) */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* LEFT SIDE: COUPLE IMAGE WITH FALLING ROSE PETALS */}
        <div ref={imageRef} className="lg:col-span-5 flex justify-center relative">
          
          {/* Rose Petals Overlay Container */}
          <div
            ref={petalsContainerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none z-20 rounded-2xl"
          />

          <div className="w-full max-w-sm sm:max-w-md h-[450px] sm:h-[550px] flex items-center justify-center relative z-10">
            <img
              src="/assets/invite-couple.png"
              alt="Hiruna and Thimasha Invitation"
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>

        {/* RIGHT SIDE: INVITATION DETAILS */}
        <div ref={contentRef} className="lg:col-span-7 flex flex-col text-center lg:text-left">
          
          {/* TOP BADGE */}
          <div className="invite-reveal inline-flex items-center justify-center lg:justify-start gap-2 mb-3">
            <Heart className="w-4 h-4 text-[#7e22ce] fill-[#7e22ce]/30" />
            <span className="invite-font-lora text-xs sm:text-sm text-[#7e22ce] tracking-[0.3em] uppercase font-semibold">
              WITH GREAT JOY
            </span>
            <Heart className="w-4 h-4 text-[#7e22ce] fill-[#7e22ce]/30" />
          </div>

          {/* MAIN TITLE WITH 'YOU' HIGHLIGHTED */}
          <h2 className="invite-reveal invite-font-lora text-3xl sm:text-5xl font-extrabold tracking-wide text-[#1a1820] mb-4">
            We Invite <span className="text-[#7e22ce] italic font-lora">You</span>
          </h2>

          {/* INVITATION PARAGRAPH */}
          <p className="invite-reveal invite-font-lora text-sm sm:text-base text-[#554d63] leading-relaxed font-light mb-8 max-w-xl">
            Together with our families, we joyfully invite you to celebrate our wedding day. Your presence, love, and blessings mean the world to us as we begin this new chapter together.
          </p>

          {/* DETAILS BOX */}
          <div className="invite-reveal flex flex-col gap-4 bg-white p-6 rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/5 max-w-xl">
            
            {/* DATE */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 border border-purple-200">
                <Calendar className="w-4 h-4 text-[#7e22ce]" />
              </div>
              <div className="text-left">
                <h4 className="invite-font-cinzel text-sm font-bold text-[#1a1820] uppercase tracking-wider">
                  Date
                </h4>
                <p className="invite-font-lora text-sm text-[#554d63]">
                  Sunday, November 15, 2026
                </p>
              </div>
            </div>

            {/* TIME */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 border border-purple-200">
                <Clock className="w-4 h-4 text-[#7e22ce]" />
              </div>
              <div className="text-left">
                <h4 className="invite-font-cinzel text-sm font-bold text-[#1a1820] uppercase tracking-wider">
                  Time
                </h4>
                <p className="invite-font-lora text-sm text-[#554d63]">
                  Auspicious Time: 10:30 AM onwards
                </p>
              </div>
            </div>

            {/* VENUE */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 border border-purple-200">
                <MapPin className="w-4 h-4 text-[#7e22ce]" />
              </div>
              <div className="text-left">
                <h4 className="invite-font-cinzel text-sm font-bold text-[#1a1820] uppercase tracking-wider">
                  Location / Venue
                </h4>
                <p className="invite-font-lora text-sm text-[#554d63]">
                  Grand Cinnamon Ballroom, Colombo, Sri Lanka
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}