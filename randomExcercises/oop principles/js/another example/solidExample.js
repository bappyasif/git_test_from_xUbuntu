// let's say we have some shaps and we wanted to sum all areas of shapes
// lets create our shapes factory functions and setup required parameters
let circle = radius => {
    let proto = {
        type: "Circle"
    }
    return Object.assign(Object.create(proto), {radius})
};

let square =  length =>  {
    let proto = {
        type: "Square"
    }
    return Object.assign(Object.create(proto), {length});
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
    return Object.assign(Object.create(proto), {shapes: shape})
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
let output = sumCalculatorOutputter(areas);
console.log(output.JSON(), output.HTML());
// now whatever logic needed to output data to user is now handled by sumCalculatorOutputter function separately than it was done previously

// Open-Closed Prinicple: objects or entities should be open for extension but closed for modification
// which means we should be able to to add new features or components to application without breaking existing code
// closed for modification means that we should not introduce breaking changes to existing functionality, because that would rewuire a lot of refactoring of existing code
// let's look at our sum method from areaCalculator function and implement this for purpose
areaCalculator = shape => {
    let proto = {
        sum() {
            let area = [];
            for(shape of this.shapes) {
                if(shape.type === "Square") {
                    area.push(Math.pow(shape.length, 2));
                } else if(shape.type === "Circle") {
                    area.push(Math.PI * Math.pow(shape.length, 2));
                }
            }
            return area.reduce((val,curr) => curr += val, 0);
        }
    }
    return Object.assign(Object.create(proto), {shapes: shape})
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
    return Object.assign(Object.create(proto), {length});   
}
// same can be done for Circle as well
circle = radius => {
    let proto = {
        type: "Circle",
        area() {
            return (Math.PI * Math.pow(shape.length, 2));
        }
    }
    return Object.assign(Object.create(proto), {radius})
};
// now to calculate sume of any shapes provided should be as simple as:
areaCalculator = shape => {
    let proto = {
        sum() {
            let area = [];
            for(shape of this.shapes) {
                area.push(shape.area());
            }
            return area.reduce((val,curr) => curr += val, 0);
        }
    }
    return Object.assign(Object.create(proto), {shapes: shape})
};
// now we can create another shape class without have to modifying our existing code base
// however,