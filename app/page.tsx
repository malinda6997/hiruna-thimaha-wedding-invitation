"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import EnvelopeHero from "@/components/EnvelopeHero";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#030303]" />;
  }

  return (
    <main className="min-h-screen bg-[#070b19] text-[#e2d1a6] relative overflow-x-hidden">
      {isLoading ? (
        <Preloader onFinished={() => setIsLoading(false)} />
      ) : (
        <>
          <AudioPlayer />
          <EnvelopeHero />
        </>
      )}
    </main>
  );
}