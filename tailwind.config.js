/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/app1.html'],
  darkMode: 'class',
      theme: {
        extend: {
          spacing: {
            13: "3.25rem",
          },
          fontFamily: {
            inter: ["Inter"],
          },
          animation: {
            'spin-slow': 'spin 3s linear infinite',
            'goyang': 'goyang 1s ease-in-out infinite'
          },
          keyframes: {
            goyang: {
              '0%, 100%': { transform: 'rotate(-9deg)' },
              '50%': { transform: 'rotate(9deg)' }
            }
          }
        },
      },
  plugins: [],
}

