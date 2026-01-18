/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'magic-purple': '#A64D79',
        'magic-pink': '#FFB7C5',
        'magic-cream': '#FDFBF7',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
