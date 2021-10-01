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
      grey: {
        '200' : '#9CA3AF',
        '300': '#282020',
        DEFAULT: '#1c1919'
      }
    },
    extend: {
      padding: {
        'full': '100%'
      }
    }
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
