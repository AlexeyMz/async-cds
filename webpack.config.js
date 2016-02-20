var webpack = require('webpack');
var path = require("path");

var tsSrcDir = path.join(__dirname, 'src'),
    npmDir = path.join(__dirname, 'node_modules');

module.exports = {
    entry: {
        main: path.join(tsSrcDir, 'test.ts'),
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.webpack.js', '.web.js', '.js'],
        alias: {}
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [],
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name]-bundle.js",
        chunkFilename: "[id]-chunk.js"
    },
    devtool: "#inline-source-map"
}
