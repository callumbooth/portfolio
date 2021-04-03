const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      base: ["proxima-nova", "Arial", "Helvetica", "Sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      background: "#efefef",
      gray: colors.trueGray,
      primary: {
        900: "rgba(49, 7, 7, 1)",
        main: "rgba(93, 14, 14, 1)",
        500: "rgba(93, 14, 14, 0.5)",
        200: "rgba(93, 14, 14, 0.2)",
      },
    },
    extend: {
      width: {
        100: "25rem",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
      },
      strokeWidth: {
        3: 3,
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
