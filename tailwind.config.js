/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Space Grotesk"'],
    },
    fontSize: {
      hxl: '88px',
    },
    letterSpacing: {
      tight: '-2.5px',
    },
    lineHeight: {
      hxl: '88px',
    },
    colors: {
      black: '#151515',
      blackBright: '#242424',
      green: '#4EE1A0',
      lightBlack: '#4EE1A0',
      grey: '#d9d9d9',
      white: '#FFFFFF',
    },
  },

  plugins: [],
};
