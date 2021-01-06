// Code Refactored using Object Literal Modular Pattern: 
// we'll incorporate IIFE as outer shell and inside of it we'll have an Object literal Module pattern:
( function() {
    // console.log("..")
    let people = {
        // people: ["lauren", "honey"],
        people: [],
        // template: $("#people-template").html(),
        init: function() {
            this.cacheDOM();
            this.bindEvents();
            this.render();
        },
        cacheDOM: function() {
            this.$el = $("#peopleModule");
            this.$button = this.$el.find("button");
            this.$input = this.$el.find("input");
            this.$ul = this.$el.find("ul");
            this.template = this.$el.find("#people-template").html();
            // console.log("..");
        },
        bindEvents: function() {
            // this.$button.on("click", addPerson(evt));
            this.$button.on("click", this.addPerson.bind(this));
            this.$ul.delegate("i.del", "click", this.deletePerson.bind(this));
        },
        render: function() {
            // drawing elements into DOM
            let data = {
                people: this.people
            };
            this.$ul.html(Mustache.render(this.template, data));
            // console.log("..");
        },
        addPerson: function() {
            this.people.push(this.$input.val());
            this.render();
            this.$input.val("");
        },
        deletePerson: function(evt) {
            let $remove = $(evt.target).closest("li");
            let i = this.$ul.find("li").index($remove);
            this.people.splice(i,1);
            this.render();
        }
    };

    people.init();
} )();
















// Object Literal: in terms of API, this module has two methods, nameed sayName() and stName() and can only be accesed through myModule
// things to notice here is, module variablees can be changed at ay time by using myModule and behavior of module would change, which is not highly privacy favored:
// let myModule = {
//     name: "honeeey",
//     age: 29,
//     sayName: function() {
//         console.log("Hello "+this.name);
//     },
//     setName: function(newName) {
//         this.name = newName;
//     }
// }
// myModule.sayName();
// myModule.setName("Honey");
// myModule.sayName();