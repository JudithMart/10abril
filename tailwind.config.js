/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pixel-sky': '#5c94fc',
        'pixel-cloud': '#ffffff',
        'pixel-dark': '#1a1a1a',
        'pixel-red': '#ff004c',
        'pixel-pink': '#ff77aa',
        'pixel-gold': '#fcd34d',
      }
    },
  },
  plugins: [],
}