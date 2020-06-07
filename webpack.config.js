const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.(gif|jpg|png)$/,
        use: "url-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devServer: {
    contentBase: "./public"
  }
}
