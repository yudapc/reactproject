module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    path: "./public/assets/",
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};
