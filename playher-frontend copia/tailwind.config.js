/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#642CA9",
        secondary: "#D8D1D5",
        accent: "#FF36AB",
        background: "#FFFFFF",
        textMain: "#020202",
      },
      fontFamily: {
        heading: ['Poppins', "serif"],
        body: ['Poppins', "sans-serif"],
      },
    },
  },
  plugins: [],
};


