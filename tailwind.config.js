/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'], 
      },
      screens: {
        'smplus': '640px',
        'smplus-max': '648px',
      },
    },
  },
  plugins: [],
}