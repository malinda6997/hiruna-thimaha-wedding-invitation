"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, CalendarPlus } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LocationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".loc-reveal",
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
            start: "top 75%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  // Google Calendar Event Link Generator
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Hiruna & Thimasha Wedding");
    const details = encodeURIComponent("Join us for the wedding celebration of Hiruna & Thimasha at Kavindu Grand Banquet Hall, Weralugama, Kuliyapitiya.");
    const location = encodeURIComponent("Kavindu Grand Banquet Hall, Weralugama, Kuliyapitiya");
    const dates = "20261115T050000Z/20261115T110000Z";

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    window.open(calendarUrl, "_blank");
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#fbfbfa] text-[#1a1820] py-24 px-6 sm:px-12 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

        .loc-font-cinzel {
          font-family: 'Cinzel', serif;
        }
        .loc-font-lora {
          font-family: 'Lora', serif;
        }
      `}</style>

      {/* MAIN CONTENT CONTAINER (GRID: INFO & MAP) */}
      <div className="loc-reveal w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* LEFT SIDE: VENUE INFO & CALENDAR BUTTON ONLY */}
        <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-purple-100 shadow-xl shadow-purple-950/5 flex flex-col text-left">
          
          <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center border border-purple-200 mb-5 shadow-inner">
            <MapPin className="w-6 h-6 text-[#7e22ce]" />
          </div>

          <span className="loc-font-lora text-xs text-[#7e22ce] tracking-[0.3em] uppercase font-semibold mb-2">
            VENUE & DIRECTIONS
          </span>

          <h3 className="loc-font-cinzel text-xl sm:text-2xl font-bold text-[#1a1820] mb-2">
            Kavindu Grand Banquet Hall
          </h3>

          <p className="loc-font-lora text-sm sm:text-base text-[#554d63] mb-6 font-light leading-relaxed">
            Weralugama, Kuliyapitiya, Sri Lanka. Join us to celebrate our special day with joy and blessings.
          </p>

          {/* SINGLE ACTION BUTTON (SAVE TO CALENDAR) */}
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={handleAddToCalendar}
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#7e22ce] text-white font-medium text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-purple-950/20 hover:bg-[#6b21a8] hover:scale-[1.02] transition-all duration-300 loc-font-cinzel cursor-pointer"
            >
              <CalendarPlus className="w-4 h-4" />
              <span>Save to Calendar</span>
            </button>
          </div>

        </div>

        {/* RIGHT SIDE: EMBEDDED GOOGLE MAP VIEW */}
        <div className="lg:col-span-7 w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-purple-100 shadow-2xl shadow-purple-950/5 bg-white p-2">
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
            <iframe
              title="Kavindu Grand Banquet Hall Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.218557342628!2d80.03818777476295!3d7.477797792518464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3217b1d9c2233%3A0x6b8764a8cb01980a!2sKuliyapitiya!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] contrast-[105%]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}