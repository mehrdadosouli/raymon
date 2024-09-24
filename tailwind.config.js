/** @type {import('tailwindcss').Config} */  
module.exports = {  
  content: [  
    "./index.html",  
    "./src/**/*.{vue,js,ts,jsx,tsx}" // Adjust according to your file structure  
  ],  
  theme: {  
    extend: {
      colors: {  
        primary_background: 'white',
        secondary_background: '#A4A4A4',
        primary__bg_skeleton: '#8F8F8F',
        primary_text_color: '#1c1c1c',
        secondary_text_color: '#8e918f',
      },
    },  
  },  
  plugins: [],  
}