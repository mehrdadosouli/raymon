/** @type {import('tailwindcss').Config} */  
module.exports = {  
  darkMode: 'selector',
  content: [  
    "./index.html",  
    "./src/**/*.{vue,js,ts,jsx,tsx}" // Adjust according to your file structure  
  ],  
  theme: {  
    extend: {
      colors: {  
        primary_background: 'white',
        secondary_background: '#AAAAAA',
        primary_skeleton: '#8F8F8F',
        primary_text_color: '#1c1c1c',
        secondary_text_color: '#8e918f',
      },
      backgroundImage: {
        bg_sliderImage:"url('./assets/bg.jpg')"
      }
    },  
  },  
  plugins: [],  
}