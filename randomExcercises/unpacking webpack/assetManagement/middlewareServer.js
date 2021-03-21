let express = require("express");
let webpack = require("webpack");
let webpackMiddleware = require("webpack-dev-middleware");

let app = express();
let config =  require("./webpack.config");
let compiler = webpack(config);

// telling express to use webpack-dev-middleware and use webpack.config.js
// configuration file as a base
app.use(
    webpackMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
);

// serving files on port 3030
app.listen(3030, ()=> {
    // http://127.0.0.1:3030/
    console.log("Example app listening on port 3030 \n");
});