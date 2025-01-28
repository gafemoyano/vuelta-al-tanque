const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,njk}"],
  theme: {
    fontFamily: {
      display: [
        '"Apercu Pro"',
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      serif: [
        '"Cookie"',
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      body: [
        "Tiempos Text",
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
      text: colors.stone[600],
      background: "#fafaf9",
      primary: colors.yellow[500],
      secondary: "#04313c",
      muted: colors.stone[500],
      accent: colors.yellow[400],
      highlight: colors.yellow[100],
      gray: colors.gray[800],
      body: colors.stone[600],
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
