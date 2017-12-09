$("#cat").draggable({
	containment: "#gamezone",
	scroll: false
});

$('#cat')
    .css({
    	'margin-left': $(window).width(),
    	'top':50%,
    })
    .animate({
        // 'left': '50%',
        'margin-left': $(window).width()/2
    }, 5000);

$(".safezone").droppable();
