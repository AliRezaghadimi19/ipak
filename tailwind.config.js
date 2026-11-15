/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5F8FC',
          100: '#EBF2F9',
          200: '#D6E4F2',
          300: '#CED4DA',
          400: '#6C757D',
          500: '#495057',
          600: '#343A40',
          700: '#212529',
          800: '#15191E',
          900: '#0C0F12',
          gold: '#B89246',
          'gold-light': '#D4AF67',
          'gold-dark': '#9A7632',
          navy: '#0F3053',
          'navy-light': '#184675',
          'navy-dark': '#091E35',
          'navy-subtle': '#EFF5FB',
          'navy-surface': '#153B66',
          cream: '#FAF8F5',
          'warm-gray': '#F4F6F9',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
