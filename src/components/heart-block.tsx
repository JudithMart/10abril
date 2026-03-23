"use client"

import { Lock, Heart, Sparkles } from "lucide-react"

interface HeartBlockProps {
  level: number
  isUnlocked: boolean
  isCompleted: boolean
  isCurrent: boolean
  onClick: () => void
}

export function HeartBlock({ level, isUnlocked, isCompleted, isCurrent, onClick }: HeartBlockProps) {
  const baseClasses = "relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300 cursor-pointer border-4"
  
  const getBlockClasses = () => {
    if (isCompleted) {
      return `${baseClasses} bg-pixel-red border-pixel-dark hover:scale-105`
    }
    if (isCurrent) {
      return `${baseClasses} bg-pixel-pink border-pixel-dark pixel-pulse hover:scale-110`
    }
    if (isUnlocked) {
      return `${baseClasses} bg-pixel-pink border-pixel-dark hover:scale-105 hover:brightness-110`
    }
    return `${baseClasses} bg-pixel-locked border-pixel-dark/50 opacity-60 cursor-not-allowed`
  }

  return (
    <button
      onClick={() => {
    if (isUnlocked) onClick()
  }}
      className={getBlockClasses()}
      aria-label={`Level ${level} - ${isCompleted ? 'Completed' : isUnlocked ? 'Available' : 'Locked'}`}
    >
      {/* Pixel highlight effect */}
      <div className="absolute top-1 left-1 w-2 h-2 bg-white/40" />
      <div className="absolute top-1 left-3 w-1 h-1 bg-white/30" />
      
      {/* Content */}
      {isCompleted ? (
        <Heart className="w-6 h-6 md:w-7 md:h-7 text-pixel-cloud fill-pixel-cloud" />
      ) : isCurrent ? (
        <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-pixel-cloud" />
      ) : isUnlocked ? (
        <span className="text-xs text-pixel-cloud font-bold">{level}</span>
      ) : (
        <Lock className="w-5 h-5 md:w-6 md:h-6 text-pixel-dark/50" />
      )}
      
      {/* Shadow effect */}
      <div className="absolute -bottom-1 -right-1 w-full h-full bg-pixel-dark/30 -z-10" />
    </button>
  )
}
