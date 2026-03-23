export interface LevelData {
  level: number
  riddle: string
  answer: string
  message: string
  imageUrl: string
}

// Romantic riddles and messages for each level
export const LEVELS: LevelData[] = [
  {
    level: 1,
    riddle: "I have no voice, yet I speak to the heart. I have no wings, yet I make spirits fly. What am I?",
    answer: "love",
    message: "Just like this answer, you make my heart speak without words.",
    imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop"
  },
  {
    level: 2,
    riddle: "I'm given freely, yet priceless. I can be broken without being dropped. I'm fragile yet strong when nurtured. What am I?",
    answer: "heart",
    message: "You hold mine so gently, and I'll treasure yours forever.",
    imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop"
  },
  {
    level: 3,
    riddle: "I'm not a bird, but I can make time fly. I'm not magic, but I can make your cheeks glow. When we're together, I'm always there. What am I?",
    answer: "happiness",
    message: "Every moment with you is a moment of pure joy.",
    imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=400&fit=crop"
  },
  {
    level: 4,
    riddle: "I'm invisible but you can feel me. I grow stronger with time, not weaker. Distance can't break me, only make me stronger. What am I?",
    answer: "bond",
    message: "Our connection transcends everything - it's unbreakable.",
    imageUrl: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400&h=400&fit=crop"
  },
  {
    level: 5,
    riddle: "I'm the first thing in the morning you think of, and the last before sleep. I'm a whisper in your heart. What word describes this?",
    answer: "you",
    message: "Morning or night, you're always on my mind.",
    imageUrl: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400&h=400&fit=crop"
  },
  {
    level: 6,
    riddle: "I'm not a star, but I light up your world. I'm not the sun, but I bring warmth to your days. I'm not the moon, but I'm always there at night. What am I?",
    answer: "smile",
    message: "Your smile is the light that guides me through every day.",
    imageUrl: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=400&h=400&fit=crop"
  },
  {
    level: 7,
    riddle: "I'm made of moments, big and small. I'm built with care, patience, and trust. I'm our story that grows each day. What am I?",
    answer: "memories",
    message: "Every memory with you is a treasure I hold dear.",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop"
  },
  {
    level: 8,
    riddle: "I'm what happens when two hearts beat as one. I'm found in whispers and gentle touches. I'm the warmth between us. What am I?",
    answer: "intimacy",
    message: "In your arms, I've found my safe haven.",
    imageUrl: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=400&h=400&fit=crop"
  },
  {
    level: 9,
    riddle: "I'm what you give me without expecting anything in return. I'm patient and kind. I never fails. What am I according to the poets?",
    answer: "love",
    message: "Your unconditional love is the greatest gift.",
    imageUrl: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=400&fit=crop"
  },
  {
    level: 10,
    riddle: "I'm where you are, there I want to be. I'm not a place on any map, but where my heart belongs. What is this place?",
    answer: "home",
    message: "Home isn't a place - it's wherever you are.",
    imageUrl: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&h=400&fit=crop"
  },
  {
    level: 11,
    riddle: "I'm what we see when we look at each other. I'm what tomorrow holds for us. I'm bright and beautiful because you're in it. What am I?",
    answer: "future",
    message: "I can't imagine my future without you in it.",
    imageUrl: "https://images.unsplash.com/photo-1501238295340-c810d3c156d2?w=400&h=400&fit=crop"
  },
  {
    level: 12,
    riddle: "I'm the reason your day gets better. I'm what makes challenges worth facing. I'm your biggest supporter. Who am I?",
    answer: "partner",
    message: "Being your partner is the greatest honor of my life.",
    imageUrl: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop"
  },
  {
    level: 13,
    riddle: "I happen when two people decide to walk together. I'm the start of a beautiful journey. I'm more than a word - I'm a commitment. What am I?",
    answer: "together",
    message: "Together, there's nothing we can't overcome.",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=400&fit=crop"
  },
  {
    level: 14,
    riddle: "I'm the feeling that makes your heart race. I'm butterflies that never go away. I'm what I feel every time I see you. What is this feeling?",
    answer: "excitement",
    message: "Even after all this time, you still give me butterflies.",
    imageUrl: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop"
  },
  {
    level: 15,
    riddle: "I'm the promise of a lifetime. I'm the endless chapter of our story. I'm what I want with you - now and always. What word means without end?",
    answer: "forever",
    message: "Forever with you is my only wish. I love you endlessly.",
    imageUrl: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=400&h=400&fit=crop"
  }
]

export function getLevelData(level: number): LevelData | undefined {
  return LEVELS.find(l => l.level === level)
}
