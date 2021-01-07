// Module Pattern, was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering
// in JavaScript Module Pattern is used to further emulate this concept of classes in such a way that we're able to include both public/private methods and variables inside a single object, thus maintainng scopes for variables and methods
// with this pattern only a public API is returned to communicate with outer scope and keeping everything else within closure private and off limits to outside acccess, this gives us clean solution for logic doing heavy lifting while exposiing an interface to use our application
// this pattern uses an IIFE, where an object is returned

// Examples, lets look at an implementation of Module Pattern by creating a module which is sellf contained:
let testModule = ( () => {
    let counter = 0;
    function resetCounter() {
        // unable to read from it as its not considerred to be part of accessible module part as it implemmented directly into return object
        // incrementCounter();
        console.log("Counter Value before reset: "+ counter);
        counter = 0;
    }

    return {
        incrementCounter: function() {
            return counter++;
        },
        resetCounter: resetCounter
    }
} )();
// module usage:
testModule.incrementCounter();
testModule.incrementCounter();
testModule.resetCounter();
// when working with Modulee Pattern, we may find it useful to define a simple template that we use for getting started with it: this example covers "public" and "private" variables:
let usingNamespace = ( () => {
    let privateVar, privateMethod;
    privateVar = 0;
    // a method logs arguments
    privateMethod = function(foo) {
        console.log(foo);
    };

    return {
        // public variable
        publicVariable: "foo",
        // public function utilizing privates
        publicMethod: function(bar) {
            privateVar++;
            privateMethod(bar);
        }
    }
} )();
// module usage:
usingNamespace.publicMethod(usingNamespace.publicVariable);
// another example: demostrating public interfaces for using private entities:
let basketModule = ( () => {
    // all privates
    let basket = [];
    function doPrivate() {console.log("Doing something in private");}
    function anotherPrivate() {console.log("doing another in private");}

    return {
        // adding items into basket
        addItem: function(values) {
            basket.push(values);
        },
        // get basket item count
        getCount: function() {
            return basket.length;
        },
        // pulic aliases for private
        doSomething: doPrivate,
        doAnother: anotherPrivate,
        // get basket total value
        getTotal: function() {
            let q = this.getCount();
            let p = 0;
            while(q--) {
                // p += basket[q].price;
                // p += basket[q];
                // p += basket[q].price || basket[q];
                // p +=  basket[q] || basket[q].price;
                basket[q].price ? p += basket[q].price : p += basket[q];
            }
            return p;
        }
    }
} )();
// module usage:
basketModule.addItem(2);
basketModule.addItem(2);
console.log(basketModule.getCount());
basketModule.doSomething();
basketModule.doAnother();
console.log(basketModule.getTotal());
basketModule.addItem( {
    item: "bread",
    price: 0.5
});
basketModule.addItem( {
    item: "butter",
    price: 0.4
});
console.log(basketModule.getCount());
console.log(basketModule.getTotal());
// that basket module has many advantages such as :
// - freedom to have private methods and variables which can only be accesible by module scope, it'lll easier to show call stacks in debugger as they are named functions when an exception arises
// - it also enbles us to return differnt functions that are only scoped wothin return object and are not accessible from out side of return object within module

// Some Module Pattern Variations: Import mixins, Exports, Dojo, ExtJS, YUI, jQuery: only import mixins and Exports are discussed here:
// Import Mixins Global module: it shows how globals can be passed in as arguments to our modules annonymous function:
var imixModule = (function ( jQ, _ ) {
 
    function privateMethod1(){
        jQ(".container").html("test");
    }
 
    function privateMethod2(){
      console.log( _.min([10, 5, 100, 2, 1000]) );
    }
 
    return{
        publicMethod: function(){
            privateMethod1();
        }
    };
 
// Pull in jQuery and Underscore
})( jQuery, "_" );
 
imixModule.publicMethod();

// Exports, this variation allows us to declare globals without consuming them and could similarly support cooncept of global imports seen in Import Mixins:
var exportsModule = (function () {
 
    // Module object
    var module = {},
      privateVariable = "Hello World";
   
    function privateMethod() {
      // ...
    }
   
    module.publicProperty = "Foobar";
    module.publicMethod = function () {
      console.log( privateVariable );
    };
   
    return module;
   
  })();
  exportsModule.publicMethod();