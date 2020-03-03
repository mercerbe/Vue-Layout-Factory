const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true, // Needed until Vuetify is out
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      well: 'rgba(238, 242, 247, .5)',
      gray: {
        '100': '#EEF2F7',
        '200': '#DEE4EB',
        '300': '#C1CCD9',
        '400': '#5D6F83',
      },
      blue: {
        '100': '#60E6FC',
        '200': '#40BCFF',
        '300': '#2753FF',
        '400': '#1930BA',
        '500': '#0A1A6C',
        '600': '#051540',
      },
      green: {
        '100': '#66FF78',
      },
      orange: {
        '100': '#FD7254',
        '300': '#E22900',
      },

      red: {
        '100': '#FD367C',
        '200': '#F51A66',
        '300': '#E1004F',
        '400': '#C60045',
      },
    },
    boxShadow: {
      default:
        '0 1px 3px 0 rgba(5, 21, 64, .1), 0 1px 2px 0 rgba(5, 21, 64, .06)',
      md:
        ' 0 4px 6px -1px rgba(5, 21, 64, .1), 0 2px 4px -1px rgba(5, 21, 64, .06)',
      lg:
        ' 0 10px 15px -3px rgba(5, 21, 64, .1), 0 4px 6px -2px rgba(5, 21, 64, .05)',
      xl:
        ' 0 20px 25px -5px rgba(5, 21, 64, .1), 0 10px 10px -5px rgba(5, 21, 64, .04)',
      '2xl': '0 25px 50px -12px rgba(5, 21, 64, .25)',
      inner: 'inset 0 2px 4px 0 rgba(5, 21, 64, 0.06)',
      outline: '0 0 0 2px #40BCFF',
      none: 'none',
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    display: ['responsive', 'group-hover'],
    padding: ['odd'],
    margin: ['responsive', 'first'],
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    textColor: ['hover', 'group-hover'],
  },
  plugins: [],
}
