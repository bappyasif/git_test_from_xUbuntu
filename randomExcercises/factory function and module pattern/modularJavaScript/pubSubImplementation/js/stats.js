let stats = ( function() {
    let people = 0;
    // cache DOM
    let $stats = $("#statsModule");
    let template = $("#stats-template").html();

    // bind to pubsub events, here could be a list of other modules subscribing to this modules and it would make it available for those modules as well
    events.on("peopleChanged", setPeople);

    render();

    // Private method for DOM 
    function render() {
        // console.log(people);
        $stats.html(Mustache.render(template, {people: people}));
    }

    // triggering off set Method
    function setPeople(newPeopple) {
        people = newPeopple;
        render();
    }

    // still creating an API method to reveal
    function destroy() {
        // removing stats module from DOM completely
        $stats.remove();
        // unsubscribing from events pubSub
        events.off("peopleChanged", setPeople);
    }

    return {
        destroy: destroy
    }
    // we dont have to reveal our API for now as we'd subscribe to this module for any changes that needs to be registered
} )();


/**
 let stats = ( function() {
    let people = 0;
    // cache DOM
    let $stats = $("#statsModule");
    let template = $("#stats-template").html();

    _render();

    // Private method for DOM 
    function _render() {
        // console.log(people);
        $stats.html(Mustache.render(template, {people: people}));
    }

    // triggering off set Method
    function setPeople(newPeopple) {
        people = newPeopple;
        _render();
    }

    // revealing object
    return {
        setPeople: setPeople
    }
} )();
 */