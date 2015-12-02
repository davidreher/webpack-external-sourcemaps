var path = require('path');

module.exports = {
  context: __dirname,
    entry: './index.ts',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    /*devtool: 'source-map',*/
    module: {
        /*preloaders: [
            {test: /\.js$/, loader: 'source-map'}
        ],*/
        loaders: [
            {test: /\.ts$/, loader: 'ts'}
        ]
    },
    resolve: {
        fallback: path.join(__dirname, 'node_modules')
    },
    resolveLoader: {
        fallback: path.join(__dirname, 'node_modules')
    }
};