$(function() {
	console.log( "ready!" );

	$("#draggable1").draggable();
	
	$("#draggable2").draggable();

	$("#draggable3").draggable({
		axis: "y",
		drag: function(event, ui) {
			console.log("hahahahaha");
		}
	});

	$("#droppable1").droppable({
		drop: function(event, ui) {
			$(this).addClass("ui-state-highlight").find("p").html("Dropped")
		}
		});

	$("#droppable2").droppable({
		tolerance: "fit",
		drop: function(event, ui) {
			$(this).addClass("ui-state-highlight").find("p").html("Dropped")
		}
		});
	$("#droppable3").droppable({
		tolerance: "touch",
		drop: function(event, ui) {
			$(this).addClass("ui-state-highlight").find("p").html("Dropped")
		}
		});
	$("#droppable4").droppable({
		tolerance: "touch",
		accept: "#draggable2",
		drop: function(event, ui) {
			$(this).addClass("ui-state-highlight").find("p").html("Dropped")
		}
		});

	$("#resizable1").resizable();

});