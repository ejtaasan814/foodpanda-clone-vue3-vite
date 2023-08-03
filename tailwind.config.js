/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
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
        custom_section_color: '#f0f2f4'
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
        'about-banner': "url('/src/assets/images/about-banner.jpeg')",
        'newsroom-banner': "url('/src/assets/images/newsroom-banner.jpeg')",
        'contact-banner': "url('/src/assets/images/contact-banner.jpeg')",
        'ads-banner': "url('/src/assets/images/ads-banner.jpeg')",
        'carousel-1': "url('/src/assets/images/about-carousel-1.jpeg')",
        'carousel-2': "url('/src/assets/images/about-carousel-2.png')",
        'carousel-3': "url('/src/assets/images/about-carousel-3.jpeg')",
        'carousel-ads-1': "url('/src/assets/images/carousel-ads-1.jpeg')",
        'carousel-ads-2': "url('/src/assets/images/carousel-ads-2.jpeg')",
        'carousel-ads-3': "url('/src/assets/images/carousel-ads-3.jpeg')",
        'carousel-ads-4': "url('/src/assets/images/carousel-ads-4.jpeg')",
        'carousel-right': "url('/src/assets/images/icons/carousel-right.svg')",
        'carousel1-1': "url('/src/assets/images/ca-panda.jpeg')",
        'carousel1-2': "url('/src/assets/images/ca-panda1.jpeg')",
        'carousel1-3': "url('/src/assets/images/ca-panda2.jpeg')",
        'carousel1-4': "url('/src/assets/images/ca-panda3.jpeg')",
        'carousel1-5': "url('/src/assets/images/ca-panda4.jpeg')",
        'carousel1-6': "url('/src/assets/images/ca-panda5.jpeg')",
        'carousel1-7': "url('/src/assets/images/ca-panda6.jpeg')"
      },
      zIndex: {
      '1': '1',
      },
      screens:{
        'med': '990px',
      }
    },
  },
  plugins: [],
}
