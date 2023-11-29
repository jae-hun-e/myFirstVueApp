/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3'
      }
    }
  },
  plugins: []
}
