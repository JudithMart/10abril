
// Hints for each level
const hints: Record<number, string> = {
  1: "17 January 2026",
  2: "Month of love, day of the year",
  3: "boulevard",
  4: "Cafenio",
  5: " procesador",
  6: " motor turbo",
  7: "gravedad",
  8: "complejidad a partir",
  9: "ecuación, elegiría repetir",
  10: "más estabilidad",
  11: " inevitablemente atraído",
  12: "(Es un motor) 2:31 a.m",
  13: "mazda",
  14: "spool antes de liberar",
  15: "no hay",
  16: "Juan",
  17: "granitos de arena",
  18: "robot",
  19: "no sigue las reglas convencionales",
  20: "NO"
}

function getHintByLevel(level: number): string {
  return hints[level] || "No hay pista disponible para este nivel.";
}
"use client"

import { useState, useEffect } from "react"
import { X, Heart, Sparkles, XCircle } from "lucide-react"
import { Button } from "./ui/button"

interface RiddleModalProps {
  level: number
  riddle: string
  answer: string
  message: string
  isOpen: boolean
  onClose: () => void
  onCorrect: () => void
}

export function RiddleModal({ 
  level, 
  riddle, 
  answer,  
  message,
  isOpen, 

  onClose, 
  onCorrect 
}: RiddleModalProps) {
  const [inputValue, setInputValue] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  const [showError, setShowError] = useState(false)

  // Reset state when modal opens with a new level
  useEffect(() => {
    if (isOpen) {
      setInputValue("")
      setIsCorrect(false)
      setIsWrong(false)
      setShowError(false)
    }
  }, [isOpen, level])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.toLowerCase().trim() === answer.toLowerCase().trim()) {
      setIsCorrect(true)
      setIsWrong(false)
      setShowError(false)
    } else {
      setIsWrong(true)
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  const handleContinue = () => {
    onCorrect()
    setInputValue("")
    setIsCorrect(false)
    setIsWrong(false)
    onClose()
  }

  const handleClose = () => {
    setInputValue("")
    setIsCorrect(false)
    setIsWrong(false)
    onClose()
  }

  // Simple CSS-based overlay, no createPortal needed
  if (!isOpen) return null

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", 
        justifyContent: "center", backgroundColor: "rgba(0,0,0,0.7)" }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div style={{ position: "relative", width: "60%", maxWidth: "28rem", margin: "0 1rem" }} className="bg-blue-200 border-8 border-pixel-dark">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 bg-pixel-gold" />
        <div className="absolute top-0 right-0 w-4 h-4 bg-pixel-gold" />
        <div className="absolute bottom-0 left-0 w-4 h-4 bg-pixel-gold" />
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-pixel-gold" />

        {/* Header */}
        <div className="bg-pixel-purple p-4 
        flex items-center justify-between border-b-4 border-pixel-dark">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pixel-cloud fill-pixel-cloud " />
            <span className="text-black text-xs "> LEVEL {level}</span>
          </div>
          <button onClick={handleClose} className="bg-pixel-purple text-pixel-cloud hover:scale-110 transition-transform">
            <X className="w-6 h-6 " />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isCorrect ? (
            <>
              <div className="mb-6 p-4 bg-pixel-sky/30 border-4 border-pixel-dark">
                <p className="text-[10px] md:text-xs leading-relaxed text-pixel-dark text-center">
                  {riddle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Your answer..."
                  autoFocus
                  className="w-full max-w-full box-border p-4 text-xs bg-pixel-cloud border-4 border-pixel-dark focus:border-pixel-red outline-none text-pixel-dark placeholder:text-pixel-dark/40"
                  style={{ minWidth: 0 }}
                />
                <Button
                  type="submit"
                  className="w-full bg-lime-600 hover:bg-lime-500 text-pixel-cloud border-4 border-pixel-dark text-xs py-3 rounded-none"
                >
                  
                  SUBMIT
                </Button>
              </form>

              {showError && (
                <div className="mt-4 p-3 bg-pixel-gold/30 border-4 border-pixel-gold flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-pixel-dark shrink-0" />
                    <p className="text-[9px] md:text-[10px] text-pixel-dark">
                      {"Oops! That's not quite right. Try again, my love!"}
                    </p>
                  </div>
                  <div className="mt-2 p-2 bg-pixel-sky/30 border-2 border-pixel-dark rounded">
                    <span className="font-bold text-pixel-dark text-[9px] md:text-[10px]">Pista:</span>
                    <span className="ml-2 text-pixel-dark text-[9px] md:text-[10px]">
                      {getHintByLevel(level)}
                    </span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center space-y-4">
              
              <Sparkles className="w-8 h-8 text-pixel-gold mx-auto" />
              <h2 className="text-lg md:text-xl text-pixel-dark font-bold">
                {message}
              </h2>
              <Button
                onClick={handleContinue}
                className="w-full bg-lime-600 hover:bg-lime-500 text-secondary-foreground border-4 border-pixel-dark text-xs py-3 rounded-none"
              >
                <Heart className="w-4 h-4 mr-2 ml-5 fill-current" />
                CONTINUE
              </Button>
            </div>
          )}
        </div>

        <div className="absolute -bottom-2 left-2 right-2 h-2 bg-pixel-dark/30" />
      </div>
    </div>
  )
}