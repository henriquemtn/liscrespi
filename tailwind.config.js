/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ss': '1150px',
        'ms': '951px',
        'ds': '1280px',
      }
    },
  },
  plugins: [],
}