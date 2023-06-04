/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bgColor: "#282A42",
        sidebar: "#30334E",
        bgLight: "#373a5e",
        green: "#64C623",
        blue: "#40CDFA",
        lightPurple: "#666CFF",
      },
    },
  },

  plugins: [],
};
