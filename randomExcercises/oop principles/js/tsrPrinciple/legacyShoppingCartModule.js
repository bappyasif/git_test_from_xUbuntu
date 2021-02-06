function Product(id, description) {
    this.getID = function() {return id;}
    this.getDescription = function() {return description;}
}

function Cart(eventAggregator) {
    let items = [];
    this.addItem = function(item) {items.push(item);};
}

let products = [
    new Product(1, "start wars lego ship"),
    new Product(2, "barbie doll"),
    new Product(3, "remote control flying drone"),
    new Product(4, "remote control toy car")
], cart = new Cart();

(() => {
    function addToCart() {
        let productID = $(this).attr("id");
        let product = $.grep(products, function(x) {
            return x.getID() === productID;
        })[0];
        cart.addItem(product);
        let newItem = $("<li></li>")
        .html(product.getDescription())
        .attr("id-cart", product.getID())
        .appendTo("#cart");
    }

    products.forEach(prod => {
        let newItem = ("<li></li>")
        .html(prod.getDescription())
        .attr("id", prod.getID())
        .dbClick(addToCart)
        .appendTo("#products")
    });
})();

/**
 * as we can this snippet illustrates a number of unrelateed responsibilites coupled together within a single anonymous function
 * lets consider each responsibilty individually:
 *  - we have behavior defined to handle populating Cart model when item is double-clicked
 *  - we have behavior defined to add items to cart view when an item is double-clicked
 *  - we have behavior defined to populate products view with initial sets of products
 * lets break these responsibilities out into their own objects, in singleResponsibility.js
 */