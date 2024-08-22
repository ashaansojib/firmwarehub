/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#00712D",
        "secondary":"#1E2A5E",
        "accent": "#5BBCFF",
      }
    },
  },
  plugins: [],
}