const fibonacci = function(n) {
    let seq;
    if(n===0) {
        return 0;
    } else if(n===1) {
        return 1;
    } else {
        seq = fibonacci(n-1) + fibonacci(n-2);
        return seq;
    }

    // console.log(fibonacci(9));

    // let a = 0, b = 1, c;
    // if(n < 3) {
    //     if(n === 0) return 0;
    //     if(n === 1) return 1;
    // }

    // while(--n) {
    //     c = a + b, a = b, b = c;
    // }
    // return c;
}

module.exports = fibonacci

/**
     let seq;
    if(n === 0) {
        return [0, 0];
    } else if(n === 1) {
        return [0, 1];
    } else {
        seq = fibonacci(n-1);
        seq.push(seq[seq.length - 1], [seq[seq.length - 2]]);
        // seq.push(seq[seq.length - 1] + [seq[seq.length - 2]]);
        return seq;
        // return seq[seq.length - 1];
    }
    return seq[seq.length-1];14
 */



/**
    let base0 = 0;
    let base1 = 0;
    let seq="";
    if(n === 0) {
        base0 = 1;
        seq = base0;
        // return;
    } else if( n === 1) {
        base1 = 1;
        seq += base0 + base1;
    } else {
        return fibonacci(n-1);
        // for(let i = 2; i <= n; i++) {
        //     return fibonacci(n-1) + fibonacci(n-2);
        // }
    }
    return seq;
 */