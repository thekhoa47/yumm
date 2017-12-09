
$(function() {
    // console.log( "ready!" );
    
    $(".drag_item").draggable({
        containment: ".yum_gamearea",
        revert: "invalid",
        scroll: false,
        helper: 'clone'
    });

    // $(".drop_item").droppable({
    //     accept: "#" + $(this).attr('id'),
    //     tolerance: "intersect",
    //     drop: function (event, ui) {
    //                     var drag_item = ui.draggable;
    //                     $(drag_item).detach();
    //                     $(this).replaceWith(drag_item);
    //     }
    // });

    $(".pizza_ing_1").droppable({
        accept: ("#pizza_ing_1"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/pizza_ing_1.png');
                    $("#pizza_ing_1").hide();
                }
    });

    $(".pizza_ing_2").droppable({
        accept: ("#pizza_ing_2"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/pizza_ing_2.png');
                    $("#pizza_ing_2").hide();
                }
    });

    $(".pizza_ing_3").droppable({
        accept: ("#pizza_ing_3"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/pizza_ing_3.png');
                    $("#pizza_ing_3").hide();
                }
    });

    $(".pizza_ing_4").droppable({
        accept: ("#pizza_ing_4"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/pizza_ing_4.png');
                    $("#pizza_ing_4").hide();
                }
    });

    $(".pizza_ing_5").droppable({
        accept: ("#pizza_ing_5"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/pizza_ing_5.png');
                    $("#pizza_ing_5").hide();
                }
    });

    $(".pizza_ing_6").droppable({
        accept: ("#pizza_ing_6"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/pizza_ing_6.png');
                    $("#pizza_ing_6").hide();
                }
    });

});