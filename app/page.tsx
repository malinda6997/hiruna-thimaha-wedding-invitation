"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import WelcomeScreen from "@/components/WelcomeScreen";
import CoupleHero from "@/components/CoupleHero";
import StorySection from "@/components/StorySection";
import CountdownSection from "@/components/CountdownSection";

export default function Home() {
  const [step, setStep] = useState<"loading" | "welcome" | "hero">("loading");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#030206]" />;
  }

  return (
    <main className="min-h-screen bg-[#030206] text-white relative overflow-x-hidden">
      {step === "loading" && (
        <Preloader onFinished={() => setStep("welcome")} />
      )}

      {step === "welcome" && (
        <WelcomeScreen onFinished={() => setStep("hero")} />
      )}

      {step === "hero" && (
        <>
          <CoupleHero />
          <StorySection />
          <CountdownSection />
        </>
      )}
    </main>
  );
}