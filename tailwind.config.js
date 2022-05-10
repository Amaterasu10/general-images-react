module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "masonry" : "repeat(9, 1fr)"
      },
      gridTemplateRows: {
        "masonry" : "repeat(9, auto)"
      }
    },
  },
  plugins: [],
}