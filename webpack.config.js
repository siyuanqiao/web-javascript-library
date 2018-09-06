const path = require('path');

module.exports = {
    entry: {
        'lab':'./src/index.js',
        'collection':'./src/index_collection.js'
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        library: 'lab',
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