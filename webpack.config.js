const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 웹팩 관련 모듈 불러오기
const port = process.env.PORT || 38888;

module.exports = {
  mode : 'development', // 개발 모드 와 프로덕트 모드 production 속도 <=> 배포
  entry : './src/index.js', // 진입점 디폴트 src
  output : { // 컴파일 결과물
      filename : 'bundle.[hash].js' // 해시
  },
  devtool : 'inline-source-map', // 소스맵으로 디버깅 도움
  module : { // 모듈정의
      rules : [ // 처리 방법
          {
              test : /\.(js)$/,
              exclude : /node_modules/,
              use : ['babel-loader'] // 바벨룰
          },
          {
              test : /\.css%/,
              use : [
                  {
                      loader : 'style-loader'
                  },
                  {
                      loader : 'css-loader', // css 룰
                      options : {
                          modules : true,
                          camelCase : true,
                          sourceMap : true
                      }
                  }
              ]
          },
      ]
  },
  plugins : [ // 플러그인
      new HtmlWebpackPlugin({
          template : 'public/index.html',
          //favicon : 'public/favicon.ico'
      }),
      new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: { // 웹팩서버
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true
  }
};