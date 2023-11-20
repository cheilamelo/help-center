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
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1900px',
        // => @media (min-width: 1900px) { ... }
    },
    extend: {
      colors: {
        primary: {
          50: '#B0E6D2',
          100: '#3CBC8D',
          200: '#32AA82',
          300: '#A7DA75',
          DEFAULT: '#3CBC8D'
        },
        grayscale: {
          50: '#EDEDED',
          100: '#D5D7E8',
          200: '#ABAED1',
          300: '#444B55',
          400: '#353860',
          500: '#282A48',
          600: '#1A1C30',
          700: '#0D0E18'
        },
        bluescale: {
          50: '#3BB5EF',
          100: '#424678',
          200: '#5CC1F2'
        },
        redscale: {
          50: '#FF4E32',
          100: '#FF6C54'
        },
        yellowscale: {
          50: '#FCB400'
        },
        purplescale: {
          50: '#424678'
        }
      },
      boxShadow: {
        '3xl': ' 0px -16px 4px rgba(0, 0, 0, 0.25)'
      }
    },
    animation: {
      fadeIn: 'fadeIn 5s',
      wiggle: 'wiggle 1s ease-in-out infinite',
      fadeInLeft: 'fadeInLeft 1.5s',
      fadeInUp: 'fadeInUp 4s',
      fadeInRight: 'fadeInRight 4s',
      slideInUp: 'slideInUp 4s'
    },
    keyframes: {
      fadeIn: {
        '0%': {
          opacity: 0
        },
        '100%': {
          opacity: 1
        }
      },
      wiggle: {
        '0%, 100%': {
          transform: 'rotate(-3deg)'
        },
        '50%': {
          transform: 'rotate(3deg)'
        }
      },
      fadeInLeft: {
        '0%': {
          transform: 'translate3d(-100%,0,0)',
          visibility: 'visible'
        },
        '100%': {
          transform: 'translate3d(0,0,0)'
        }
      },
      fadeInUp: {
        '0%': {
          opacity: 0,
          transform: 'translate3d(0, 100%, 0)'
        },
        '100%': {
          opacity: 1,
          transform: 'translateZ(0)'
        }
      },
      fadeInRight: {
        '0%': {
          opacity: 0,
          transform: 'translate3d(100%, 0, 0)'
        },
        '100%': {
          opacity: 1,
          transform: 'none'
        }
      },
      slideInUp: {
        '0%': {
          visibility: 'visible',
          transform: 'translateY(100%)'
        },
        '100%': {
          transform: 'translateY(0)'
        }
      }
    },
    plugins: []
  }
}
