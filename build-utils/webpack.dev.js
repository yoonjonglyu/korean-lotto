const commonPaths = require('./common-paths');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const port = process.env.PORT || 38888;

const config = {
    mode : 'development',
    entry : {
        app : `${commonPaths.appEntry}/index.js`
    },
    output : {
        filename : '[name].[hash].js'
    },
    devtool : 'inline-sourse-map',
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    {
                        loader : 'css-loader',
                        options : {
                            modules : true,
                            sourceMap : true
                        }
                    },
                    {
                        loader : 'postcss-loader',
                        options : {
                            postcssOptions : {
                                config : './postcss.config.js'
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : 'css/[name].[hash].css',
            chunkFilename : 'css/[id].[hash].css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: { // 웹팩서버
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
      }
}

module.exports = config;