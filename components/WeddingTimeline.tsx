"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Clock, Sparkles, Utensils, Music, Heart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WeddingTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".timeline-reveal",
        { opacity: 0, y: 40, filter: "blur(8px)" },
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

      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -30, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-list",
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const events = [
    {
      time: "09:30 AM",
      title: "Arrival of Guests",
      description: "Welcoming all our beloved family and friends to the venue.",
      icon: <Sparkles className="w-5 h-5 text-[#7e22ce]" />,
    },
    {
      time: "10:30 AM",
      title: "Poruwa Ceremony",
      description: "The auspicious traditional poruwa rituals and exchanging vows.",
      icon: <Heart className="w-5 h-5 text-[#7e22ce]" />,
    },
    {
      time: "11:45 AM",
      title: "Blessings & Photography",
      description: "Capturing precious moments and receiving warm wishes from guests.",
      icon: <Clock className="w-5 h-5 text-[#7e22ce]" />,
    },
    {
      time: "12:30 PM",
      title: "Wedding Reception & Lunch",
      description: "Celebrating together with a grand feast, music, and joy.",
      icon: <Utensils className="w-5 h-5 text-[#7e22ce]" />,
    },
    {
      time: "04:30 PM",
      title: "Going Away",
      description: "Bidding farewell as we embark on our journey together.",
      icon: <Music className="w-5 h-5 text-[#7e22ce]" />,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#fbfbfa] text-[#1a1820] py-28 px-6 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

        .time-font-cinzel {
          font-family: 'Cinzel', serif;
        }
        .time-font-lora {
          font-family: 'Lora', serif;
        }
      `}</style>

      {/* HEADER */}
      <div className="text-center max-w-xl mx-auto mb-16 relative z-10">
        <span className="timeline-reveal time-font-lora text-xs sm:text-sm text-[#7e22ce] tracking-[0.3em] uppercase font-semibold mb-3 block">
          SPECIAL MOMENTS
        </span>

        <h2 className="timeline-reveal time-font-cinzel text-3xl sm:text-5xl font-extrabold tracking-wider text-[#1a1820] my-2">
          Wedding Timeline
        </h2>

        <p className="timeline-reveal time-font-lora italic text-sm sm:text-lg text-[#554d63] mt-2">
          A glimpse into the auspicious schedule of our celebration.
        </p>
      </div>

      {/* TIMELINE LIST */}
      <div className="timeline-list relative z-10 w-full max-w-2xl mx-auto flex flex-col gap-6">
        {/* Center vertical line for desktop */}
        <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-[2px] bg-purple-200 -translate-x-1/2 hidden sm:block" />

        {events.map((ev, index) => (
          <div
            key={index}
            className={`timeline-item relative flex flex-col sm:flex-row items-start ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            } gap-4 sm:gap-8 w-full`}
          >
            {/* TIME BADGE / ICON */}
            <div className="flex items-center sm:absolute sm:left-1/2 sm:-translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-white border border-purple-200 shadow-md flex items-center justify-center">
                {ev.icon}
              </div>
            </div>

            {/* CONTENT CARD */}
            <div className={`w-full sm:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-purple-100 shadow-xl shadow-purple-950/5 hover:border-purple-300 hover:shadow-[0_10px_30px_rgba(126,34,206,0.08)] transition-all duration-300`}>
              <span className="inline-block text-xs font-bold tracking-wider text-[#7e22ce] uppercase mb-1 time-font-cinzel">
                {ev.time}
              </span>
              <h3 className="time-font-cinzel text-xl font-bold text-[#1a1820] mb-2">
                {ev.title}
              </h3>
              <p className="time-font-lora text-sm text-[#554d63] leading-relaxed">
                {ev.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}