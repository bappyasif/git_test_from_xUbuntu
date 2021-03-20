// not necessarily needed to boot up webpack though, 
// need to mention path name also to be specefic where exactly, oupt scrupt willl be within directory

// without webpack.config.js default output folder is "./dist"
let path = require("path");
// import our example plugin oor a custom plugin
// let ExamplePlugin = require("./examplePlugin.js");
// let webpackOOTB = require("webpack");
let webpack = require("webpack");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build")
    },
    // loaders setup using webpack.config.js, so that it can be added to dependency graph for Webpack
    module: {
        rules: [
            {
                test: /\.jpe?g$/,
                // use: {loader: "file-loader"}
                use: [
                    {loader: "file-loader"},
                ]
            }
        ]
    },
    // difference between Module and Plugins are heavuly due to how are they targetted to files
    // whichever functionality a "loaders" couldn't "plugins" could
    // "loaders" can only convert a single file right before it's added  to dependency graph
    // when you have to target mutiple files all at once, such as minified your code, bundle you css then Plugins are way to go
    plugins: [
        // we will initiate constructor call wiith essential parameterrs for it or none in this case
        // new ExamplePlugin()
        // new webpackOOTB.optimize.UglifyJsPlugin()
        // new webpack.optimize.UglifyJsPlugin()
        new webpack.ContextReplacementPlugin()
    ]
}

/**
 * 
 * 
 module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build")
    },
    // loaders setup using webpack.config.js, so that it can be added to dependency graph for Webpack
    module: {
        rules: [
            // they will most likely to have two attributes
            {
                // match all .js files
                test: /\.js$/,
                // and something to them using following loaded module
                // use: "some-loader"
            },
            // for example: babel-loader
            {
                test: /\.js$/,
                // use: "babel-loader",
                // use: {loader: "babel-loader"}  // "babel-loader" will be resolved as a Node Module from "./node_modules"
            },
            // most of times functional modules will be nested together
            {
                // for example iif we wanted to transform CSS file to a Javascript file
                // styleLoader(cssLoader(source))  // it will read from inside out style
                
                // but "use" prop works "right" to "left"
                // we can also use array of loaders rather than just single loader within "use"
                test: /\.css$/,
                // use: [
                //     "style-loader",
                //     "css-loader",
                //     "sass-loader",
                //     "less-loader"
                // ],
                // choose either this or previous format, but stay consistent in using them
                // use: [
                //     {loader: "style-loader"},
                //     {loader: "css-loader"},
                //     {loader: "sass-loader"},
                //     {loader: "less-loader"}
                // ]
            },
            // loaders have also different kind of options to pass into them as well
            {
                test: /\.jpeg$/,
                // use: [
                //     "url-loader"
                // ]
                use: [
                    // {loader: "url-loader", options: {
                    //     limir: 11000
                    // }},
                ]
            },
            // {
            //     test: /\.jpg$/,
            //     // use: {loader: "file-loader"}
            //     use: [
            //         {loader: "file-loader"},
            //         // we can specefiy deifferent compression units for all JPG's when required
            //         // {loader: "image-webpack-loader", options: {
            //         //     // some compressions as required
            //         // }},
            //     ]
            // },
            {
                test: /\.jpe?g$/,
                // use: {loader: "file-loader"}
                use: [
                    {loader: "file-loader"},
                    // we can specefiy deifferent compression units for all JPG's when required
                    // {loader: "image-webpack-loader", options: {
                    //     // some compressions as required
                    // }},
                ]
            }
        ]
    },
    // difference between Module and Plugins are heavuly due to how are they targetted to files
    // whichever functionality a "loaders" couldn't "plugins" could
    // "loaders" can only convert a single file right before it's added  to dependency graph
    // when you have to target mutiple files all at once, such as minified your code, bundle you css then Plugins are way to go
    plugins: [
        // we will initiate constructor call wiith essential parameterrs for it or none in this case
        // new ExamplePlugin()
        // new webpackOOTB.optimize.UglifyJsPlugin()
        // new webpack.optimize.UglifyJsPlugin()
        new webpack.ContextReplacementPlugin()
    ]
}
 */