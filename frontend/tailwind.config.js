/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  content: {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        main: ["Noto Sans JP", "sans-serif"],
      },
      colors: {
        bg: '#F5F5F5',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: false,
  },
}
