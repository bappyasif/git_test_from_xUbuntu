// classes are templates for creating objects, they encapsualte data with code to work on that data
// classes are special "functions" and can be defined as "function expressions" and "function declations", it has "class expression" and "class declarations"

// Class Declarations: to declare a class use "class" keyword:
class Rectangle00 {
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }
}
// Hoisting: an important distinction between function and class declarations is that, function declarations are "hoisted" but class declarations are not
// first of, class needs to be declared before using it in code and access it otherwise will throw an error:
/**
 let p = new RP();
 class RP { }
 */

// Class Expressions: is another way of defining a class, it can be "named" or "unnamed"
// "named" expression is local to "class" body not accessible outside of it's "class" scope, it can be accessd through "class"'s property but not any instances property
// unnamed example:
let rectangle = class {
    constructor(h,w) {
        this.height = h;
        this.width = w;
    }
};
console.log(rectangle.name);
// named example:
let rectangle01 = class rectangle02 {
    constructor(h,w) {
        this.height = h;
        this.width = w;
    }
};
console.log(rectangle01.name);
// "class" expressions are subjeect to the same hoisting restrictions as same as described in "class" declarattions

// Class body and method definitions: body of a class is within a curly barces, that's where a "class" gets defined, such as as members, methods or constructor
// "class" body is executed in "strict mode" for increased performace
// "constructor" method is a special method for creating and initializing an object created with a "class", 
// there can only be one special method "constructor" in a "class" else an error will be thrown when used more than once, it can use "super" to call constructor of it's super "class"
// Prototype methods:
class Rectangle {
    constructor(h,w) {
        this.height = h;
        this.width = w;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height*this.width;
    }
}
let square = new Rectangle(11,11);
// console.log(square, square.calcArea(), square.area, square.area());
console.log(square, square.calcArea(), square.area);
// Generator Methods:
class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }
    // getSides() {
    //     for(let side of this.sides) {
    //         yield side;
    //     }
    // }
    *getSides() {
        for(let side of this.sides) {
            yield side;
        }
    }
}
let pentagon = new Polygon(1,2,3,4,5);
console.log(pentagon, pentagon.getSides(), [...pentagon.getSides()]);
// Static methods and properties: "static" keyword defines a method or property for a "class", only can be accessed via "class" not by it's instances
// "static" methods are usually used as Utility functions, whereas "statoc" properties are useful for caches, fixed-configuration, or anyother data that don't need to be replicated across instances
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static displayName = "PointClass";
    static distance(a,b) {
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
let p1 = new Point(5,5);
let p2 = new Point(10,10);
p1.displayName // undefined
p2.distance; // undefined
console.log(Point.name, Point.distance(p1, p2), Point.displayName);
// Binding "this" with prototype and "static" methods: when a "static" or "prototype" method is called without a value for "this", such as assigning a method to a variable and then calling it, "this" will be "undefined" inside method
class Animal {
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}
let obj = new Animal();
console.log(obj.speak());
// let speak = obj.speak();
let speak = obj.speak;
speak(); // "this" undefined
console.log(speak, speak());
// console.log(Animal.eat());
Animal.eat();
let eat = Animal.eat;
// let eat = Animal.eat();
console.log(eat()); // "this" undefined
// if we re write above snippet using function-based syntax in non-strict mode
// then "this" methods calls are automaticallly bound to "initial" value of "this" which by default is "global object" , in "strict-mode" this auto binding doesn't happen, it remains value passed for "this" instead
function animal() {
    animal.prototype.speak = function() {return this;}
    animal.eat = function() {return this;}
}
obj = new animal();
speak = obj.speak;
speak();
console.log(speak());
eat = animal.eat;
// this = "global";
console.log(eat());

