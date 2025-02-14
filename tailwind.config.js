/** @type {import('tailwindcss').Config} */

import { screens as _screens } from 'tailwindcss/defaultTheme';

export const content = ['./src/**/*.{ts,tsx}', './index.html'];
export const theme = {
  extend: {
    screens: {
      md: '768px',
      xl: '1440px',
      ..._screens,
    },
    fontFamily: {
      sans: ['"Space Grotesk"'],
    },
    fontSize: {
      h1: ['88px', '88px'],
      h2: ['48px', '56px'],
      h3: ['24px', '32px'],
      p: ['18px', '28px'],
    },
    fontWeight: {
      h1: '700', // Bold
      h2: '700', // Bold
      h3: '700', // Bold
      p: '500', // Medium
    },
    letterSpacing: {
      h1: '-0.156rem', // -2.5px
      h2: '-0.09375rem', // -1.5px
    },
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
