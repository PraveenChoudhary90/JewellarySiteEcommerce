/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'goldish-accent': '#D4AF37', // The classic gold accent
        'goldish-dark': '#111111',
        'goldish-gray': '#F5F5F5',
        'goldish-text': '#555555',
      },
      fontFamily: {
        // Goldish uses a classic serif for headings and clean sans for body
        serif: ['"Jost"', '"Playfair Display"', 'serif'], 
        sans: ['"Inter"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}