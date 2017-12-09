$(document).ready(function() {
	console.log( "ready!" );

    $.getJSON('products.json', function(data){
    	// console.log(data);
    	$.each(data.planty, function() {
    		$("#product_zone").append("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'> <figure class='spotlight-item'> <img src='" + this['image'] + "'> <figcaption> <h3>" + this['product'] + "</h3> <h4>$" + this['price'] + "</h4> </figcaption> <a class='add-to-cart btn btn-lg' href='#' role='button'> Add to cart </a> </figure> </div>");
    	});
    });
});