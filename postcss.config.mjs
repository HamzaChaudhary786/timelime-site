/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      screens: {
        '1440': '1440px', // Custom breakpoint
      },
    },
  },
  plugins: {
    '@tailwindcss/postcss': {},
  },
};