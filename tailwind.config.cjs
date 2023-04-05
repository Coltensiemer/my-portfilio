/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      
      },
      colors: {
        primary: "#DC960E",
        secondary: "#05ACB7",
        neutral: "#2E2D2E",
        neutral2: "#77777",
        neutral3:"#424242"
      },
      backgroundImage: {
        'hero': "url('/src/assets/pngs/fadedbackground.png')",
      },
      boxShadow: {
        '3xl': "18px 21px 41px -25px rgba(0,0,0,1)",
    },
  } 
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
