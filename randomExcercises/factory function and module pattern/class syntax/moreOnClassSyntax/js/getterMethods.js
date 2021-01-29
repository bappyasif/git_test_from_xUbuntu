class PersonWSGM {
// static methods can also have "get" functionality as for other methods as well
static get species() {return "Homo Sapiens";}
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
        this.hasJob = false;
    }
    fullName () { return this.firstName+" "+this.lastName;}
    setfirstName(newName) {this.firstName = newName;}
    setlastName(newName) {this.lastName = newName;}
}

class WorkerConstruct extends PersonWSGM {
    constructor(fn, ln, job) {
        super(fn,ln);
        this.job = job;
        this.hasJob = true;
    }
    setJob(newJob) {this.job = newJob;}
    biography() {
        let bio = (this.fullName()+ " is a "+this.job).toUpperCase();
        return bio;
    }
    // using "get" keyword infornt make a method behaves as a "property" to its caller
    get bio() {
        let bio = (this.fullName()+ " is a "+this.job).toUpperCase();
        return bio;
    }
}
let w2 = new WorkerConstruct("ab", "sk", "web engineer");
console.log(w2.biography());
console.log(w2.bio);
console.log(PersonWSGM.species);
console.log(WorkerConstruct.species);