const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        serif: [
          "Open Sans",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      fontSize: {
        sm: ["1rem", "2rem"],
      },
      height: {
        // 1 unit = 0.25 rem
        72: "18rem",
        74: "18.5rem",
        76: "19rem",
        78: "19.5rem",
        80: "20rem",
        82: "20.5rem",
        84: "21rem",
        86: "21.5rem",
        88: "22.5rem",
        90: "23rem",
        92: "23.5rem",
        94: "24rem",
        96: "24.5rem",
        98: "25rem",
        100: "25.5rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
