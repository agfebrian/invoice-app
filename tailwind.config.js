/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          "01": "#7C5DFA",
          "02": "#9277FF",
          "06": "#888EB0",
          "07": "#7E88C3",
        },
        dark: {
          "03": "#1E2139",
          "04": "#252945",
          "08": "#0C0E16",
          "09": "#373B53",
          12: "#141625",
        },
        light: {
          "04": "#F9FAFE",
          "05": "#DFE3FA",
          11: "#F8F8FB",
        },
        success: {
          "01": "#33D69F",
        },
        warning: {
          "01": "#FF8F00",
        },
        error: {
          "08": "#EC5757",
          10: "#FF9797",
        },
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
        serif: ["League Spartan", "serif"],
      },
    },
  },
  plugins: [],
}
