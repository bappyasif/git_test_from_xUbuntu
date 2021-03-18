// to find a match in a string
let myRe = /d(b+)d/g;
let regexArr = myRe.exec("cdbbdsbz");
console.log(regexArr);

// to construct regular expression from a string
myRe = new RegExp("d(b+)d", "g");
regexArr = myRe.exec("cdbbdbsbz");
console.log(
  regexArr,
  regexArr[0],
  regexArr[1],
  myRe.lastIndex,
  /d(b+)d/g.lastIndex
);

// advance searching with flags, regex has 6 flags
/**
 * g - global search
 * i - case insensitive
 * m - multi-line search
 * s - allows . to match newline characters
 * u - unicode, treats patterns as a sequence of unicode points
 * y - stiky search, starting at current position in target string
 * 
 * to include a flag - /pattern/flag
 * to include a flag - new RegExp('pattern', 'flag')
 * flags are integral part of a regular expression, they cannot be added or removed later
 * e.g. /\w+\s/g creates a regExp that looks for one or more charcters followed by a space, throughout target string
 * 
 * ^ - match at start or end of any line within target string
 * $ - match at start or end of any line within target string
 * instead of entire string, rather in any line
 * 
 * . - matches all characters
 * \w - matches alphanumerical
 * \d - matches digits
 * () - groups string
 * | - or
 * * - 0 or more times
 * + - 1 or more times
 * ? -  is used immediately after any quantifiers makes it non greedy(matching minimum nuber of times)
 * {n} - matches exactly n times
 * {n.m} - matches at least n times to at most m times
 * 
 */

let re = /\w+\s/g;
re = new RegExp('\\w+\\s', 'g');
let str = 'fee fi fo fum'
regexArr = str.match(re);
console.log(regexArr);

// g flag usded with exec() is to get Iterative Progressiion
let xArr;
while(xArr = re.exec(str)) {
    console.log(xArr, xArr.length);
}

re = /(?:\d{3})|\(\d{3}\)([-\/\.])\d{3}\1\d{4}/g;
console.log("(111)-222-3333".match(re), "111-222-3333".match(re));

re = /(.)\.(\w{3})/g
console.log("what what a.2bb".search(re));

re = /\b\w\b/g;
console.log("it's a single letter".match(re));

re = /\b\w{1,6}\b/g;
console.log("not so long woorrdddd".match(re));

re = /\b\w{11,}\b/g;
console.log("it's a long wooorrrrdddddddd".match(re));

re = /\w+ou?r/g;
console.log("neighbour favour".match(re));

re = /\w+ou?r/g;
console.log("neighbor favor".match(re));

re = /[\w ]+/g;
console.log("neighbour favour".match(re), "neighbour favour".match(re)[0]);

re = /[\w ]+?/g;
console.log("neighbour favour".match(re), "neighbour favour".match(re)[0]);

re = /(\w+)(@bigcorp.bd)/g;
console.log("neighbor@bigcorp.bd".match(re));

re = /((\d{3})([-\ \.]))+(\d{4})/g;
console.log("111 222.3333".match(re));