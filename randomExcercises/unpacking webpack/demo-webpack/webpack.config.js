let path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "newMain.js",
        path: path.resolve(__dirname, "dist")
    }
}