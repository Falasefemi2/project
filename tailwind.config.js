/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'link-color': '#333333',
      'span-color': '#DBCA00',
      'btn-color': '#E16E4E',
      'border-color': '#FFFAFF'
    },
    fontFamily: {
      oswald: ["Oswald", 'sans-serif'],
      mulish: ["Mulish", 'sans-serif']
    },
    extend: {

    },
  },
  plugins: [],
}