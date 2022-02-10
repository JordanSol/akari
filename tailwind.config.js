module.exports = {
  content: ["/components/layout.js", "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px"
      },
      fontFamily: {
        acier: "'acier-bat-solid'",
        acierOutline: "'acier-bat-outline'"
      },
      rotate: {
        '270': "270deg"
      },
      fontSize: {
        '8xl': '7rem',
        '9xl': '9rem'
      },
      colors: {
        sitePurple: '#140027'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    },
  },
  plugins: [],
}
