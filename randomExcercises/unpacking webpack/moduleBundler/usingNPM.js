// when using require without a module bundler will throw an error, because browser doesn't have access to our file system
// a JS module bundler is a tool that gets around this problem with a build step, which has access to file system to create a final output that is browser compatible, meaning doesn't have to have access to file system
// we need a module bundler to find a "require" statements and replace them with actual contents of each required file, resulting a single bundled JS file with no require statements
// most popular bundler was Browserify but since 2015 it's Webpack fueled by React framework, install webpack using "npm install webpack webpack-cli --save-dev"
// --save-dev saves it as a development dependencies which means it's required package for development environment but not for production server
// 
let moment = require("moment");
console.log("Hello from NPM world!!");
console.log(moment().startOf("day").fromNow());