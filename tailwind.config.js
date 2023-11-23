/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    extend: {
      fontFamily: {
        'Ubuntu' : ['Ubuntu', 'sans-serif'],
        'Varela Round': ['Varela Round', 'sans-serif']
      }
    },
  },
  plugins: [],
}

