module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    // path: "./public/assets/",
    path: __dirname + "/dist/js", // or path: path.join(__dirname, "dist/js"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};
