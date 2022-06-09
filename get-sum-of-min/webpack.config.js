const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js",
    },
    devtool: "source-map",
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Get sum of two min numbers",
        }),   
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};