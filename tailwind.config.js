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
        bgwhite: "#F6F5F5",
        rosin: "#EE99C2",
      },
    },
  },
  plugins: [],
};
