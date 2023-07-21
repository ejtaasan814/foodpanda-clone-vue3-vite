/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        'head-logo': '40%',
        'head-nav-links': '60%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      colors: {
        deffontcolor: '#d70f64',
        pandaButton: '#ff2b85',
        pandaButtonHover:'#c21760',
      },
      spacing: {
        '11': '2.75rem',
      },
      height: {
        'bannerHeight': '30rem',
        'cardHeight': '32rem',
      },
      backgroundImage: {
        'card-1': "url('/src/assets/images/card-1.jpeg')",
        'card-2': "url('/src/assets/images/card-2.png')",
        'card-3': "url('/src/assets/images/card-3.jpeg')",
        'card-4': "url('/src/assets/images/card-4.png')",
        'card-5': "url('/src/assets/images/card-5.jpeg')",
        'card-6': "url('/src/assets/images/card-6.jpeg')",
        'about-banner': "url('/src/assets/images/about-banner.jpeg')"
      },
      zIndex: {
      '1': '1',
      },
      screens:{
        'med': '990px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
