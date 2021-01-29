// using constructor functions from ES5 to understand how "class" syntax makes this evenn better when needed
// "this" always refers to instances in any constructor functions:
function Person(firstName, lastName) {
    // anything that is prepended with "this" keyword will be public
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob= false;
    this.fullName = function() { return this.firstName+" "+this.lastName;}
    this.setFirstName = function(newName) {this.firstName = newName;}
    this.setLastName = function(newName) {this.lastName = newName;}

    // example of provate variable
    let secret = "BaeesLovin";
    // still possible to work with private variables from outside through methods allowing them to access
    this.getSecret = function() {console.log(secret);}
}
let p1 = new Person("ab", "sk");
console.log(p1);
let p2 = new Person("abappy", "sk");
console.log(p2);
console.log(p1.fullName(), p2.fullName());
console.log(p1.secret, p2.secret); // undefined, undefined
p1.getSecret();
p2.getSecret();
// function constructors are "old ways" of doing in likeness of "classes"