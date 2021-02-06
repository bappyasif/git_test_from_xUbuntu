let iceCreamFlavors = ["chocolate", "vanilla"];
let iceCreamMaker = {
    makeIceCream(flavor) {
        if(iceCreamFlavors.indexOf(flavor) > -1) {
            console.log("great success, you've icecream");
        } else {
            console.log("try again, no icecream");
        }
    },
    addFlavor(flavour) {iceCreamFlavors.push(flavour);}
};
export default iceCreamMaker;

/**
 * now we can add flavor of icecreams without have to modifying our module
 */