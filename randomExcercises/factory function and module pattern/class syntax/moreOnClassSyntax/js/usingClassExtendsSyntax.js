class PersonUEK {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
        this.hasJob = false;
    }
    fullName () { return this.firstName+" "+this.lastName;}
    setfirstName(newName) {this.firstName = newName;}
    setlastName(newName) {this.lastName = newName;}
}

// "extends" are used for creating sub classes from any super class
class Worker extends PersonUEK {
    // "extends" allows us to inherit from super class and also when needed we can rewrite any of those methods in super class
    constructor(fn, ln, job) {
        // "super" will call constructor from super class before any of its own "this" usage
        super(fn,ln);
        this.job = job;
        // we can also overwrite any super class properties as well just like for any methods as well
        this.hasJob = true;
    }
    setJob(newJob) {this.job = newJob;}
    // fullName() {super()}
}
let wroker01 = new Worker("laea", "super", "in-charge");;
console.log(wroker01.fullName(), wroker01.job ,wroker01.hasJob);
// worker01 will have inherited from it's super class and have access to it's methods and properties
// we can also have nested inhetance:
class Engineer extends Worker {
    constructor(fn,ln,job,isEngineer) {
        super(fn, ln, job);
        this.isEngineer = isEngineer;
    }
    // doTell() {console.log(this.fullname()+" is a "+this.isEngineer)}
    // doTell() {console.log(fullname()+" is a "+this.isEngineer)}
    // using super infront of any methods will call that mmethod from super class
    doTell() {console.log(super.fullName()+" is a "+this.isEngineer)}
    //  we can also directly access super class methods just by using "super";
    // fn() {super()}
    // fn() {super}
    fullName() {super.fullName()}
    // fullName() {super();}
}
let engineer01 = new Engineer("claire", "leae", "Engineer", "Web Engineer");
engineer01.doTell();
engineer01.fullName();