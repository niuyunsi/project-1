
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "index.html"
});

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: "bundle.[hash].js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },


    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader" 
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    },
    plugins: [htmlPlugin]
};