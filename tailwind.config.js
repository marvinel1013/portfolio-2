/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        dark: "#1b1b1b",
        primary: "#00296b",
        secondary: "#d81159",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(-3%)" },
        },
      },

      animation: {
        float: "float 5s ease-in-out infinite",
        spinSlow: "spin 13s linear infinite",
      },

      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffff 5px, #ffff 50px)",
        circularDark:
          "repeating-radial-gradient(#ffff 2px, #1b1b1b 5px, #1b1b1b 50px)",
      },
    },
  },
  plugins: [],
};
