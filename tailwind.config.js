/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#06070b',
        night: '#0b0d16',
        panel: '#11131d',
        accent: {
          100: 'rgb(var(--a100) / <alpha-value>)',
          200: 'rgb(var(--a200) / <alpha-value>)',
          300: 'rgb(var(--a300) / <alpha-value>)',
          400: 'rgb(var(--a400) / <alpha-value>)',
          500: 'rgb(var(--a500) / <alpha-value>)',
          700: 'rgb(var(--a700) / <alpha-value>)',
        },
        mist: '#9aa1b2',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        label: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        sign: ['"Mrs Saint Delafield"', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
