/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          activeCyan: "hsl(180, 66%, 55%)",
          Cyan: "hsl(180, 66%, 49%)",
          DarkViolet: "hsl(257, 27%, 26%)",
        },
        secondary: "hsl(0, 87%, 67%)",
        sectionBg: "hsl(225, 33%, 95%)",
        neutral: {
          white: "hsl(0, 0%, 100%)",
          Gray: " hsl(0, 0%, 75%)",
          GrayishViolet: "hsl(257, 7%, 63%)",
          VeryDarkBlue: "hsl(255, 11%, 22%)",
          VeryDarkViolet: " hsl(260, 8%, 14%)",
        },
      },
    },
  },
  plugins: [],
};
