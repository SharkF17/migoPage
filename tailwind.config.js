/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        migomorado: "#7B227C",
        migorosa: "#CC0F5A",
        migonegro: "#1D1D1B",
        migogris: "#3D3D3B",
        migonaranja: "#FFA500",
        azulin: "#0802A3",
        rosin: "#FF4B91",
        melonsin: "#FF7676",
        amarillin: "#FFCD4B",
      },
    },
  },
  plugins: [],
};
