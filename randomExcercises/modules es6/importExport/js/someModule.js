function cube(x) { return x * x * x;}
let foo = Math.PI + Math.SQRT2;
let graph = {
    options: {
        color: "white",
        thickness: "2px"
    },
    draw: function() { console.log("draw function for graph")}
}

export {cube, foo, graph};
// export {cube, foo, graph} from "./someModule.js";
// export {cube}