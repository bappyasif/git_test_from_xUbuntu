/**
 * In object oriented programming, a class is an extensible program-code-template for creating objects,
 * providing initial values for state(member functions oor methods) and implementation of behaviors(member functions or methods)
 */
// as we already know connstructor uses a "new" keyword to create an object,
// but in "class" construct uses a more advanced structure than constructor, which are useful for OOP
// basic syntax of class:
class exampleClass {
    // class methods
    constructor() {}
    method1(){}
    method2(){}
    method3(){}
    // ...
}
// then using "new exampleClass()" to create a new object with all those listed methods
// constructor() method is called automatically by "new" so that we can initialize object
class UserTest {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}
let user = new UserTest("Claire");
user.sayHi();
// a new object is created, constructor runs with given argument and assigns it to this.name
// and thus as an object of UserTest{} class it has access to its methods as well, and letting us to sayHi(), there is also no comma in between them within construct

// what is a "class", a "class" is a kind of function
class User {
    constructor(name) {this.name = name;}
    sayHi(){console.log("Hi "+this.name);}
}
user = new User("claire");
user.sayHi();
console.log(typeof User); // function type
// what User{..} construct really does is:
// - creates a function named User, that becomes result of class declaration, function code is taken from constructor method(empty when not written)
// - stores class methods, such as sayHi() in User.prototype
console.log(User === User.prototype.constructor, User === User.prototype);
console.log(User.prototype.sayHi, Object.getOwnPropertyNames(User.prototype));

// not just a Syntactic Sugar coating: syntaxt that is designed for easier to read, doesn't introduce anything new, because we could actually do same without using "class" keyword/construct:
function UserFunc(name) {
    this.name = name;
    // function sayHi(){console.log("Hi "+this.name)}
}
UserFunc.prototype.sayHi = function(){console.log("Hi "+this.name)}
user = new UserFunc("Claire");
user.sayHi();
// still there are important differences even though they seem just about same:
// - firstly, a function created by "class" is labelled by a special internal property [[FunctionKind]]:"classConstructor", so it's not same as creating it manually
// - unlike regualr function, it must be called with "new" keyword to create or instantiate an object from that construct
class UserExample {
    constructor(){}
}
console.log(typeof UserExample);
// UserExample(); // class constructor can not be invoked without "new"
// a string representation of a class constructor in most JavaScript engines start with "class" keyword in namespace
console.log(UserExample);
// - "class" methods are non-enumerable, dy definition it sets to enumerable flag to false for all methods in "prototype", iit's good because if we for..in over an object we dont want it's class methods
// - "class" uses "use strict" mode automatically in construct

// "class" expression: just like function it can also be defined inside another expression, passd around, return, and so on
let UserExpression = class {
    sayHi() {console.log("Zeggen Hoe!!")}
}
user = new UserExpression();
user.sayHi();
// similar to Named Function Expression,, so does "class" expression
// if it's a Named Expression, it's visible inside "class" only:
let UserExpr = class namedExpression {
    sayHi() {console.log(namedExpression, typeof namedExpression)}
}
user = new UserExpr();
user.sayHi();
// console.log(namedExpression); // not visible outside of class definition
// we can also make classes dynamically available "on-demand":
function makeClass(phrase) {
    return class {
        sayHi() {console.log(phrase);}
    }
}
// user = new makeClass("Hello");
// user().sayHi();
user = makeClass("Hello");
new user().sayHi();

// Getters/Setters: just like literal objects, classes can include getters/setters, computed properties and as such:
class UserDynamic {
    constructor(name) {this.name = name;}
    get name() {return this._name;}
    set name(newName) {this._name = newName;}
}
user = new UserDynamic("Claire");
console.log(user.name);
// user.name("Baeebee");
user.name = "Baeebee";
console.log(user.name);
// such class declarations works by creating getters and setters in "prototype" as well

// Computed Names[..]: computeed method using brackets [..]:
class ComputedNames {
    ["say"+"Hi"]() {
        console.log("Hallo jullie!!");
    }
}
new ComputedNames().sayHi();

// class fields: is a syntax to add any proeprty to its "class" construct
// important difference is that class fileds are set on individual objects but not on "prototype"
class ClassFields {
    name = "Baeebee";
    sayHi(){console.log("Hoi "+this.name);}
}
new ClassFields().sayHi();
console.log(ClassFields.prototype, ClassFields.prototype.name);
// we can also use more complex function to assign values to those fields:
class ClassField {
    name = prompt("Name, please?", "Ly");
}
// console.log(new ClassField().name);

// making bound methods with class fileds: javascript have a dynamic "this" bind depends on context of call
// so if an object method is passed around and called in another context, "this" won't be a refernce to it's object anymore
class Button {
    constructor(value) {this.value = value;}
    click() {console.log(this.value);}
}
let button = new Button("hello!!");
button.click(); // has context of "this"
setTimeout(button.click, 1100); // loses context of "this"
// it's known as loosing "this" context: there are two approaches to fix this:
// - pass a wrapper function
setTimeout(() => button.click(), 1100); // setTimeout(() => button.click, 2200);
// - bind method to object for example in class constructor
class ButtonBind {
    constructor(value) {this.value = value;}
    click = () => {console.log(this.value);}
}
button = new ButtonBind("Hallo!!");
setTimeout(button.click, 1100);
setTimeout(button.click(), 1100);
// class filed, click, is created on per object basis, 
// there's a separate function for each  ButtonBind{..} with "this" inside referencing that object, useful for event listeners

