let path = require("path");
// let path = require("./node_modules/moment/min/moment-with-locales.js");
module.exports = {
    entry: "./src/usingNPM.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./dist")
    }
}