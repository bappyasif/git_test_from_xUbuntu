function translate(str) {
	// body...
	let vowels = ["a", "e", "i", "o", "u"];
	// let wordArr = str.split("");
	let newStr;
	if(vowels.indexOf(str[0]) !== -1) {
		newStr = str+"ay";
		// return newStr;
	} else {
		let firstVowelFound = str.match(/[aeiou]/g) || 0; // array of all vowels
		let matchVowelIdx = str.indexOf(firstVowelFound[0]); // find that first vowel index from string
		newStr = str.substring(matchVowelIdx) + str.splice(0, matchVowelIdx) + "ay"
		// return newStr;
	}
	return newStr;
}


module.exports = {
	translate
}

