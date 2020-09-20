const sumAll = function(lower = lower||1, higher) {
    let sum = 0;
    for(let i = lower; i <= higher; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
