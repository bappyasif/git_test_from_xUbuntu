// let's say we have some shaps and we wanted to sum all areas of shapes
// lets create our shapes factory functions and setup required parameters
let circle = radius => {
    let proto = {
        type: "Circle"
    }
    return Object.assign(Object.create(proto), { radius })
};

let square = length => {
    let proto = {
        type: "Square"
    }
    return Object.assign(Object.create(proto), { length });
};
// in js, any function that is not a class or or constructor function and returning an object is called "Factory Function"
// lets create an areaCalculator factory function annd then write up logic to sum up area of all provided shapes
let areaCalculator = shape => {
    let proto = {
        sum() {
            // sum logic
        },
        output() {
            return `
                <h1>
                    sum of areas provided: ${this.sum()}
                </h1>
            `
        }
    }
    return Object.assign(Object.create(proto), { shapes: shape })
};
// to use areaCalculator, we simple call function and pass an array of shapes and display output at page
let shapes = [
    circle(2),
    square(4),
    square(8)
];
let areas = areaCalculator(shapes);
console.log(areas);
// problem with that areaCalculator output method is that what if user wants it in as JSON or something else
// all of logic would be handled by areaCalculator function should only sum all areas of shapes provided and should not carre about what output format shoud look like JSON or HTML
// to fix this we can create a sumCalculatorOutputter factory function and use to handdle whatever logic needed to display calculated areas
/**
 let output = sumCalculatorOutputter(areas);
 console.log(output.JSON(), output.HTML());
 */
// now whatever logic needed to output data to user is now handled by sumCalculatorOutputter function separately than it was done previously

// Open-Closed Prinicple: objects or entities should be open for extension but closed for modification
// which means we should be able to to add new features or components to application without breaking existing code
// closed for modification means that we should not introduce breaking changes to existing functionality, because that would rewuire a lot of refactoring of existing code
// let's look at our sum method from areaCalculator function and implement this for purpose
areaCalculator = shape => {
    let proto = {
        sum() {
            let area = [];
            for (shape of this.shapes) {
                if (shape.type === "Square") {
                    area.push(Math.pow(shape.length, 2));
                } else if (shape.type === "Circle") {
                    area.push(Math.PI * Math.pow(shape.length, 2));
                }
            }
            return area.reduce((val, curr) => curr += val, 0);
        }
    }
    return Object.assign(Object.create(proto), { shapes: shape })
};
// now if we wanted to be able to sum of areas for more shapes, we would have to ad more if..else blocks and that goes against Open-Close Priniciple
// a way we can make this sum() method better is to remove logic to calculate area of each shape out of sum method and attach it to shapes factory functions
square = length => {
    let proto = {
        type: "Square",
        area() {
            return Math.pow(this.length, 2)
        }
    }
    return Object.assign(Object.create(proto), { length });
}
// same can be done for Circle as well
circle = radius => {
    let proto = {
        type: "Circle",
        area() {
            return (Math.PI * Math.pow(shape.radius, 2));
        }
    }
    return Object.assign(Object.create(proto), { radius })
};
// now to calculate sume of any shapes provided should be as simple as:
areaCalculator = shape => {
    let proto = {
        sum() {
            let area = [];
            for (shape of this.shapes) {
                area.push(shape.area());
            }
            return area.reduce((val, curr) => curr += val, 0);
        }
    }
    return Object.assign(Object.create(proto), { shapes: shape })
};
// now we can create another shape class without have to modifying our existing code base
// however, now we've anotther problem to solve, which is how to bee sure paased in object is actually a Shape or it has a method named area() in it
// thus come into rescue, concept of "interface" though JavaScript doesn't have interface keyword, but we can accomplish it using a factory function, also known as function composition
let shapeInterface = shapeState => ({
    type: "shapeInterface",
    area: () => shapeState.area(shapeState)
});
// let's implement this to our sqaure factory fucntion from earlier
square = length => {
    let proto = {
        length,
        type: "Square",
        area(args) {
            return Math.pow(args.length, 2)
        }
    }
    let basics = shapeInterface(proto);
    let composite = Object.assign({}, basics);
    return Object.assign(Object.create(composite), { length });
}
// and same can be done for Circle type too
circle = radius => {
    let proto = {
        radius,
        type: "Circle",
        area(args) {
            return (Math.PI * Math.pow(args.radius, 2));
        }
    }
    let basics = shapeInterface(proto);
    let composite = Object.assign({}, basics);
    return Object.assign(Object.create(composite), { radius })
};
// let's access square factory function
let s = square(5);
console.log("OBJ\n", s);
console.log("PROTO\n", Object.getPrototypeOf(s));
console.log(s.area());
// let's access circle factory function
let c = circle(5);
console.log("ONJ\n", c);
console.log("PROTO\n", Object.getPrototypeOf(c));
console.log(c.area());
// in areaCalculator() we can check if passed in shapes are actually a prototype of shapeInterface, otherwise show an exception
areaCalculator = shape => {
    let proto = {
        sum() {
            let area = [];
            for (shape of this.shapes) {
                if(Object.getPrototypeOf(shape).type === "shapeInterface") {
                    area.push(shape.area());
                } else {
                    throw new Error("this is not a shapeInterface object");
                }
            }
            return area.reduce((val, curr) => curr += val, 0);
        }
    }
    return Object.assign(Object.create(proto), { shapes: shape })
};
// console.log(areaCalculator(shapes));

