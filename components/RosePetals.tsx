"use client";

import React, { useEffect, useState } from "react";

export default function RosePetals() {
  const [petals, setPetals] = useState<
    Array<{ id: number; left: number; size: number; duration: number; delay: number }>
  >([]);

  useEffect(() => {
    // Mobile එකේදී 10ක් සහ Desktop එකේදී 18ක් ලෙස සීමා කර ඇත
    const count = window.innerWidth < 768 ? 10 : 18;
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: 14 + Math.random() * 12,
      duration: 9 + Math.random() * 8,
      delay: Math.random() * 6,
    }));
    setPetals(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[80] overflow-hidden">
      <style jsx global>{`
        @keyframes floatPetal {
          0% {
            transform: translate3d(0, -50px, 0) rotate(0deg) rotateY(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          90% {
            opacity: 0.85;
          }
          100% {
            transform: translate3d(80px, 105vh, 0) rotate(360deg) rotateY(360deg);
            opacity: 0;
          }
        }
        .petal-animated {
          animation-name: floatPetal;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
      `}</style>

      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute petal-animated select-none"
          style={{
            left: `${p.left}%`,
            top: 0,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8 2 4 6 4 11C4 16 8 21 12 21C16 21 20 16 20 11C20 6 16 2 12 2Z"
              fill="url(#petalGrad)"
            />
            <defs>
              <linearGradient id="petalGrad" x1="4" y1="2" x2="20" y2="21">
                <stop stopColor="#f43f5e" stopOpacity="0.9" />
                <stop offset="0.5" stopColor="#be123c" stopOpacity="0.8" />
                <stop offset="1" stopColor="#881337" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}