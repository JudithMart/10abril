"use client"

import { useState, useEffect } from "react"
import { Heart, Trophy, Sparkles } from "lucide-react"
import { PixelCloud } from "../components/pixel-cloud"
import { PixelHeartGrid } from "../components/pixel-heart-grid"
import { RiddleModal } from "../components/riddle-modal"
import { getLevelData } from "../lib/game-data"

const STORAGE_KEY = "memory-hearts-progress"

export default function MemoryHeartsGame() {
  const [unlockedLevel, setUnlockedLevel] = useState(1)
  const [completedLevels, setCompletedLevels] = useState<number[]>([])
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const progress = JSON.parse(saved)
        setUnlockedLevel(progress.unlockedLevel || 1)
        setCompletedLevels(progress.completedLevels || [])
      } catch {
        // Invalid data, start fresh
      }
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    const progress = { unlockedLevel, completedLevels }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [unlockedLevel, completedLevels])

  const handleBlockClick = (level: number) => {
    setSelectedLevel(level)
    setIsModalOpen(true)
    console.log("CLICK", level)
  }

  const handleCorrectAnswer = () => {
    if (selectedLevel !== null) {
      setCompletedLevels(prev => [...new Set([...prev, selectedLevel])])
      if (selectedLevel === unlockedLevel && unlockedLevel < 15) {
        setUnlockedLevel(prev => prev + 1)
      }
    }
  }

  const levelData = selectedLevel ? getLevelData(selectedLevel) : null
  console.log("LEVEL DATA:", levelData)
  const isGameComplete = completedLevels.length >= 15

  return (
    <main className="min-h-screen bg-pixel-sky relative overflow-hidden">
      {/* Animated clouds */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <PixelCloud 
          className="cloud-drift"
               style={{ top: '100px', left: '-150px', animationDuration: '20s' }} 
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center min-h-screen">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 px-4 py-2 bg-pixel-cloud border-4 border-pixel-dark">
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-pixel-red fill-pixel-red" />
            <h1 className="text-sm md:text-lg text-pixel-dark tracking-tight">MEMORY HEARTS</h1>
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-pixel-red fill-pixel-red" />
          </div>
          
          <p className="text-[8px] md:text-[10px] text-pixel-cloud bg-pixel-dark/60 px-4 py-2 mt-2">
            A LOVE QUEST FOR YOU
          </p>
        </header>

        {/* Progress indicator */}
        <div className="flex items-center gap-4 mb-8 bg-pixel-cloud/90 px-4 py-2 border-4 border-pixel-dark">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-pixel-gold" />
            <span className="text-[10px] text-pixel-dark">
              {completedLevels.length} / 15
            </span>
          </div>
          <div className="w-px h-4 bg-pixel-dark/30" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pixel-pink" />
            <span className="text-[10px] text-pixel-dark">
              LEVEL {unlockedLevel}
            </span>
          </div>
        </div>

        {/* Heart Grid */}
        <div className="flex-1 flex items-center justify-center py-4 relative z-20">
          <PixelHeartGrid
            unlockedLevel={unlockedLevel}
            completedLevels={completedLevels}
            onBlockClick={handleBlockClick}
          />
        </div>

        {/* Game complete celebration */}
        {isGameComplete && (
          <div className="mt-8 p-6 bg-pixel-cloud border-4 border-pixel-red text-center max-w-sm">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i} 
                  className="w-5 h-5 text-pixel-red fill-pixel-red animate-bounce" 
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <h2 className="text-sm text-pixel-red mb-2">QUEST COMPLETE!</h2>
            <p className="text-[10px] text-pixel-dark leading-relaxed">
              You unlocked all memories. Our love story is written in the stars!
            </p>
          </div>
        )}

        {/* Footer hint */}
        <footer className="mt-8 text-center">
          <p className="text-[8px] text-pixel-cloud/80 bg-pixel-dark/40 px-3 py-1.5">
            {isGameComplete 
              ? "THANK YOU FOR PLAYING WITH YOUR HEART" 
              : "TAP THE GLOWING BLOCK TO CONTINUE"
            }
          </p>
        </footer>
      </div>

      {/* Riddle Modal */}
      {levelData && (
        <RiddleModal
          level={levelData.level}
          riddle={levelData.riddle}
          answer={levelData.answer}
          message={levelData.message}
          imageUrl={levelData.imageUrl}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCorrect={handleCorrectAnswer}
        />
      )}
    </main>
  )
}
