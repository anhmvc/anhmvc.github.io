const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Added below -----------
     {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         'file-loader',
       ],
     },
     // Added above ---------------
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};