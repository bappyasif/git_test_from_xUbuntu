let findTheOldest = function (obj) {
    // return obj.sort((a,b) => (a.yearOfBirth - a.yearOfDeath) > (b.yearOfBirth - b.yearOfDeath) ? -1 : 1)

    return obj.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? 1 : -1).find(ob=>ob.name==="Ray");

    // return obj.sort((a, b) => (a.yearOfBirth - a.yearOfDeath) > (b.yearOfBirth - b.yearOfDeath) ? 1 : -1)[0].name;
    // return [...obj.sort((a, b) => (a.yearOfBirth - a.yearOfDeath) > (b.yearOfBirth - b.yearOfDeath) ? 1 : -1)[0].name][0].name;

    // let arr = obj.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
    // return [...arr][0].name;
    // return Array.from(arr)[0].name;
    // return arr[0].name;

    // arr = arr.sort((oldest,next) => {
    //     if(!oldest.yearOfDeath) {
    //         oldest.yearOfDeath = new Date().getFullYear();
    //     } else if(!next.yearOfDeath) {
    //         next.yearOfDeath = new Date().getFullYear();
    //     }
    //     return (oldest.yearOfDeath - oldest.yearOfBirth) < (next.yearOfDeath - next.yearOfBirth) ? 1 : -1;
    // })
    // return arr[0].name;

    // return array.sort((oldest, next) => {
    //     let oldestAge = getAge(oldest.yearOfBirth - oldest.yearOfDeath);
    //     let nextAge = getAge(next.yearOfBirth - next.yearOfDeath);
    //     return oldestAge < nextAge ? -1 : 1;
    // });
}

// function getAge(birthYear, deathYear) {
//     if (!deathYear) {
//         deathYear = new Date().getFullYear();
//     }
//     return deathYear - birthYear;
// }
        


module.exports = findTheOldest
