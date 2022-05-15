module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "masonry" : "repeat(9, 1fr)"
      },
      gridTemplateRows: {
        "masonry" : "repeat(9, auto)"
      },
      boxShadow: {
        'float': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      }
    },
  },
  plugins: [],
}