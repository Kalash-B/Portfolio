/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        jump: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      animation: {
        'move-left': 'move-left 1s linear infinite', // Define the animation name and properties
      },
      keyframes: {
        'move-left': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      fontFamily: {
        "kanit": ['Kanit', 'ital']
      },
    },
  },
  plugins: [],
};
