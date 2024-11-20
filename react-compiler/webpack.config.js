const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactCompilerConfig = { /* ... */ };
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // the bundle output path
    filename: 'main.js' // the name of the bundle
  },
  // import App from './App';
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html' // to import index.html file inside index.js
    })
  ],
  devServer: {
    port: 3036 // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:
              [
                "@babel/preset-env",
                [
                  "@babel/preset-react",
                  {
                    "runtime": "automatic"
                  }
                ]
              ],
            plugins: [
              ['babel-plugin-react-compiler', ReactCompilerConfig],
            ]
          }
        }
      }
    ]
  }
};
