/** @type {import('tailwindcss').Config} */

import { screens as _screens } from 'tailwindcss/defaultTheme'; //check it

// eslint-disable-next-line no-undef
export const content = ['./src/**/*.{ts,tsx}', './index.html'];
export const theme = {
  extend: {
    screens: {
      md: '768px',
      xl: '1440px',
      ..._screens,
    },
    fontSize: {
      'customXL-h1': '5.5rem',
    },
    letterSpacing:{
      'customXL-h1': '-2.5px'
    }
  },
  fontFamily: {
    sans: ['"Space Grotesk"'],
  },
  letterSpacing: {
    tight: '-2.5px',
  },
  colors: {
    black: '#151515',
    blackBright: '#242424',
    green: '#4EE1A0',
    lightBlack: '#4EE1A0',
    grey: '#d9d9d9',
    white: '#FFFFFF',
  },
};
export const plugins = [];
