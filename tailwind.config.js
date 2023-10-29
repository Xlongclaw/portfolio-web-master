/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
      "rubik":['Rubik', 'sans-serif']
      },
      colors:{
        'custom-black':'#000000',
        'custom-gray':'#0F0F0F',
        'custom-lite':'#ffffff',
        'custom-red':'#e00000',
        'custom-ascent':'#17d3ba',
        'custom-light-gray':'#262626',
        'custom-dark-gray':'#1e1e1e',
      }
    },
  },
  plugins: [],
}

