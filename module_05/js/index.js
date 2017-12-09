$(document).ready(function() {
	console.log( "ready!" );

    $.getJSON('products.json', function(data){
    	// console.log(data);
    	$.each(data.planty, function() {
    		$("#product_zone").append("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'> <figure class='spotlight-item'> <img src='" + this['image'] + "'> <figcaption> <h3>" + this['name'] + "</h3> <h4>$" + this['price'] + "</h4> </figcaption> <a class='add-to-cart btn btn-dark btn-lg' data-id='"+this['id']+"' data-name='"+this['name']+"' data-price='"+this['price']+"' data-image='"+this['image']+"' data-calories='"+this['calories']+"' role='button'> Add to cart </a> </figure> </div>");
    	});
	});

	//***************************************************************************************
	// Shopping cart function // Thanks to the Shopping Cart tutorial with Jquery at https://www.youtube.com/playlist?list=PLoN_ejT35AEhzNoPStBzAkpqAu3YQwPj7

	$("#product_zone").on("click", ".add-to-cart", function(event) {
       	event.preventDefault();
       	var id = $(this).attr("data-id");
       	var name = $(this).attr("data-name");
       	var price = Number($(this).attr("data-price"));
       	var image = $(this).attr("data-image");
       	var calories = Number($(this).attr("data-calories"));

       	addItemToCart (id, image, name, price, 1, calories);
       	displayCart();
   	});

	$("#show-cart").on("click", "#remove_btn", function(event){
   	   	var id = $(this).attr("data-id");
   		removeItemFromCartAll(id);
   		displayCart();
   	});

   	$("#show-cart").on("click", ".remove-one", function(event) {
   		var id = $(this).attr("data-id");
   		removeItemFromCart(id);
   		displayCart();
   	})

   	$("#show-cart").on("click", ".add-one", function(event) {
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
   	        output += "<div class='row'> <div class='col-xs-12 col-sm-2'> <img class='thumbnail-image' src='"+cartArray[i].image+"'></div> <div class='col-xs-12 col-sm-6 cart_prod_name'> <h3>"+cartArray[i].name+"</h3> </div> <div class='col-xs-12 col-sm-1 cart_prod_price'> <h4>"+cartArray[i].price+"</h4> </div> <div class='col-xs-12 col-sm-2 cart_prod_count'> <button class='remove-one btn btn-dark btn-sm' data-id='"+ cartArray[i].id +"'> - </button> <span> " + cartArray[i].count + " </span> <button class='add-one btn btn-dark btn-sm' data-id='"+ cartArray[i].id +"' data-name='"+ cartArray[i].name+"' data-price='"+ cartArray[i].price +"' data-image='"+ cartArray[i].image +"' data-calories='"+ cartArray[i].calories +"'> + </button> </div> <div class='col-xs-12 col-sm-1 cart_prod_remove'> <span id='remove_btn' data-id='"+ cartArray[i].id +"'>X</span> </div> </div>"
   	    }

   	    $("#show-cart").html(output);
   	    $("#total-cost").html( totalCart() );
   	    $("#nutri-cal").html( totalCalories() );
   	    $("#count_cart").html( countCart() );
   	}

	//***************************************************************************************
	// Shopping cart functions

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
                saveCart();
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

        return totalCost.toFixed(2);
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

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
    }
     loadCart();
     displayCart();

     var array = listCart();
     // console.log(array);
});