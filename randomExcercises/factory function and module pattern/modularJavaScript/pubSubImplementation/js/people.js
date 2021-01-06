// PubSub Implementation: keeping a central location for modules events to subscribe and whenever there is an event fires everyother modules that are subscribed to it will be notified and be updated on accordingly to their implemenation

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
        // right now its coupled, needs to be decouple through pubSub
        // stats.setPeople(people.length);
        // updating stats for People to other modules through a Publish/Subscribed implementation
        // events.emit("peopleChanged", people.length);
        events.emit("peopleChanged", people.length);
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