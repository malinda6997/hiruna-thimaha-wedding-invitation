"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import WelcomeScreen from "@/components/WelcomeScreen";
import EnvelopeHero from "@/components/EnvelopeHero";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [step, setStep] = useState<"loading" | "welcome" | "hero">("loading");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#030303]" />;
  }

  return (
    <main className="min-h-screen bg-[#030303] text-[#e2d1a6] relative overflow-x-hidden">
      {step === "loading" && (
        <Preloader onFinished={() => setStep("welcome")} />
      )}

      {step === "welcome" && (
        <WelcomeScreen onFinished={() => setStep("hero")} />
      )}

      {step === "hero" && (
        <>
          <AudioPlayer />
          <EnvelopeHero />
        </>
      )}
    </main>
  );
}