const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/app.jsx",
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ['@babel/plugin-transform-react-jsx'],
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg|woff|ttf)$/,
        use: "file-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist2"),
    filename: "bundle.js"
  }
};