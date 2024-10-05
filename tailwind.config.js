/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px"
      },
      colors: {
        "secondary": "#D9D9D9",
        "orange": "#F93F04"
      }
    },
  },
  plugins: [],
}

