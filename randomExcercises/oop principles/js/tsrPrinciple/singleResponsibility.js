function Event(name) {
    this.handlers = [];
    this.name = name;
}
Event.prototype.addHandler = function(handler) {this.handlers.push(handler);};
Event.prototype.removeHandler = function(handler) {
    for(let i=0; i<handlers.length; i++) {
        if(this.handlers[i] === handler) {
            this.handlers.splice(i,1);
            break;
        }
    }
}
Event.prototype.fire = function(eventArgs) {this.handlers.forEach(h => h(eventArgs));};
let eventAggregator = (() => {
    let events = [];
    function getEvent(eventName) {
        return $.grep(events, event => event.name === eventName)[0];
    };
    return {
        publish: function(eventName, eventArgs) {
            let event = getEvent(eventName);
            if(!event) {
                event = new Event(eventName);
                events.push(event);
            }
            event.fire(eventArgs);
        },

        subscribe: function(eventName, handler) {
            let event = getEvent(eventName);
            if(!event) {
                event = new Event(eventName);
                events.push(event);
            }
            event.addHandler(handler);
        }
    };
})();

function Cart() {
    let items = [];
    this.addItem = item => {
        items.push(item);
        eventAggregator.publish("itemAdded", item);
    }
}

let cartView = (() => {
    eventAggregator.subscribe("itemAdded", eventArgs => {
        let newItem = $("<li></li>")
        .html(eventArgs.getDescription())
        .attr("id-cart", eventArgs.getID())
        .appendTo("#cart");
    });
})();

let cartController = (cart => {
    eventAggregator.subscribe("productSelected", eventArgs => {
        cart.addItem(eventArgs.product);
    });
})(new Cart());

function Product(id, description) {
    this.getID = function() {return id;}
    this.getDescription = function() {return description;}
}

let products = [
    new Product(1, "start wars lego ship"),
    new Product(2, "barbie doll"),
    new Product(3, "remote control flying drone"),
    new Product(4, "remote control toy car")
];

let productView = (() => {
    function onProductSelected() {
        let productID = $(this).attr("id");
        let product = $.grep(products, x => x.getID() === productID)[0];
        eventAggregator.publish("productSelected", {product: product});
    }

    products.forEach(prod => {
        let newItem = ("<li></li>")
        .html(prod.getDescription())
        .attr("id", prod.getID())
        .dbClick(onProductSelected)
        .appendTo("#products")
    });
})();

/**
 * in this revised design, we've removed our anonymous function and replaced it with ojects to coordinate ach of responsibilities
 * a cartView was introduced to coordinate population of cart dispplay, 
 * a cartController was introduced to coordinate population of cart model
 * a productView was introduced to coordinate population display of product display
 * 
 * we also introduced an Event Aggregator to fascilitate communication between objects in a loosely-coupled way
 * while thhis design results in a larger number is objects, but each objects now focuses on fulfilling a specefic role within overall orchestration with minimal coupling between objects
 */