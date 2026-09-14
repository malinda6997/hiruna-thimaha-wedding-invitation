"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CoupleHero from "@/components/CoupleHero";
import StorySection from "@/components/StorySection";
import WeddingTimeline from "@/components/WeddingTimeline";
import CountdownSection from "@/components/CountdownSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WeddingSwipeContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(".swipe-panel");

      // On desktop/tablet, pin the container and scrub horizontally with modern card stacking
      if (window.innerWidth >= 1024) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + sliderRef.current?.offsetWidth,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="overflow-hidden w-full relative bg-[#030206]">
      {/* Horizontal Swipe Slider for Desktop / Vertical stack for Mobile */}
      <div
        ref={sliderRef}
        className="flex flex-col lg:flex-row lg:w-[400vw] lg:h-screen w-full"
      >
        <div className="swipe-panel w-full lg:w-screen lg:h-screen flex-shrink-0">
          <CoupleHero />
        </div>
        <div className="swipe-panel w-full lg:w-screen lg:h-screen flex-shrink-0">
          <StorySection />
        </div>
        <div className="swipe-panel w-full lg:w-screen lg:h-screen flex-shrink-0">
          <WeddingTimeline />
        </div>
        <div className="swipe-panel w-full lg:w-screen lg:h-screen flex-shrink-0">
          <CountdownSection />
        </div>
      </div>
    </div>
  );
}