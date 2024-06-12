const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{js,html}", "./*.{js,html}"],
  theme: {
    extend: {
      colors: {
        't1-motion-blue': '#A7C4CC',
        't1-motion-dark-blue': '#095E7A',
      },
      fontFamily: {
        sans: ['SF Pro', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'leaf-pattern': "url('/assets/images/bg-pattern.png')",
      },
    },
  },
  plugins: [],
}

