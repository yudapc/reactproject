module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    // path: "./public/assets/",
    path: __dirname + "/dist/js", // or path: path.join(__dirname, "dist/js"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: __dirname,
      query: {
        presets: [ 'es2015', 'react' ]
      }
    }]
  }
};
