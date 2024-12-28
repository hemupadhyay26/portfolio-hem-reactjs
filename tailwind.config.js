/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dac5a7',
        secondary: '#7f7466',
        box: '#22211e',
        background: '#0e0e0e',
        white: 'white',
        black: 'black',
      },
    },
  },
  plugins: [],
}