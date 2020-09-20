const leapYears = function (year) {
    // let year = 2004;
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
    // return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
    
    // return year % 4 === 0 ? "leap year" : year % 100 === 0 && year % 400 === 0 ? "leap year" : "not a leap year";
    // if (year % 4 === 0) {
    //     return "Leap Year";
    // } else if (year % 100 === 0) {
    //     if (year % 400 === 0) {
    //         return "Leap  Year";
    //     } else {
    //         return "Not A Leap Year";
    //     }
    // } else {
    //     "Not A Lep Year";
    // }
}

module.exports = leapYears
