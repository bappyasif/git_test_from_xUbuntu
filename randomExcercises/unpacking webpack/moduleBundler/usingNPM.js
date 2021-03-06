// when using require without a module bundler will throw an error, because browser doesn't have access to our file system
// a JS module bundler is a tool that gets around this problem with a build step, which has access to file system to create a final output that is browser compatible, meaning doesn't have to have access to file system
// we need a module bundler to find a "require" statements and replace them with actual contents of each required file, resulting a single bundled JS file with no require statements
// most popular bundler was Browserify but since 2015 it's Webpack fueled by React framework, install webpack using "npm install webpack webpack-cli --save-dev"
// --save-dev saves it as a development dependencies which means it's required package for development environment but not for production server
// as --mode=development was showing error used configuration file webpack.config.js
// there installed "moment" and "npx" using --save for dvelopment mode
// before make webpack.config.js to woirk we need to tweak code directory structure a bit, having two different folder "./src" and "./dist"
// move entry point file into "./src" and configure webpack.config.js file with that address along with destination folder file name along with filapath resolve
// finally add that dist/filename.js or output file into our html script list and enjoy
// each time any new changes brought into entry point file we just need to rund npx webpack and thats website will also get those changes as well in action
let moment = require("moment");
console.log("Hello from NPM world!!");
console.log(moment().startOf("day").fromNow());
// document.body.append(document.createElement("div").textContent=moment().format());
// console.log(moment().format(), "<>");
// console.log("<>", moment.locale());