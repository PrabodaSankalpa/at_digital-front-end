/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#6B3CC9",
        secondary: "#F28D35",
        analogous1: "#6A44F2",
        analogous2: "#1CBDDD",
        analogous3:"#4DCA79",
        triadic: "#52378C",
        dark: "#78BF91",
        white: "#FFF",
        textColor: "#2F2F2F",
        textColorLight: "#545A75",
        textColorSubtle: "9C9991",
        accent1: "E2F2FE",
        accent2: "FFF8EO",
        error: "#FF0335",
        success: "#5EB30B",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      fontSize: {
        xs: "14px",
        base: "16px",
        sm: "21px",
        medium: "22px",
        lg: "36px",
        xl: "48px",
        heading:"27px"
      },
    },
  },
  plugins: [],
};
