const palindromes = function(str) {
    let processedString = str.toLowerCase().replace(/[^A-Za-z]/g,"");
    return processedString.split("").reverse().join("") === processedString;

    // if(Array.from(arguments).length % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    // return Array.from(arguments).split("").reverse().join("") === Array.from(arguments) ? true : false;
    
    // return str === str.split("").reverse().join("") ? true : false;
}

module.exports = palindromes
