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
        '"Lilita One"',
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
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      current: "currentColor",
      text: "#04313c",
      background: "#fafaf9",
      primary: colors.lightBlue[900],
      secondary: "#04313c",
      muted: colors.warmGray[100],
      accent: colors.pink[500],
      highlight: colors.lightBlue[100],
      gray: colors.coolGray[800],
      body: colors.warmGray[800],
    },

    extend: {
      colors: {},
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.body"),
            a: {
              color: theme("colors.accent"),
              "&:hover": {
                color: theme("colors.primary"),
              },
            },
            // ...
          },
        },
      }),
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
