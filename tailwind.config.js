/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js, ts, vue}', './src/**/*'],
  theme: {
    extend: {
      colors: {
        background: '#1C1E22',
        primary: '#0EE6B7'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
