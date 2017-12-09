
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

    $(".soup_ing_1").droppable({
        accept: ("#soup_ing_1"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/soup_ing_1.png');
                    $("#soup_ing_1").hide();
                }
    });

    $(".soup_ing_2").droppable({
        accept: ("#soup_ing_2"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/soup_ing_2.png');
                    $("#soup_ing_2").hide();
                }
    });

    $(".soup_ing_3").droppable({
        accept: ("#soup_ing_3"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/soup_ing_3.png');
                    $("#soup_ing_3").hide();
                }
    });

    $(".soup_ing_4").droppable({
        accept: ("#soup_ing_4"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/soup_ing_4.png');
                    $("#soup_ing_4").hide();
                }
    });

    $(".soup_ing_5").droppable({
        accept: ("#soup_ing_5"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/soup_ing_5.png');
                    $("#soup_ing_5").hide();
                }
    });

    $(".soup_ing_6").droppable({
        accept: ("#soup_ing_6"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/soup_ing_6.png');
                    $("#soup_ing_6").hide();
                }
    });
    $(".soup_ing_7").droppable({
        accept: ("#soup_ing_7"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/soup_ing_7.png');
                    $("#soup_ing_7").hide();
                }
    });
        $(".soup_ing_8").droppable({
        accept: ("#soup_ing_8"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/soup_ing_8.png');
                    $("#soup_ing_8").hide();
                }
    });
});