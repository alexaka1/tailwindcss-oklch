import defaultTheme from 'tailwindcss/defaultTheme';
import oklch from '@alexaka1/tailwindcss-oklch';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  plugins: [oklch()],
  theme: {
    extend: {
      colors: {
        primary: `oklch(var(--color-primary-l) var(--color-primary-c) var(--color-primary-h) / <alpha-value>)`,
        body: `oklch(var(--color-body-l) var(--color-body-c) var(--color-body-h) / <alpha-value>)`,
      },
      transitionProperty: {
        DEFAULT: `${defaultTheme.transitionProperty.DEFAULT}, outline-color`,
        colors: `${defaultTheme.transitionProperty.colors}, outline-color`,
      },
    },
  },
};
