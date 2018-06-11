const path = require('path');
const webpack=require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'lab.js',
        library: 'LAB',
        libraryTarget:'var'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname,'src')]
            }
        ]
    },
    resolve: {

    },
    devtool: 'none'
};