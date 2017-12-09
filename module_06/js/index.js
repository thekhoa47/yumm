$(document).ready(function() {
	// console.log( "ready!" );
 	$("#enterhaha").mouseover(function(){
 		alert("You touched the text!");
	});
	$(".player").draggable();

    $(".square").droppable({
  	});

	// $(".player").draggable({
	// 	// revert: false,
	// 	// helper: clone
	// });

});