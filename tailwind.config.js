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
      white: "white",
      transparent: "transparent",
      current: "currentColor",
      blue: colors.lightBlue,
      pink: colors.rose,
      text: '#04313c',
      background: '#c4eaef',
      primary: colors.lightBlue[600],
      secondary: '#5CE1E5',
      // secondary: '#00c2d7',
      muted: colors.lightBlue[200],
      accent: colors.pink[500],
      gray: colors.coolGray[800],
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
const cyan = {
  cyan1: '#fafdfe',
  cyan2: '#f2fcfd',
  cyan3: '#e7f9fb',
  cyan4: '#d8f3f6',
  cyan5: '#c4eaef',
  cyan6: '#aadee6',
  cyan7: '#84cdda',
  cyan8: '#3db9cf',
  cyan9: '#05a2c2',
  cyan10: '#0894b3',
  cyan11: '#0c7792',
  cyan12: '#04313c',
}