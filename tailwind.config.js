/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      Montserrat:['Montserrat', 'sans-serif'],
      Oswald:['Oswald', 'sans-serif'],
      Playfair:['Playfair', 'sans-serif'],
    },
    container:{
      center:true,
      padding:'2.5rem',
      screens:{
        lg:'1124px',
        xl:'1124px',
        '2xl':'1124px'
      }
    }
  },
  plugins: [],
}
