/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        elianto: 'Elianto',
        ailerons: 'Ailerons',
        blanka: 'Blanka',
        anurati: 'Anurati',
      },
      colors: {
        lightText: '#0f1015',
        darkText: '#FFFFFF'
      }
    },
  },
  plugins: [],
}
