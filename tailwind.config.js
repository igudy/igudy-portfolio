/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ClashDisplay', 'Poppins', 'sans-serif'],
        display: ['ClashDisplay', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#18ce1f',
          dark: '#014b01',
        },
      },
    },
  },
  plugins: [],
}
