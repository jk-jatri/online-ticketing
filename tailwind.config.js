const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    "custom-yellow": "red",
  },
}

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Myriad Pro'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}