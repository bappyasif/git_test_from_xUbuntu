function add () {
	return arguments[0] + arguments[1];
}

function subtract () {
	return arguments[0] - arguments[1];
}

function sum () {
	return [...arguments].reduce((a,b) => a+b);
}

function multiply () {
	return arguments[0] * arguments[1];
}

function power() {
	return Math.exp(arguments[0], arguments[1]);
}

function factorial() {
	if(arguments[0] === 1) {
		return 1
	} else {
		return factorial(arguments[n-1])
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}