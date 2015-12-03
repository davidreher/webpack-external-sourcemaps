var path = require('path');

var nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
  context: __dirname,
    entry: './index.ts',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [{ test: /\.js$/, loader: 'source-map' }],
        loaders: [
            { test: /\.ts$/, loader: 'babel!ts' },
            { test: /\.js$/, loader: 'babel' },
        ]
    },
    resolve: { fallback: nodeModulesPath },
    resolveLoader: { fallback: nodeModulesPath }
};