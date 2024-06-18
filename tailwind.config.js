/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    // overwrites all colors
    // colors: {
    // }
    extend: {
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
