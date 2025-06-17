/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
    headline: ['"Barlow Condensed"','Helvetica Neue Condensed','Anton', 'Impact', 'sans-serif'],
     druk: ['var(--font-druk)'],
        inter: ['var(--font-inter)'],
  }},
  },
  plugins: [],
}