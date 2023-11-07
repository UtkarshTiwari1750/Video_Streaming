/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'glow': 'glowing 20s linear infinite'
      },
      fontFamily: {
        'libre': "'Libre Baskerville', serif",
        'Roboto': "'Roboto Slab', serif",
        'Nonum' : "'Nanum Brush Script', cursive"
      }
    },
  },
  plugins: [],
}