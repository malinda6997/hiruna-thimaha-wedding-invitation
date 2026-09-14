"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RosePetals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const petalsCount = 25; // Screen එකේ පාවෙන පෙති ගණන
    const container = containerRef.current;
    if (!container) return;

    const petals: HTMLDivElement[] = [];

    for (let i = 0; i < petalsCount; i++) {
      const petal = document.createElement("div");
      petal.className = "absolute pointer-events-none z-40 select-none opacity-80";
      
      // Petal SVG Graphic
      petal.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scale(${0.5 + Math.random() * 0.8});">
          <path d="M12 2C8 2 4 6 4 11C4 16 8 21 12 21C16 21 20 16 20 11C20 6 16 2 12 2Z" fill="url(#petalGradient)"/>
          <defs>
            <linearGradient id="petalGradient" x1="4" y1="2" x2="20" y2="21" gradientUnits="userSpaceOnUse">
              <stop stop-color="#f43f5e" stop-opacity="0.9"/>
              <stop offset="0.5" stop-color="#be123c" stop-opacity="0.8"/>
              <stop offset="1" stop-color="#881337" stop-opacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      `;

      container.appendChild(petal);
      petals.push(petal);

      // Initial Position Range
      gsap.set(petal, {
        x: Math.random() * window.innerWidth,
        y: -50 - Math.random() * 100,
        rotation: Math.random() * 360,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
      });

      // Falling Animation Loop
      gsap.to(petal, {
        y: window.innerHeight + 100,
        x: `+=${(Math.random() - 0.5) * 300}`,
        rotation: `+=${180 + Math.random() * 360}`,
        rotationX: `+=${360}`,
        rotationY: `+=${360}`,
        duration: 8 + Math.random() * 7,
        repeat: -1,
        delay: Math.random() * 8,
        ease: "none",
      });
    }

    return () => {
      petals.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[80] overflow-hidden"
    />
  );
}