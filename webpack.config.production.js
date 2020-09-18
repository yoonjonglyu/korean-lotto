const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 웹팩 관련 모듈 불러오기
module.exports = {
  mode : 'production', // 개발 모드 와 프로덕트 모드 production 속도 <=> 배포
  entry : {
      app: './src/index.js', // 진입점 디폴트 src
  },
  output : { // 컴파일 결과물
      filename : '[name].[chunkhash].js', // 해시
      path : path.resolve(__dirname, 'dist'),
      publicPath: '/'
  },
  devtool : 'source-map', // 소스맵으로 디버깅 도움
  module : { // 모듈정의
      rules : [ // 처리 방법
          {
              test : /\.(js)$/,
              exclude : /node_modules/,
              use : ['babel-loader'] // 바벨룰
          },
          {
              test : /\.css%/,
              use : ExtractTextPlugin.extract({
                fallback : 'style-loader',
                 use : [
                     {
                         loader : 'css-loader',
                         options : {
                             modules : true,
                             importLoaders : 1,
                             camelCase : true,
                             sourceMap : true
                         }
                     },
                     {
                         loader : 'postcss-loader',
                         options : {
                             config : {
                                 ctx : {
                                     autoprefixer : {
                                         browsers : 'last 2 versions'
                                     }
                                 }
                             }
                         }
                     }
                 ] 
              })
          },
      ]
  },
  optimization : {
    splitChunks: {
        cacheGroups : {
            vendor : {
                chunks : 'initial',
                test : 'vendor',
                name : 'vendor',
                enforce : true
            }
        }
    }
  },
  plugins : [ // 플러그인
      new HtmlWebpackPlugin({
          template : 'public/index.html',
          //favicon : 'public/favicon.ico'
      }),
      new ExtractTextPlugin({
        filename: 'styles/styles.[hash].css',
        allChunks: true
      })
  ],
};