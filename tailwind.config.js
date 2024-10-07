/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#FF543E",
        "custom-off-white": "#F7F7F7",
      },
      fontFamily: {
        customFont: ["Bebas Neue", "roboto"],
        customSecondFont: ["Nunito Sans", "sans"],
      },
    },
  },
  plugins: [],
};
