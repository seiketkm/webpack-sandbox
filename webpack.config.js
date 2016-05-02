var webpack = require("webpack");

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
	sourceMapFilename: "[file].map"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devtool: "source-map",
    plugins: [
	new webpack.ProvidePlugin({
	    $: "jquery"
	})
    ]
};
