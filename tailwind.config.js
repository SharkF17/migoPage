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
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-51%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite", // Ajusta el tiempo según la longitud del contenido
      },
    },
  },
  plugins: [],
};
