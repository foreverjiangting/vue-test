/*
 * webpack 配置
 */
var webpack = require("webpack");
var path = require('path');
var commonsPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    devtool: 'source-map',

    entry: {
        app: ['./src/app.js'],
        vendor: ["vue", "axios", "./src/api/baseApi.js", "./src/api/unionApi.js", "./src/common/commonBll.js"]
    }, //多页应用，多个入口文件

    output: {
        path: path.resolve(__dirname, '..', 'dist'), //打包后的文件存放的地方
        filename: '[name].min.js' //打包后输出文件的文件名
    },

    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js',
            //bootstrap:  path.resolve(__dirname, '..', 'node_modules/bootstrap/dist/css/bootstrap.min.css')
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

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        new commonsPlugin({
            name: ["vendor"],
            filename: "[name].min.js"
        }),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            inject: true,
            template: './index.html'
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin()
    ]

}