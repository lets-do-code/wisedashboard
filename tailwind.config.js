/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#121212',
        'secondary': '#5C5C5C',
        'tertiary': '#F4F0F0',
      }
    },
  },
  plugins: [],
}

