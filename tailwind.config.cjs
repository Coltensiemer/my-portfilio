/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { 
        inter: ['inter', 'serif']
      },
      colors: { 
        primary: "#DC960E",
        secondar: "#05ACB7",
        neutral: "#2E2D2E"
      }
    },
  },
  plugins: [],
}
