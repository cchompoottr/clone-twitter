/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // ตำแหน่งที่ Tailwind จะค้นหา class
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1DA1F2',
      },
    },
  },
  plugins: [],
}
