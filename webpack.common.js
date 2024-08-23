import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const entry = {
  app: './src/index.js',
}
export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Elderlink',
    template: './src/index.html',
  }),
]
export const output = {
  filename: 'bundle.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
}
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
  ],
}
