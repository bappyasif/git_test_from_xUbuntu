let people = [];
let template = $("#people-template").html();

$("#peopleModule").find("button").on("click", function() {
    people.push($("#peopleModule").find("input").val());
    $("#peopleModule").find("input").val("");
    // data for mustache template
    let data = {
        people: people
    };
    $("#peopleModule").find("ul").html(Mustache.render(template, data));
});

$("#peopleModule").find("ul").delegate("i.del", "click", function(evt) {
    let $remove = $(evt.target).closest("li");
    let i = $("peopleModule").find("ul").find("li").index($remove);
    $remove.remove();
    people.splice(i,1);
});