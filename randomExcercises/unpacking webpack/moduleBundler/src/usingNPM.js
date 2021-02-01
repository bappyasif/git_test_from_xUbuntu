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
document.body.append(document.createElement("div").textContent=moment().format());
console.log(moment().format(), "<>");
console.log("<>", moment.locale());

// this way of working has a huge advantage, we no longer using direct script and global variables from those script files
// rather we'll be using "require" and having a single JS bundle helps in performance better, there are other powerful features that we can get acquainted with

// Transpiling code means converting code from one language to another similar, this is a nother important part off frontend development
// as transpiler is quite powerful as it lets developers to convert their code for much older browsers, hence improve code reachability to much larger audience

// as we'have seen so far, whenever there's a change in our entry point file.js, we have to run command repeatedly to sem them in action on browser
// to solve that we will use task runner to reduce those redundant writing of command and automate them for convenience

// using a task runner: now that we're invested in using a build step to work with JavaScript modules, it makes sense to use a "task runner"
// which autoamtes different parts of build process, which includes minifying code, optimizing images, running tests and as such

// currently tools such as Grunt and Gulp is quite popular  but they both replies on plugins that wrap other command line tools.
// we can also create different build scripts in our .json file for converting Saas to css, compressing images, running test, minified code and so on, anything that has a command line is a fair game