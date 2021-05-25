const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    mode: "all",
    content: ["./**/*.{html,njk}"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily: {
      display: [
        '"Noto Sans"',
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      body: [
        "Inter",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    container: {
      center: true,
    },
    colors: {
      white: "white",
      transparent: "transparent",
      current: "currentColor",
      blue: colors.blue,
      gray: colors.gray,
      pink: colors.rose,
      primary: colors.lightBlue[900],
      secondary: colors.amber[200],
    },

    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {
      flex: ["even"],
      margin: ["even"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
