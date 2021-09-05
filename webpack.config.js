const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //  path: 'build/',
    //  file: 'bundle.js',
    //  publicPath: 'dist/assets',
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin({})
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 4200,
  },
  // devServer: {
  //   hot: true,
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   publicPath: '/',
  //   host: '192.168.100.151',
  //   port: 8080,
  //   proxy: {
  //     '/api/**': {
  //       target: '192.168.3.186:8000',
  //       secure: false,
  //       changeOrigin: true,
  //     }
  //   },
  // },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(sass|scss$)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.hbs$/,
        use: [{
          loader: 'handlebars-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'Viewes',
            publicPath: 'Viewes',
          }
        }]
      },
      // {
      //   test: /\.php$/,
      //   loaders: [
      //     'html-minify',
      //     'php-loader',
      //   ]
      // },

      {
        test: /\.(jpg|svg|png|gif|webp)$/,
        use: [{
          loader: 'file-loader',
          options: {
            // name: '[name].[ext]',
            // // name: '[path][name].[ext]',
            // outputPath: 'img',
            // publicPath: '/img',

            // postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`,
            name: '[path][name].[ext]',
            context: '/src/img',
            outputPath: 'img',
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 70
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            // the webp option will enable WEBP
            // webp: {
            //   // quality: 75
            // }
          }

        }
        ]
      },
      {
        test: /\.(mp3|m4a|mp4)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: 'src',
            outputPath: '/media',

            // name: '[name].[ext]',
            // outputPath: 'media',
            // publicPath: '/media',
          },

        },
        ]


      },

      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }



    ]
  }
}