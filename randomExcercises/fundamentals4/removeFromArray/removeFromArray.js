const removeFromArray = function(arr, ...args) {
    // function isNot(num) {return (args.indexOf(num) == -1);}
    // arr = arr.filter(isNot);
    // return(arr);

    return arr.filter((x) => args.indexOf(x) === -1)

    // let elems = [];
    // for(let i = 1; i <= arguments.length-1; i++) elems.push(arguments[i]);
    // for(let i = 0; i < arguments.length; i++) {
    //     if(!i) elems.push(arguments[i]);
    // }

    // return arr.filter((x) => args.indexOf(x == -1))
    
    // let arr = [1,2,3,4];
    // let index = arr.indexOf(3);
    // if( index !== -1) {
    //     arr.splice(index, 1);
    // }
    // return arr;
}

module.exports = removeFromArray
