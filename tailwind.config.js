/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/lib/esm/**/*.js',
  './node_modules/flowbite/**/*.js'],
  

  theme: {
    extend: {

      colors: {
        'bluetheme':'#01013b'
      },
      backgroundImage: {
        'hero_pattern': "url('/src/images/programming-background-concept.jpg')",
        
        
      },
    },
  },
  plugins: [ require('flowbite/plugin')]
  
}

