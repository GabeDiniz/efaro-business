/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blk: "#303030",
        base: "#69b4ff",
        accentLight: "#0085ff",
        accent: "#CEDFFF",
        darkCard: "#454545",
      },
    },
  },
  plugins: [],
};
