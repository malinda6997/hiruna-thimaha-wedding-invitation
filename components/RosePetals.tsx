"use client";

import React, { useEffect, useState } from "react";

export default function RosePetals() {
  const [petals, setPetals] = useState<
    Array<{ id: number; left: number; size: number; duration: number; delay: number }>
  >([]);

  useEffect(() => {
    // Fast & smooth performance for mobile and desktop
    const count = typeof window !== "undefined" && window.innerWidth < 768 ? 14 : 22;
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: 16 + Math.random() * 10,
      duration: 3.5 + Math.random() * 2.5, // 🚀 Faster falling speed (3.5s - 6s)
      delay: -(Math.random() * 5), // 🚀 Negative delay makes petals already moving on screen (no top sticking)
    }));
    setPetals(items);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      <style jsx global>{`
        @keyframes floatPetalFast {
          0% {
            transform: translate3d(0, -20px, 0) rotate(0deg) scale(0.9);
            opacity: 0.9;
          }
          50% {
            transform: translate3d(35px, 50vh, 0) rotate(180deg) scale(1.05);
            opacity: 0.95;
          }
          100% {
            transform: translate3d(-20px, 105vh, 0) rotate(360deg) scale(0.9);
            opacity: 0;
          }
        }
        .hero-petal-fast {
          animation-name: floatPetalFast;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
      `}</style>

      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute hero-petal-fast select-none"
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
              fill="url(#fastPetalGrad)"
            />
            <defs>
              <linearGradient id="fastPetalGrad" x1="4" y1="2" x2="20" y2="21">
                <stop stopColor="#f43f5e" stopOpacity="0.9" />
                <stop offset="0.5" stopColor="#be123c" stopOpacity="0.85" />
                <stop offset="1" stopColor="#881337" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}