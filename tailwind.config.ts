/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '320px',
      // => @media (min-width: 320px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1900px'
      // => @media (min-width: 1900px) { ... }
    },
    extend: {
      colors: {
        greenscale: {
          50: '#63C9A4',
          100: '#3CBC8D',
          200: '#01996D'
        },
        bluescale: {
          50: '#5DBBEA'
        },
        yellowscale: {
          50: '#E4C066'
        },
        redscale: {
          50: '#FF644D'
        },
        purplescale: {
          50: '#B2B3C2',
          100: '#ABAED1',
          200: '#5D6080',
          300: '#3F4369',
          400: '#2A2D4D',
          500: '#20223A',
          600: '#151626'
        },
        grayscale: {
          50: '#F2F4F6',
          100: '#EDEDED',
          200: '#DBDDDF',
          300: '#B4B7BB',
          400: '#A1A5AA',
          500: '#94989E',
          600: '#7C8797',
          700: '#575D66',
          800: '#434C59'
        }
      },
      backgroundImage: {
        'hero-home': "url('/images/pictures/hero-home.png')"
      }
    },
    plugins: []
  }
}
