"use client"

import { useState } from "react"
import { X, Heart, Sparkles, XCircle } from "lucide-react"
import { Button } from "./ui/button"

interface RiddleModalProps {
  level: number
  riddle: string
  answer: string
  message: string
  imageUrl: string
  isOpen: boolean
  onClose: () => void
  onCorrect: () => void
}

export function RiddleModal({ 
  level, 
  riddle, 
  answer, 
  message, 
  imageUrl, 
  isOpen, 
  onClose, 
  onCorrect 
}: RiddleModalProps) {
  const [inputValue, setInputValue] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  const [showError, setShowError] = useState(false)

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pixel-dark/80">
      <div className="relative w-full max-w-md bg-pixel-cloud border-8 border-pixel-dark p-0 overflow-hidden">
        {/* Pixel border decoration */}
        <div className="absolute top-0 left-0 w-4 h-4 bg-pixel-gold" />
        <div className="absolute top-0 right-0 w-4 h-4 bg-pixel-gold" />
        <div className="absolute bottom-0 left-0 w-4 h-4 bg-pixel-gold" />
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-pixel-gold" />
        
        {/* Header */}
        <div className="bg-pixel-red p-4 flex items-center justify-between border-b-4 border-pixel-dark">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pixel-cloud fill-pixel-cloud" />
            <span className="text-pixel-cloud text-xs md:text-sm">LEVEL {level}</span>
          </div>
          <button 
            onClick={handleClose}
            className="text-pixel-cloud hover:scale-110 transition-transform"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {!isCorrect ? (
            <>
              {/* Riddle */}
              <div className="mb-6 p-4 bg-pixel-sky/30 border-4 border-pixel-dark">
                <p className="text-[10px] md:text-xs leading-relaxed text-pixel-dark text-center">
                  {riddle}
                </p>
              </div>
              
              {/* Input form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Your answer..."
                  className="w-full p-3 text-xs bg-pixel-cloud border-4 border-pixel-dark focus:border-pixel-red outline-none text-pixel-dark placeholder:text-pixel-dark/40"
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-pixel-red hover:bg-pixel-pink text-pixel-cloud border-4 border-pixel-dark text-xs py-3 rounded-none"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  SUBMIT
                </Button>
              </form>
              
              {/* Error message */}
              {showError && (
                <div className="mt-4 p-3 bg-pixel-gold/30 border-4 border-pixel-gold flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-pixel-dark shrink-0" />
                  <p className="text-[9px] md:text-[10px] text-pixel-dark">
                    {"Oops! That's not quite right. Try again, my love!"}
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Success state */
            <div className="text-center space-y-4">
              {/* Image */}
              <div className="relative w-full aspect-square max-w-[200px] mx-auto border-4 border-pixel-dark overflow-hidden bg-pixel-pink/20">
                <img 
                  src={imageUrl} 
                  alt="Memory unlocked"
                  className="w-full h-full object-cover pixel-perfect"
                />
                <div className="absolute top-2 left-2 w-3 h-3 bg-white/50" />
              </div>
              
              {/* Message */}
              <div className="p-4 bg-pixel-pink/20 border-4 border-pixel-red">
                <p className="text-[10px] md:text-xs leading-relaxed text-pixel-dark">
                  {message}
                </p>
              </div>
              
              {/* Hearts decoration */}
              <div className="flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <Heart 
                    key={i} 
                    className="w-4 h-4 text-pixel-red fill-pixel-red animate-bounce" 
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              
              <Button 
                onClick={handleContinue}
                className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground border-4 border-pixel-dark text-xs py-3 rounded-none"
              >
                <Heart className="w-4 h-4 mr-2 fill-current" />
                CONTINUE
              </Button>
            </div>
          )}
        </div>
        
        {/* Bottom shadow */}
        <div className="absolute -bottom-2 left-2 right-2 h-2 bg-pixel-dark/30" />
      </div>
    </div>
  )
}
