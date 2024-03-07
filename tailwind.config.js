/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlue: {
          light: "#66B2FF",
          dark: "#0070E0",
        },
        myGreen: "#99CC99",
        myPurple: "#CC99FF",
        myGray: "#999999",
        myWhite: "#F5F5F5",
      },
      fontFamily: {
        playfair: [`"Playfair Display"`, "serif"],
        lato: [`"Lato"`, "sans-serif"],
      },
    },
  },
  plugins: [],
};
