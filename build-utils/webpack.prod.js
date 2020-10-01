const commonPaths = require('./common-paths');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode : 'production',
    entry : {
        app : [`${commonPaths.appEntry}/index.js`]
    },
    output : {
        filename : '[name].[chunkhash].js', // 해시
        path : commonPaths.outputPath,
        publicPath: './'
    },
    devtool : 'source-map',
    module : {
        rules : [
            {
                test : /\.css*/,
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
                    name : `/asset/[contenthash].[ext]`,
                }
            }
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
    plugins : [
        new MiniCssExtractPlugin({
            filename : 'css/[name].[hash].css',
            chunkFilename : 'css/[id].[hash].css'
        })
    ]
};

module.exports = config;