const palindromes = function (aStr) {
    let wordsArrr = aStr.split(" ");
    for (let i = 0; i !== wordsArrr.length; i++) {
        if (!wordsArrr[i].length % 2) {
            return false;
        } else if (wordsArrr.length === 1) {
            return true;
        } else {
            return wordsArrr[i].toLowerCase() === wordsArrr[i].toLowerCase().split("").reverse().join("");
        }
    }
    // return true;


    // let newStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, '');
    // let strLength = newStr.length;
    // if (strLength.length === 1) return true;
    // for (let i = 0; i < strLength / 2; i++) {
    //     if (newStr[i].toLowerCase() != newStr[strLength - i - 1].toLowerCase()) return false;
    // }
    // return true;
}

module.exports = palindromes
