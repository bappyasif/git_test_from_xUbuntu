// class uses alll goodness from constructor and makes it better and easier readability
// "class" construct requires less of naming convention than of "constructors" methods would
class NewPerson {
    // class requires a constructor
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    // methods don't need any extra function keyword and variable assignement as it was in "constructors" methods
    fullName () { return this.firstName+" "+this.lastName;}
    setfirstName(newName) {this.firstName = newName;}
    setlastName(newName) {this.lastName = newName;}
}
// let person = Person("??","!!");
let p3 = new NewPerson("claire", "baee");
let p4 = new NewPerson("nessi", "baee");
console.log(p3.fullName(), p4.fullName());
p3.setfirstName("leyaa");
p4.setlastName("Baeebeee");
console.log(p3.fullName(), p4.fullName());
