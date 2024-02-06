/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/components/*.tsx', './src/app/**/*.tsx'],
  theme: {
    screens: {
      xs: '400px',
      sm: '600px',
      md: '800px',
      lg: '1000px',
      xl: '1200px',
      '2xl': '1400px'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-roboto-mono)']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
