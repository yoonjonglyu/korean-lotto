const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
        analyzerMode: "server",
        openAnalyzer: true,                   // 웹팩 빌드 후 보고서파일을 자동으로 열지 여부
    })
  ]
}