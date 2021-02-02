import {cube, foo, graph} from "./someModule.js";
// import {cube, foo, graph} from "./someModule.js";
// let {cube, foo, graph} = require( "/someModule.js");
// import * from "./someModulesomeModule.js";
graph.options = {
    color: "yellow",
    thickness: "2px"
};

graph.draw();
console.log(cube(2));
console.log(foo);