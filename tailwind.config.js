const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    colors: {
      primary: {
        DEFAULT: '#FFFFFF',
        dark: '#303030',
      },
      secondary: {
        DEFAULT: '#F5F5F5',
        dark: '#3f3f3f',
      },
      tertiary: {
        DEFAULT: '#EAEAEA',
        dark: '#4C5052',
      },
      blue: {
        DEFAULT: '#2661D8',
        highlight: '#376BD3',
      },
      color: {
        dark: '#333232',
        'white': '#FFFFFF',
        'gray': '#AAAAAA',
        'dark-gray': '#8B8B8B'
      },
    },
    fontSize: {
      ...defaultTheme.fontSize,
      mega: '105px',
      '2xl': '35px',
      xl: '25px',
      lg: '15px',
      base: '13px',
      sm: '11px',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
