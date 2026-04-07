"use client"

import { HeartBlock } from "./heart-block"

interface PixelHeartGridProps {
  unlockedLevel: number
  completedLevels: number[]
  onBlockClick: (level: number) => void
}

// Corazón simétrico de 15 bloques:
//
//  . X X . X X .   (fila 0)
//  X X X X X X X   (fila 1)
//  . X X X X X .   (fila 2)
//  . . X X X . .   (fila 3) ← solo 3 para llegar a 15 total

const HEART_LAYOUT = [
  // Row 0 - dos bumps simétricos
  { row: 0, col: 1, level: 1 },
  { row: 0, col: 2, level: 2 },
  { row: 0, col: 4, level: 3 },
  { row: 0, col: 5, level: 4 },
  // Row 1 - fila completa de 7
  { row: 1, col: 0, level: 5 },
  { row: 1, col: 1, level: 6 },
  { row: 1, col: 2, level: 7 },
  { row: 1, col: 3, level: 8 },
  { row: 1, col: 4, level: 9 },
  { row: 1, col: 5, level: 10 },
  { row: 1, col: 6, level: 11 },
  // Row 2 - se estrecha simétricamente (5 bloques)
  { row: 2, col: 1, level: 12 },
  { row: 2, col: 2, level: 13 },
  { row: 2, col: 3, level: 14 },
  { row: 2, col: 4, level: 15 },
  { row: 2, col: 5, level: 16 },
  // Row 3 - punta del corazón (3 bloques)
  { row: 3, col: 2, level: 17 },
  { row: 3, col: 3, level: 18 },
  { row: 3, col: 4, level: 19 },
  // Row 4 - espacio vacío para forma
  { row: 4, col: 3, level: 20 },
]

export function PixelHeartGrid({ unlockedLevel, completedLevels, onBlockClick }: PixelHeartGridProps) {
  const visibleBlocks = HEART_LAYOUT.slice(0, 20)

  const maxCol = Math.max(...visibleBlocks.map(b => b.col))
  const maxRow = Math.max(...visibleBlocks.map(b => b.row))

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className="grid gap-2 md:gap-3"
        style={{
          gridTemplateColumns: `repeat(${maxCol + 1}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${maxRow + 1}, minmax(0, 1fr))`,
        }}
      >
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
