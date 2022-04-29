const plugin = require("tailwindcss/plugin");

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-x-20": {
      transform: "rotateX(20deg)",
    },
    ".rotate-x-40": {
      transform: "rotateX(40deg)",
    },
    ".rotate-x-60": {
      transform: "rotateX(60deg)",
    },
    ".rotate-x-80": {
      transform: "rotateX(80deg)",
    },
    ".rotate-x-160": {
      transform: "rotateX(160deg)",
    },
    ".rotate-x-180": {
      transform: "rotateX(180deg)",
    },
  });
});
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      dance: ["Dancing Script", "sans-serif"],
    },
    extend: {
      transform: {
        "rotate-45": "rotate(45deg)",
        "rotate-x-160": "rotateX(160deg)",
      },
    },
  },
  plugins: [rotateX],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};
