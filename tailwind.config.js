const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      primary: {
        900: "rgba(93, 14, 14, 1)",
        500: "rgba(93, 14, 14, 0.5)",
        200: "rgba(93, 14, 14, 0.2)",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
