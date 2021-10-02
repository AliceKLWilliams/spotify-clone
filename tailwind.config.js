module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        DEFAULT: '#1DB954'
      },
      white: '#FFF',
      black: '#191414',
      'light-grey': {
        DEFAULT : '#9CA3AF',
      },
      grey: {
        '200': '#352b2b',
        '300': '#282020',
        DEFAULT: '#1c1919'
      }
    },
    fontFamily: {
      'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'Arial', 'sans-serif']
    }, 
    extend: {
      padding: {
        'full': '100%'
      },
      fontSize: {
        'xxs': '0.5rem'
      }
    }
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
