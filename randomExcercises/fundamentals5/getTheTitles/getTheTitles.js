const getTheTitles = function(array) {
    
    return array.map(book => book["title"]);
    
    // let titles = [];
    // array.find(ob => {
    //     if(ob.title) {
    //         titles.push(ob.title);
    //     }
    // });
    // return titles;
}

module.exports = getTheTitles;
