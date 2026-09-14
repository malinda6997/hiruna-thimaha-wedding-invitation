"use client";

import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-113576.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggleAudio}
        aria-label="Toggle Audio"
        className="relative group p-3 sm:p-4 rounded-full bg-[#0a1024]/80 backdrop-blur-md border border-[#d4af37]/50 text-[#d4af37] shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
      >
        {isPlaying && (
          <span className="absolute inset-0 rounded-full bg-[#d4af37]/20 animate-ping pointer-events-none" />
        )}

        {isPlaying ? (
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 opacity-70" />
        )}
      </button>
    </div>
  );
}