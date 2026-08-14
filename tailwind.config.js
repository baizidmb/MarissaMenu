/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marissa: {
          gold: '#C19B77',
          goldDark: '#A8805B',
          goldLight: '#D4B494',
          goldBg: '#FDFBF7',
          dark: '#1C1C1C',
          slate: '#373737',
          cream: '#F8F6F2',
          border: '#E8E2D9',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
