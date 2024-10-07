/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#5313CA",
        secondary: "#050729",
        accent: "#FF9736",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
        clashDisplay: ["ClashDisplay-Semibold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
