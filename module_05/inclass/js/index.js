$(document).ready(function() {
	console.log( "ready!" );

	$("#slider1").slider();

	$("#dialog-1").dialog({
		autoOpen: false,
		buttons: {
			OK: function(){ $(this).dialog("close");}
		}
	});
	$("#launcher").click(function(){
		$("#dialog-1").dialog("open");
	});

	$("#button-1").button();
	$("#button-2").button();
	$("#button-3").button();
	$("#button-4").button();

	$("#datepicker1").datepicker();

	$("#accordion-1").accordion({
		collapsible : true
	});

	$("#menu-1").menu();

	var searchDBString = [
		"San Francisco",
		"San Carlos",
		"San Jose",
		"San Mateo",
		"Milpitas",
		"Fremont",
		"San Diego"
	];

	$("#autocomplete-1").autocomplete({
		source: searchDBString
	});
});