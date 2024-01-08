/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#2C3333',
        'dark-blue': '#395B64',
        'normal-blue': '#96b5b6',
        'semi-blue': '#b5dbdc',
        'light-blue': '#E7F6F2',
      },},
  },
  plugins: [],
}
