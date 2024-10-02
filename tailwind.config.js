/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg-home': "linear-gradient(rgba(0, 0, 0 ,0.3), rgba(0, 0, 0, 0.3)), url('/nasaBg.webp')",
      },
      fontFamily: {
        'nasa': ['Nasalization', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'nasa-yellow': '#B89814',
      }
    },
  },
  plugins: [],
}