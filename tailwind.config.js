// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        navcol:
          {
            50: '#f5effb',
            100: '#dad5df',
            200: '#bfbac5',
            300: '#a69fad',
            400: '#8c8394',
            500: '#736a7b',
            600: '#595260',
            700: '#403b46',
            800: '#27222b',
            900: '#100a15',
          },
          premiercol:         
          {
            50: '#edf0fd',
            100: '#ced3e5',
            200: '#afb6cf',
            300: '#9099bb',
            400: '#707ba7',
            500: '#57628e',
            600: '#444c6f',
            700: '#2b3148',
            800: '#1c2132',
            900: '#080b17',
          }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}