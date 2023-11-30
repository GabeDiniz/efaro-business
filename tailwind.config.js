/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackLight: "#303030",
        blackDark: "#1b1c1e",
        base: "#69b4ff",
        accentLight: "#0085ff",
        accent: "#69b4ff",
        darkCard: "#454545",
      },
    },
  },
  plugins: [],
};
