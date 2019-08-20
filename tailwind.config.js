module.exports = {
  theme: {
    extend: {
      height: {
        lg: "50vh",
        xl: "75vh",
      },
      minHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      spacing: {
        "2/3": "66.666667%",
        "2/5": "40%",
        "3/5": "60%",
      },
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-grid")({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: "0",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        "4-x": "1rem",
        "4-y": "1rem",
      },
      autoMinWidths: {
        "16": "4rem",
        "24": "6rem",
        "300px": "300px",
        "23": "23rem",
      },
      variants: ["responsive"],
    }),
  ],
}
