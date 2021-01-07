// Revealing Module Pattern, functions and variables will be implemented within module closure and returning an annonymous object with pointers to private functionality to reveal to public:
let revealingModule = ( () => {
    let privateVar = "Honey Bunny";
    let anotherPrivate = "Sweet Peaa";
    function privateFunc() {
        console.log("Who ? :"+privateVar);
    }
    function publicSetName(name) {
        privateVar = name;
    }
    function publicGetName() {
        privateFunc();
    }

    // revealing public pointers to private functions and variables
    return {
        setName: publicSetName,
        getName: publicGetName,
        greeting: anotherPrivate,
    }
} )();
// module usage:
revealingModule.getName();
revealingModule.setName("Baeebee");
revealingModule.getName();
console.log(revealingModule.greeting);

// this pattern can also be used to reveal private functions and properties with a more specefic naming scemes if would prefer:
let anotherRevealingModule = (function () {
 
    var privateCounter = 0;

    function privateFunction() {
        privateCounter++;
        console.log(privateCounter);
        return privateCounter;
        // return privateCounter++;
    }

    function publicFunction() {
        publicIncrement();
        // return publicIncrement();
    }

    function publicIncrement() {
        privateFunction();
    }

    function publicGetCount(){
      return privateCounter;
    }

    // Reveal public pointers to
    // private functions and properties

   return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    };

})();
anotherRevealingModule.start();
console.log(anotherRevealingModule.start());
console.log(anotherRevealingModule.count());
anotherRevealingModule.increment();
// this pattern allows syntax of our scripts tobe more consistent, makes it more clear and eaes readability
// a disadvantage of this pattern is that if a private function refers to a public function, that function can't be over written if a necessary, same goes for priavte variables as well, be aware of this before implementing with Revealing Module Pattern
