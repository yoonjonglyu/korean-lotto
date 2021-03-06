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
                    'css-loader',
                    {
                        loader : 'postcss-loader',
                        options : {
                            postcssOptions : {
                                config : './postcss.config.js'
                            }
                        }
                    }
                ]
            },
            {
                test : /\.(png|jpe?g|git)$/,
                loader : 'file-loader',
                options : {
                    name : `[contenthash].[ext]`,
                }
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