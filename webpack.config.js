
var baseConfig = {
    module: {
	loaders: [
	    {
		test: /\.js$/,
		loader: "babel-loader",
		exclude: /node_modules/
	    }
	]
    }
}

var handsConfig = Object.assign({}, baseConfig, {
    name: "hands",
    entry: ["./src/hands.core.js"],
    output: {
	path: "./",
	filename: "hands.js"
    }
});

var examplesConfig = Object.assign({}, baseConfig, {
    name: "examples",
    entry: [ __dirname + "/examples/index.js"],
    output: {
	path: __dirname + "/examples/",
	filename: "bundle.js"
    }
});


// export configurations for library src and example src
module.exports = [
    handsConfig,
    examplesConfig,
]
