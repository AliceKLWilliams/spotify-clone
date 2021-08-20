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
      grey: '#302c2c'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
