/*
 * webpack 配置
 */
var webpack = require("webpack");
var path = require('path');
var commonsPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fileVersion = new Date().getTime();

module.exports = {

    entry: {
        app: ['./src/app.js'],
        vendor: ["vue", "axios", "./src/api/baseApi.js", "./src/api/unionApi.js", "./src/common/commonBll.js"]
    },

    output: {
        publicPath: "/webResources/dist/",
        path: path.resolve(__dirname, '..', 'dist'), //打包后的文件存放的地方
        filename: './js/[name].min.js' //打包后输出文件的文件名
    },

    resolve: {
        extensions: ['.js', ".vue"],
        alias: {
            vue: 'vue/dist/vue.js',
        }
    },

    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0'],
                        plugins: ['transform-runtime']
                    }
                },
                exclude: /node_modules/
            },
            { test: /\.vue$/, loader: 'vue-loader' },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            },
            fileVersion: fileVersion //文件版本
        }),

        new ExtractTextPlugin('static/css/[name].css'),

        new commonsPlugin({
            name: ["vendor"],
            filename: "js/[name].min.js"
        }),

        //压缩配置
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: false
            },
            output: {
                comments: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin()
    ]

}