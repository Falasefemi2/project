/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'link-color': '#333333',
      'span-color': '#DBCA00',
      'btn-color': '#E16E4E',
      'border-color': '#FFFAFF',
      'black': '#202020',
      'grey': '#666666',
      'yellow': '#DBCA00',
      'white': '#FFFFFF'
    },
    fontFamily: {
      oswald: ["Oswald", 'sans-serif'],
      mulish: ["Mulish", 'sans-serif'],
      oswald: ["Oswald", 'sans-serif'],
      bitter: ['Bitter', 'sans-serif']
    },
    container: {
      center: true,
      screens: {
        sm: '428px',
        md: '1440px'
      }
    },
    extend: {

    },
  },
  plugins: [],
}