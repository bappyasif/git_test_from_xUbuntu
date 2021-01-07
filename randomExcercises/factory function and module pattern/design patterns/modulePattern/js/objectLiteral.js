// modules are integral piece of any robust application's structure, it keeps units of code for a project separated and organized
// in JavaScript there are several options for implementing modules:
// - Module Pattern
// - Object Literal notation pattern
// - AMD modules (more modern)
// - CommonJS modules (more modern)
// - ECMAScript harmony modules (more modern)

// Object Literals Notation Pattern, doesn't require "new" to instantiate object from it, neew members can be add from outside object notation:
let olpModule = {
    myProp: "someValue",
    // object literals can have properties and methods, also objects to configure module at hand
    moduleConfig: {
        useCaching: true,
        language: "en"
    },
    // some basic method examples
    saySomething() {
        console.log("Saying something");
    },
    reportConfig() {
        console.log("caching is: "+(this.moduleConfig.useCaching ? "enabled" : "disabled"));
    },
    updateConfig(newConfig) {
        if(typeof newConfig === "object") {
            this.moduleConfig = newConfig;
            console.log(this.moduleConfig.language);
        }
    }
};
// accessing object module props
olpModule.saySomething();
olpModule.reportConfig();
olpModule.updateConfig({
    language: "nl",
    useCaching: false
});
olpModule.reportConfig();

// experts says if we're opting this technique, we may equally be as interested in Module Pattern
// Module pattern uses objecte literals but only as return value from a scoping function