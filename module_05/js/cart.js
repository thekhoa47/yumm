$(document).ready(function() {
    console.log( "ready!" );

$("a.add-to-cart").click(function(event) {
        // event.preventDefault();
        console.log("ok");
        
        var id = $(this).attr("data-id");
        var name = $(this).attr("data-name");
        var price = Number($(this).attr("data-price"));
        var image = $(this).attr("data-image");
        var calories = Number($(this).attr("data-calories"));

        addItemToCart (id, image, name, price, 1, calories);
        displayCart();
    });

    function displayCart() {
        var cartArray = listCart();
        var output = "";
        for (var i in cartArray) {
            output += "<div class='row'> <div class='col-xs-12 col-md-2'> <img src='"+cartArray[i].image+"'></div> <div class='col-xs-12 col-md-6'> <h3>"+cartArray[i].name+"</h3> </div> <div class='col-xs-12 col-md-1'> <h4>"+cartArray[i].price+"</h4> </div> <div class='col-xs-12 col-md-2'> <button class='add-one btn btn-dark btn-md'>+</button> <span>"+cartArray[i].count+"</span> <button class='remove-one btn btn-dark btn-md'> - </button> </div> <div class='col-xs-12 col-md-1'> <h3 id='remove_btn'>X</h3> </div> </div>"
        }
        $("#show-cart").html(output);
    }

//***************************************************************************************
// Shopping cart function

    var cart = [];

    var Item = function (id, image, name, price, count, calories) {
        this.id = id
        this.image = image
        this.name = name
        this.price = price
        this.count = count
        this.calories = calories
    };

    function addItemToCart(id, image, name, price, count, calories) {
        for (var i in cart) {
            if (cart[i].id === id) {
                cart[i].count += count;
                return;
            }
        }
        var item = new Item(id, image, name, price, count, calories);
        cart.push(item);
        saveCart();
    }

    function removeItemFromCart(id){  //removes one item
        for (var i in cart) {
            if (cart[i].id === id) {
                cart[i].count --;
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    }

    function removeItemFromCartAll(id) { //removes all item name
        for (var i in cart) {
            if (cart[i].id === id) {
                cart.splice (i, 1);
                break;
            }
        }
        saveCart();
    }

    function clearCart() {
        cart = [];
        saveCart();
    }

    function countCart() { //->return total count
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    } 

    // console.log( countCart() )


    function totalCart() { //-> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price*cart[i].count;
        }

        return totalCost;
    }

    // console.log( totalCart() );
    
    function totalCalories() {
        var totalCalories = 0;
        for (var i in cart) {
            totalCalories += cart[i].calories*cart[i].count;
        }

        return totalCalories;
    }

    // console.log( totalCalories() );
    

    function listCart() { //-> array of item
        var cartCopy = [];
        for (var i in cart) {
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    }

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    localStorage.setItem ("username", "Joe");

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
    }
     loadCart();

     var array = listCart();
     // console.log(array);
});