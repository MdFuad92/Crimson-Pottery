/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "bg-gradient-1":"linear-gradient(90deg, rgba(44,38,18,1) 0%, rgba(70,60,42,1) 35%, rgba(254,210,128,1) 100%)",
      fontFamily: {
        crimson:"'Crimson Text', serif",
        poppins:"'Poppins', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],

  },
  
  
}

