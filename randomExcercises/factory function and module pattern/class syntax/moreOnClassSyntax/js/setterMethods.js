class PersonUSM {
    // static methods can also have "get" functionality as for other methods as well
    static get species() {return "Homo Sapiens";}
        constructor(fn, ln) {
            this.firstName = fn;
            this.lastName = ln;
            this.hasJob = false;
        }
        fullName () { return this.firstName+" "+this.lastName;}
        get fN () { return this.firstName+" "+this.lastName;}
        setfirstName(newName) {this.firstName = newName;}
        setlastName(newName) {this.lastName = newName;}
        set fullNameSetter(fn) {
            fn = fn.split(" ");
            this.setfirstName(fn[0]);
            this.setlastName(fn[1]);
        }
    }
    
    class WorkerStruct extends PersonUSM {
        static set speciesUpdater(update) {this.spec = update;}
        static get checkSpecies() {console.log(super.species);}
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
    let w3 = new WorkerStruct("ab", "sk", "web engineer");
    // w3.fullName("AB", "SK");
    // w3.fullName();
    w3.fullNameSetter = "AB SK";
    // w3.fullName
    // console.log(w3.fullName())
    console.log(w3.firstName, w3.lastName, w3.fullName(), w3.fN);
    // WorkerStruct.speciesUpdater("home sapiens");
    WorkerStruct.speciesUpdater = "home sapiens";
    console.log(WorkerStruct.spec);
    WorkerStruct.checkSpecies;

