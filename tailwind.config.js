/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        softBlack: 'hsla(220, 26%, 14%, 1)',
        bgBlack: 'hsla(0, 0%, 60%, 1)',
      },
      fontFamily: {
        sans: ['Plus Jakarta ', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

