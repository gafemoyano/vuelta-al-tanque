/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {},
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.neutral.700"),
            // a: {
            //   "text-decoration": theme("textDecoration.underline"),
            //   "font-weight": theme("fontWeight.medium"),
            // },
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
