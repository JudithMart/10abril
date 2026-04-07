"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { PixelCloud } from "../components/pixel-cloud";
import { PixelHeartGrid } from "../components/pixel-heart-grid";
import { RiddleModal } from "../components/riddle-modal";
import { getLevelData } from "../lib/game-data";

const STORAGE_KEY = "memory-hearts-progress";

// Nubes con distintas velocidades, alturas y tamaños para dar profundidad
const CLOUDS = [
  { id: 1, top: "8%", duration: "18s", delay: "0s", scale: 1.2 },
  { id: 2, top: "20%", duration: "25s", delay: "6s", scale: 0.8 },
  { id: 3, top: "5%", duration: "32s", delay: "12s", scale: 1.0 },
  { id: 4, top: "35%", duration: "22s", delay: "3s", scale: 0.6 },
  { id: 5, top: "15%", duration: "28s", delay: "16s", scale: 1.4 },
  { id: 6, top: "45%", duration: "20s", delay: "9s", scale: 0.7 },
];

export default function MemoryHeartsGame() {
  const [unlockedLevel, setUnlockedLevel] = useState(1);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const TOTAL_LEVELS = 20;
  const allCompleted =
    completedLevels.length >= TOTAL_LEVELS && unlockedLevel >= TOTAL_LEVELS;

  const unlockAllLevels = () => {
    const all = Array.from({ length: TOTAL_LEVELS }, (_, i) => i + 1);

    setCompletedLevels(all);
    setUnlockedLevel(TOTAL_LEVELS);
  };

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const progress = JSON.parse(saved);
        setUnlockedLevel(progress.unlockedLevel || 1);
        setCompletedLevels(progress.completedLevels || []);
      } catch {
        // start fresh
      }
    }
  }, []);

  useEffect(() => {
    const progress = { unlockedLevel, completedLevels };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [unlockedLevel, completedLevels]);

  const handleBlockClick = (level: number) => {
    setSelectedLevel(level);
    setIsModalOpen(true);
  };

  const handleCorrectAnswer = () => {
    if (selectedLevel !== null) {
      setCompletedLevels((prev) => [...new Set([...prev, selectedLevel])]);
      if (selectedLevel === unlockedLevel && unlockedLevel < 20) {
        setUnlockedLevel((prev) => prev + 1);
      }
    }
  };

  const levelData = selectedLevel ? getLevelData(selectedLevel) : undefined;

  return (
    <main className="min-h-screen bg-pixel-sky relative overflow-hidden">
      {/* Nubes animadas — varias en loop con diferentes velocidades */}
      {CLOUDS.map((cloud) => (
        <PixelCloud
          key={cloud.id}
          style={{
            top: cloud.top,
            left: "-200px",
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
            transform: `scale(${cloud.scale})`,
            transformOrigin: "left center",
            opacity: cloud.scale > 1 ? 1 : 0.7, // nubes pequeñas = más lejanas = más transparentes
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center min-h-screen">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 px-4 py-2 bg-pixel-cloud border-4 border-pixel-dark">
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-pixel-red fill-pixel-red" />
            <h1 className="text-sm md:text-lg text-pixel-dark tracking-tight">
              hi ball face
            </h1>
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-pixel-red fill-pixel-red" />
          </div>
        </header>
        {/* DEBUG BUTTON */}
        <button
          onClick={unlockAllLevels}
          className="fixed bottom-4 right-4 px-4 py-2 bg-black text-white border-2 border-white text-xs opacity-60 hover:opacity-100 z-50"
        >
          Unlock All (Test)
        </button>

        {/* Heart Grid */}
        {/* Heart Grid + Final Button */}
        <div className=" flex flex-1 flex-col items-center justify-center py-4 relative z-20">
          <PixelHeartGrid
            key={unlockedLevel}
            unlockedLevel={unlockedLevel}
            completedLevels={completedLevels}
            onBlockClick={handleBlockClick}
          />

          {allCompleted && (
            <button
              className="
         mt-6
    w-fit mx-auto
    px-6 py-3
    bg-pixel-red text-white
    border-4 border-pixel-dark
    hover:translate-y-[2px]
    active:translate-y-[4px]
    transition-all
    font-bold tracking-wide
    whitespace-nowrap
  "
              onClick={() => alert("Aquí irá el video ❤️")}
            >
              Ready?
            </button>
          )}
        </div>
      </div>

      {/* Riddle Modal */}
      <RiddleModal
        level={levelData?.level ?? 0}
        riddle={levelData?.riddle ?? ""}
        answer={levelData?.answer ?? ""}
        message={levelData?.message ?? ""}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCorrect={handleCorrectAnswer}
      />
    </main>
  );
}
