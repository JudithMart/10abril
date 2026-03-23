"use client"

import { HeartBlock } from "./heart-block"

interface PixelHeartGridProps {
  unlockedLevel: number
  completedLevels: number[]
  onBlockClick: (level: number) => void
}

// Heart shape pattern - 15 blocks arranged in a heart
// Row structure (top to bottom):
// Row 1: 2 blocks on left, 2 blocks on right (positions 1-4)
// Row 2: 5 blocks across (positions 5-9)
// Row 3: 3 blocks centered (positions 10-12)
// Row 4: 1 block centered (positions 13)
// Row 5: (we extend to 15 for more content)

const HEART_LAYOUT = [
  // Row 1 - top curves of heart
  { row: 0, col: 1, level: 1 },
  { row: 0, col: 2, level: 2 },
  { row: 0, col: 4, level: 3 },
  { row: 0, col: 5, level: 4 },
  // Row 2 - upper body
  { row: 1, col: 0, level: 5 },
  { row: 1, col: 1, level: 6 },
  { row: 1, col: 2, level: 7 },
  { row: 1, col: 3, level: 8 },
  { row: 1, col: 4, level: 9 },
  { row: 1, col: 5, level: 10 },
  { row: 1, col: 6, level: 11 },
  // Row 3 - middle
 
  { row: 2, col: 2, level: 13 },
  { row: 2, col: 3, level: 14 },
  { row: 2, col: 4, level: 15 },
  { row: 2, col: 5, level: 16 },
  // Row 4 - lower middle
  { row: 3, col: 2, level: 17 },
  { row: 3, col: 3, level: 18 },
  { row: 3, col: 4, level: 19 },
  // Row 5 - bottom point
  { row: 4, col: 3, level: 20 },
]

export function PixelHeartGrid({ unlockedLevel, completedLevels, onBlockClick }: PixelHeartGridProps) {
  // Only show first 15 levels
  const visibleBlocks = HEART_LAYOUT.slice(0, 14)
  
  // Calculate grid dimensions
  const maxCol = Math.max(...visibleBlocks.map(b => b.col))
  const maxRow = Math.max(...visibleBlocks.map(b => b.row))

  return (
    <div className="relative">
      {/* Grid container */}
      <div 
        className="grid gap-2 md:gap-3"
        style={{
          gridTemplateColumns: `repeat(${maxCol + 1}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${maxRow + 1}, minmax(0, 1fr))`,
        }}
      >
        {/* Render empty cells first for grid structure */}
        {Array.from({ length: (maxCol + 1) * (maxRow + 1) }).map((_, index) => {
          const row = Math.floor(index / (maxCol + 1))
          const col = index % (maxCol + 1)
          const block = visibleBlocks.find(b => b.row === row && b.col === col)
          
          if (block) {
            return (
              <HeartBlock
                key={block.level}
                level={block.level}
                isUnlocked={block.level <= unlockedLevel}
                isCompleted={completedLevels.includes(block.level)}
                isCurrent={block.level === unlockedLevel && !completedLevels.includes(block.level)}
                onClick={() => onBlockClick(block.level)}
              />
            )
          }
          
          return <div key={`empty-${row}-${col}`} className="w-14 h-14 md:w-16 md:h-16" />
        })}
      </div>
    </div>
  )
}
