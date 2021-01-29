// static methods are not accessible through it's instancces like other class methods
// static methods are only accesible through "class" it self and are useful for any utility based functionality
class PersonWSM {
    static species() {console.log("homo sapiens")}
    static speciesCopy() {return "homo sapiens";}
    // static recognizeSpecies() {console.log("Humans are recognized as "+this.speciesCopy()+this.species+this.species())}
    // "this" refers to class itself when used within a "static" method inside any "class" rather tahn any "instances"
    static recognizeSpecies() {console.log("Humans are recognized as "+this.speciesCopy())}
    // static properties
    static speciesProp = "homo sapiens";
    static recognizeProp() {console.log("humans are "+this.speciesProp)}
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
        this.hasJob = false;
    }
    fullName () { return this.firstName+" "+this.lastName;}
    setfirstName(newName) {this.firstName = newName;}
    setlastName(newName) {this.lastName = newName;}
}
let s1 = new PersonWSM("who", "dat");
// s1.species(); // doesn't belong to instances
PersonWSM.species();
PersonWSM.recognizeSpecies();
console.log(PersonWSM.speciesProp);
PersonWSM.recognizeProp();