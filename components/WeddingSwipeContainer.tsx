"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CoupleHero from "@/components/CoupleHero";
import StorySection from "@/components/StorySection";
import WeInviteSection from "@/components/WeInviteSection";
import WeddingTimeline from "@/components/WeddingTimeline";
import LocationSection from "@/components/LocationSection";
import CountdownSection from "@/components/CountdownSection";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WeddingSwipeContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(".swipe-panel");

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
      <div
        ref={sliderRef}
        className="flex flex-col lg:flex-row lg:w-[700vw] lg:h-screen w-full"
      >
        <div className="swipe-panel w-full lg:w-screen lg:h-screen flex-shrink-0">
          <CoupleHero />
        </div>
        <div className="swipe-panel w-full lg:w-screen lg:h-screen flex-shrink-0">
          <StorySection />
        </div>
        <div className="swipe-panel w-full lg:w-screen lg:h-screen flex-shrink-0">
          <WeInviteSection />
        </div>
        <div className="swipe-panel w-full lg:w-screen lg:h-screen flex-shrink-0">
          <WeddingTimeline />
        </div>
        <div className="swipe-panel w-full lg:w-screen lg:h-screen flex-shrink-0">
          <LocationSection />
        </div>
        <div className="swipe-panel w-full lg:w-screen lg:h-screen flex-shrink-0">
          <CountdownSection />
        </div>
        <div className="swipe-panel w-full lg:w-screen lg:h-screen flex-shrink-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}