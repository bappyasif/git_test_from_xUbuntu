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
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}
let user = new User("Claire");
user.sayHi();
// a new object is created, constructor runs with given argument and assigns it to this.name
// and thus as an object of User{} class it has access to its methods as well, and letting us to sayHi()