// Liskov substitution principle: let q(x) be a property provable about objects of x of type T
// then q(y) should also be provable for objects y of type S, where S is a subtype of T
// what does it mean is, every subclass/derived class should be substitutable for their base/parent class
// in simpler terms, a subclass should override parent class method without have to break its existing functionality from client's point of view
//  let's say we have a volumeCalculator which extends from areaCalculator factory function
// int his case for extending an object without breaking changes is to do it by using Object.assign() and Object.getPrototypeOf():
let volumeCalculator = shape => {
    let proto = {
        type: "volumeCalculator"
    }
    let areaCalcProto = Object.getPrototypeOf(areaCalculator());
    let inherit = Object.assign({}, areaCalcProto, proto);
    return Object.assign(Object.create(inherit), {shapes: shape});
}

// Interface segregation principle: a client should never be forced to implement an interface method it doesn't use
// continuing on our shapes examplee, we know that we alls have solid shapes, so since we would also want to calculate volume of those shapes
// so we can introduce another contract to our shapeInterface factory function from earlier and add to it
shapeInterface = shapeState => ({
    type: "shapeInterface",
    area: () => shapeState.area(shapeState),
    volume: () => shapeState.volume(shapeState)
});
// so as of now, we can see that our current implementation of shapeInterface will enforce our square shapes to include volume method which it has no use of, as they are flat shapes and have no volume
// according to Interface Segregtion Principle says no to this, instead we could create another interface called solidShapedInterface and that has volume contract in it.. for shapes like cubes can implement this interface
shapeInterface = shapeState => ({
    type: "shapeInterface",
    area: () => shapeState.area(shapeState)
});
let solidShapeInterface = shapeState => ({
    type: "solidShapeInterface",
    volume: () => shapeState.volume(shapeState)
});
let cubeExample = length => {
    let proto = {
        length,
        type: "CubeExample",
        area: args => Math.pow(args.length, 2),
        volume: args => Math.pow(args.length, 4)
    }
    let basics = shapeInterface(proto);
    let complex = solidShapeInterface(proto);
    let abstraction = manageShapeInterface(
        () => basics.area() + complex.volume()
    );
    let composite = Object.assign({}, basics, abstraction);
    return Object.assign(Object.create(composite), {length})
}
// her with manageShapeInterface we are abstracting again calculate function using Higher Order Functions to do that
/**
let animals = ["dog", "cat"];
let isDog = animal => animal === "dog";
console.log(animals.filter(isDog), animals.filter(!isDog));
 */

