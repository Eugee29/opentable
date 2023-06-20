/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        opentable: {
          red: {
            100: "#DA3743",
            200: "#B8222D",
          },
        },
      },
    },
  },
  plugins: [],
};
