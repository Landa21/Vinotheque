/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // User provided palette
        background: "#0B0B0B",
        surface: "#1A1A1A",
        primary: "#F5F5F5",
        muted: "#B3B3B3",
        accent: "#6B1F2B",
        accentHover: "#541923",
        border: "#2A2A2A",
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
        heading: ['"Montserrat"', 'sans-serif'],
        nav: ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
