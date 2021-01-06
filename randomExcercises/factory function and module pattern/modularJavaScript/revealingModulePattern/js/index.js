// Revealing Module Pattern: encapsulated within an IIFE with a returning object literal with all public methods and variables keeping rest of logic safe from unsafe outside intervention
let people = (function () {
    let people = [];

    // Cache DOM
    $el = $("#peopleModule");
    $button = $el.find("button");
    $input = $el.find("input");
    $ul = $el.find("ul");
    template = $el.find("#people-template").html();

    // Bind events
    $button.on("click", addPerson);
    $ul.delegate("i.del", "click", deletePerson);

    render();

    // Drawing elements into DOM
    function render() {
        $ul.html(Mustache.render(template, { people: people }));
    }
    function addPerson(value) {
        let name = typeof value === "string" ? value : $input.val();
        people.push(name);
        render();
        $input.val("");
    }
    function deletePerson(evt) {
        let i;
        if( typeof evt === "number") {
            i = evt;
        } else {
            let $remove = $(evt.target).closest("li");
            i = $ul.find("li").index($remove);
        }
        people.splice(i, 1);
        render();
    }
    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    }
})();



// Revealing Module Pattern: it's mostly like an Object Literal Pattern with a returning object 
// where variables and methods can be placed to be used by outside world:
// let people = (function () {
//     let people = [];

//     // Cache DOM
//     $el = $("#peopleModule");
//     $button = $el.find("button");
//     $input = $el.find("input");
//     $ul = $el.find("ul");
//     template = $el.find("#people-template").html();
//     // function cacheDOM() {
//     //     $el = $("#peopleModule");
//     //     $button = $el.find("button");
//     //     $input = $el.find("input");
//     //     $ul = $el.find("ul");
//     //     template = $el.find("#people-template").html();
//     // }

//     // Biind events
//     $button.on("click", addPerson);
//     $ul.delegate("i.del", "click", deletePerson);
//     // function bindEvents() {
//     //     $button.on("click", this.addPerson.bind(this));
//     //     $ul.delegate("i.del", "click", this.deletePerson.bind(this));
//     // }

//     render();

//     // Drawing elements into DOM
//     function render() {
//         $ul.html(Mustache.render(template, { people: people }));
//         // let data = {
//         //     people: this.people
//         // };
//         // $ul.html(Mustache.render(template, data));
//     }
//     function addPerson() {
//         people.push($input.val());
//         render();
//         $input.val("");

//         // this.people.push(this.$input.val());
//         // this.render();
//         // this.$input.val("");
//     }
//     function deletePerson(evt) {
//         let $remove = $(evt.target).closest("li");
//         let i = $ul.find("li").index($remove);
//         people.splice(i, 1);
//         render();

//         // let $remove = $(evt.target).closest("li");
//         // let i = this.$ul.find("li").index($remove);
//         // this.people.splice(i, 1);
//         // this.render();
//     }
//     return {
//         addPerson: addPerson,
//         deletePerson: deletePerson
//     }
// })();

// random Demonstration:
// let people = ( function() {
//     let name = "Honeeey";
//     function sayName() {
//         console.log(name);
//     };
//     return {
//         sayName: sayName
//     }
// } ) ();

// people.sayName();
// people.name = "wontChangeActualNameWithinIIFE"; 
// people.sayName();