// Dependecy Inversion Principle: entities must depend on abstraction but not on concretion, higher level modules mmmust not depend on lower level modules but should depend on abstractions rather
// as a dynamic language, JavaScript doesn't require use of abstraction to fascilitate decoupling
// therefore stipulation that abstractions shouldn't depend upon details isn't particularly relevant to JavaScript aapplications
// but stupulation that higher level modules must not depend on lower leevel modules is however relevant
// from a functional point of view, these containers and injection concepts can be solved with a simple higher order function, or hole in the middle type of pattern which are built right into the language
// this principle allows for decoupling, we made it before, lets code with our manageShapeINteerface and see how we accomplish calculate method
let manageShapeInterface = func => ({
    type: "manageShapeInterface",
    calculate: () => func()
});
// what manageShapeInterface function recieves as function argument is a higher order function
// that decouples for every shape functionality to accomplish needed logic to get final calculation, let see how this is done in shape objects
square = length => {
    let proto = {
        length,
        type: "Square",
        area(args) {
            return Math.pow(args.length, 2)
        }
    }
    let basics = shapeInterface(proto);
    let abstraction = manageShapeInterface(() => basics.area());
    let composite = Object.assign({}, basics, abstraction);
    return Object.assign(Object.create(composite), { length });
}
// for square what we need to calculate is just getting area of shape and for a cubeExample
// what we need is summing area with volume and that is everything need to avoid coupling and get abstraction
// and same can be done for Circle type too
circle = radius => {
    let proto = {
        radius,
        type: "Circle",
        area(args) {
            return (Math.PI * Math.pow(args.radius, 2));
        }
    }
    let basics = shapeInterface(proto);
    let abstraction = manageShapeInterface(() => basics.area());
    let composite = Object.assign({}, basics, abstraction);
    return Object.assign(Object.create(composite), { radius })
};
areaCalculator = shape => {
    let proto = {
        type: "areaCalculator",
        sum() {
            let area = [];
            for (shape of this.shapes) {
                area.push(shape.area());
            }
            return area.reduce((val, curr) => curr += val, 0);
        }
    }
    return Object.assign(Object.create(proto), { shapes: shape })
};
// lets create our sumCalculatorOutputter function to display output 
let sumCalculatorOutputter = area => {
    let proto = {
        JSON() {return JSON.stringify(this.calculator.sum())},
        HAML() {return `HAML format`},
        HTML() {
            return `
                <h1>
                    sum of areas of provided shapes: ${this.calculator.sum()}
                </h1>
            `;
        },
        JADE(){return `JADE format`}
    }
    return Object.assign(Object.create(proto), {calculator: area})
}
shapes = [
    circle(2),
    square(4),
    square(8)
];
let solids = [cubeExample(4)];

areas = areaCalculator(shapes);
let volume = volumeCalculator(solids);

let output = sumCalculatorOutputter(areas);
let output2 = sumCalculatorOutputter(volume);

console.log(output.JSON());
// console.log(output.HAML());
console.log(output.HTML());
// console.log(output.JADE());

console.log(output2.JSON());
// console.log(output2.HAML());
console.log(output2.HTML());
// console.log(output2.JADE());

// in conclusion: when you take SOLID priniciples to their extremes, you'd find functional programming looks quite attractive
// JavaScript is a multi paradigm programming language and we can apply solid principles to it, and great of it is that, we can combine it with functional programming paradigm and get best fo both worlds


/**
 // some common OOP priniciples:
// prototypal inheritance:
let corebook = function(title){this.title = title;}
corebook.prototype.title = () => console.log("title: "+this.title);
// corebook.prototype.author = author => console.log("author: "+this.author);
corebook.prototype.summary = author => console.log(this.title+" is written by "+this.author);
// corebook.prototype.summary = () => console.log(this.title+" is written by "+this.author);
// corebook.prototype.summary = function(author) {console.log(this.title+" is written by "+this.author);}
// let book = (title, author) => corebook.call(this, title, author);
let book = function(title, author)  {corebook.call(this, title, author);}
book.prototype = Object.create(corebook.prototype);
let book01 = new book("test", "ab");
// book01.title();
// book01.summary();

relation  between objects will be defined by association, aggregation and composition
Association: is relationship between two or more objects, 1 to 1, 1 to many, many to 1, many to many
b1=  new book("t", "a")
b2=  new book("t", "b")
b2.multiplicity = b1;

Aggregation: special case of association, where one of them can have more major role than that of other
owner object is often called Aggregate and owned object is called Component, and also a "Has-A" relationship
let publication = {n: "publication Inc", books: []};
publication.books.push(b1, b2);
b1 and b2 are added into publication object and if opoublication object is deleted until b1 and b2 are available, then both book and publication live independntly

Composition: is a special case of aggregation, when an object contains another object and contained object can't live without that container object
book ={
    t: "title",
    a: "author",
    publication: {
        n: "publication Inc",
        address: "planet earth"
    }
}
here publication is a property strictly bounded within book object and publication cant live without it, iff books gets deleted so does publication

Composition over Inheritance: inheritance creates a relationship of "Is-A" whereas composition uses "Has-A", "Is" or "Dd" respectively
let getTitle = d => {title: () => console.log("title: "+d.title)}
let getAuthor = d => {author: () => console.log("author: "+d.author)}
let getSummary = () => {summary: () => console.log("update summary")};
book = (t,a) => {
    let data = {t, a};
    return Object.assign({}, getTitle(data), getAuthor(data), getSummary());
}
let b1 = book("test", "ab");
b1.title();
 */