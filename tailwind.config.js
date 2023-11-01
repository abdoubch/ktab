/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-marron": "#805E1D",
        "main-beige": "#F9F6F0",
        "main-black": "#514A4A",
      },
    },
  },
  plugins: [],
};
