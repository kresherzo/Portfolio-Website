/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{ts,tsx}"
  ],

  // Можно оставить, если хочешь, чтобы утилиты побеждали кастомные стили
  important: true,

  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        accent: { DEFAULT: "#8B5CF6" }, // violet-500
        baseBg: "#0B0D12",              // был "base" → теперь "baseBg"
        panel:  "#12141B",
      },
      maxWidth: { screen: "1200px" },
      borderRadius: { xxl: "1.25rem" },
    },
  },
  plugins: [],
};
