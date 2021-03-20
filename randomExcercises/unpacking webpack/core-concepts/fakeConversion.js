let doSomething = require("dom-something");

module.exports = function(source) {
    let newSource = doSomethingToSource(source);
    return source;
}