"use client"

import { Lock, Heart, Sparkles } from "lucide-react"

interface HeartBlockProps {
  level: number
  isUnlocked: boolean
  isCompleted: boolean
  isCurrent: boolean
  onClick: () => void
}

export function HeartBlock({
  level,
  isUnlocked,
  isCompleted,
  isCurrent,
  onClick
}: HeartBlockProps) {

  const baseClasses =
    "relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300 cursor-pointer border-4"

  const getBlockClasses = () => {
    if (isCompleted) {
      return `${baseClasses} bg-pixel-red border-pixel-dark hover:scale-105`
    }
    if (isCurrent) {
      return `${baseClasses} bg-pixel-pink border-pixel-dark pixel-pulse hover:scale-110`
    }
    if (isUnlocked) {
      return `${baseClasses} bg-pixel-pink border-pixel-dark hover:scale-105`
    }
    return `${baseClasses} bg-pixel-locked border-pixel-dark/50 opacity-60 cursor-not-allowed`
  }

  return (
    <button
      onClick={() => {
        if (isUnlocked) onClick()
      }}
      className={getBlockClasses()}
    >
      {isCompleted ? (
        <Heart className="w-6 h-6 text-pixel-cloud fill-pixel-cloud" />
      ) : isCurrent ? (
        <Sparkles className="w-6 h-6 text-pixel-cloud" />
      ) : isUnlocked ? (
        <span>{level}</span>
      ) : (
        <Lock className="w-5 h-5 text-pixel-dark/50" />
      )}
    </button>
  )
}
