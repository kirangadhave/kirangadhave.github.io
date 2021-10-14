module.exports = {
  purge: false,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
