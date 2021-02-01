import _ from "lodash";
function component() {
    let divEl = document.createElement("div");
    // lodash, currently included through script, is required for next line to execute
    // now we'll be using lodash through imported script
    divEl.innerHTML = _.join(["Hello", "Webpack"], " <> ");
    // as we're using lodash script in our html script tags, its getting gloabla variable "_" from that script and used it
    // webpack actually transpiles code so that older browser could also run it, besides "import" "export", webpack supports other modules syntaxes as well
    // if needed be to include a new configuration for this demo-webpack let's create "webpack.config.js" in same directory as "package.json"
    // in thet config file we need to  use this snippet: more or less similar
    /**
     let path = require("path");
     module.exports = {
         entry: "./src/index.js",
         output: {
             filename: "newMain.js"
             path: path.resolve(__dirname, "dist")
         }
     }
     and run "npx webpack --config webpack.config.js" in cli
     */

    // now that we have setup a command for "build", we can simply type in "npx run build" in cli instead to get same effect as earlier with "npx webpack"
    return divEl;
}
document.body.append(component());

/**
 initial .json

 {
  "name": "demo-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
 */