/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '320px', // Mobile: 320px – 480px
        'tablet': '601px', // Tablet: 601px – 768px
        'laptop': '1025px', // Laptop+: 1025px – 1280px
        'wide':'1441px',//Wide moniters
      },
    },
  },
  plugins: [],
}
