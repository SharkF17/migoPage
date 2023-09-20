/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rosa': '#fd9ed8',
        'rosalogo': '#ce0f55',
        'moradologo': '#702277',
      },
    },
  },
  plugins: [],
}

