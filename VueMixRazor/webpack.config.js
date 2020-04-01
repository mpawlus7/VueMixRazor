var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        'vuemixrazor.app': './wwwroot/js/site.js'
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),
        publicPath: '/wwwroot/dist/',
        filename: '[name].js'
    },
    mode: isProduction ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',

                    // Translates CSS into CommonJS
                    'css-loader',
                    'postcss-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    optimization: {
        minimize: isProduction
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    externals: {
        jquery: 'jQuery'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    performance: {
        hints: false
    },
    devtool: isProduction ? '#source-map' : '#eval-source-map'
};
