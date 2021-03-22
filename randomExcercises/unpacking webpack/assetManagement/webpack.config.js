let path = require("path");
// import json5 from "json5";
// import {json5} from "json5";
let json5 = require("json5");
// lets get html plugin
let HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
//   for single entry point
//   entry: "./src/index.js",
// for mutiple entry point
entry: {
    index: "./src/index.js",
    print: "./src/print.js"
},
  output: {
    //   when a single named output file is enough
    // filename: "bundleMain.js",
    // when you'll need dynamic output file to keep track of
    filename: `[name].bundle.js`,
    path: path.resolve(__dirname, "dist"),
    // using clean will keep "./dist" files generated for only Used resources, everything else will be left out
    // becareful it will get rd of ellverything else that doesn;t use by "./dist"  will be removed, so use it wisely
    clean: true,
    // using webpack-dev-middleware, which will mediate as a server for "./dist"
    publicPath: "/"
  },
  // including css-loader as Module
  //   module loaders can be chained and it runs inside out,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      //   lets include Module settings for Loading Images as well
    //   {
    //       test: /\.(png|svg|jpe?g|gif)$/i,
    //       type: "asset/resource"
    //   },
    // {
    //     test: /\.jpg$/i,
    //     type: "asset/resource"
    // },
    {
        test: /\.(png|svg|jpeg|jpg|gif)$/i,
        type: "asset/resource"
    },
    // Loading Fonts into Module
    // asset modules will take any file being loaded and output it to build directory
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
    },
    // loading data is another useful module that can be added, such as JSON, CSV, TSV, XML and as such
    // JSON has a built in capability within Node.js (import data from "./data.json"), to import other data types we need to have specefic loader for that as well
    {
        test: /\.(csv|tsv)$/i,
        use: [
            {loader: "csv-loader"}
        ]
    },
    {
        test: /\.xml$/i,
        use: [
            {loader: "xml-loader"}
        ]
    },
    // using custom JSON parser
    {
        test: /\.json5$/i,
        type: "json",
        parser: {
            parse: json5.parse
        }
    },
    // lets include babel transpiler
    {
      test: /\.m?js$/i,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env", {targets: "defaults"}]
          ]
        }
      }
    }
    ],
  },
//   let's add a plugin for htmlWebpackPlugin to fix genrated bundles to have New names not older names
plugins: [
    // using constructor call makes sense here, to get an instance of that plugin
    // this plugin will replace our index.html with its own version of index.html
    new HTMLWebpackPlugin({
        title: "Output Management",
        title: "Development"
    })
],
// let's use devtool to to trace error more correctly then just only pointing to bundle.js, not being specefic to where exactly it's happening from
devtool: "inline-source-map",
// using devServer
devServer: {
  contentBase: "./dist"
}
};
