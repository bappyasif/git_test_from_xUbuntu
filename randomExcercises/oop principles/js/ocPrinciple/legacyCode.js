let iceCreamFlavors = ["chocolate", "vanilla"];
let iceCreamMaker = {
    makeIceCream(flavor) {
        if(iceCreamFlavors.indexOf(flavor) > -1) {
            console.log("great success, you've icecream");
        } else {
            console.log("try again, no icecream");
        }
    }
};
export default iceCreamMaker;

/**
 * as you can see there's no way to add an ice cream flavor without editing iceCrea,Flavor array, leet's see that in ocPrincinple.js
 * there's a very easy rule of thumb can be followed, if you have to make a midfication to xtend it then it's a failed Open Closed Priniciple Rule
 */