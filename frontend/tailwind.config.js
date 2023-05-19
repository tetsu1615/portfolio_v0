/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
  },
  content: [],
  theme: {
    extend: {
      fontFamily: {
        main: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
