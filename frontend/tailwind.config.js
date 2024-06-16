/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#007aff",
        lightGreen: "#24ccb8",
        orange: "#ff9500",
        yellow: "#ffd322",
        red: "#ff5967",
        violet: "#9d61ff",
        darkBlack: "#5f6979",
        lightBlack: "#818891",
        veryLightBlack: "#f5f6fa",
      },
      extend: {
        hover: {
          blue: "#007aff",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
