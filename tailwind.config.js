/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#9a8174',
        secondary: '#3b3b3b',
        dark: '#050206',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

