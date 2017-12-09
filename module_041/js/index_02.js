$(function() {
	console.log( "ready!" );

	$("#selectable-1").selectable();

	$("#selectable-2").selectable({
		filter: "li:nth-last-child(2)"
	});

	$("#sortable-1").sortable();
	
	$("#sortable-2, #sortable-3").sortable({
		connectWith: "#sortable-2, #sortable-3"
	});

	$("#sortable-4").sortable({
		update: function(event, ui){
			var productOrder = $(this).sortable('toArray').toString();

			$("#result").text(productOrder);


		}
	});
});