
$(function() {
    // console.log( "ready!" );
    
    $(".drag_item").draggable({
        containment: ".yum_gamearea",
        revert: "invalid",
        scroll: false,
        helper: 'clone',
        delay: 500
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

    $(".cookies_ing_1").droppable({
        accept: ("#cookies_ing_1"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/cookies_ing_1.png');
                    $("#cookies_ing_1").hide();
                }
    });

    $(".cookies_ing_2").droppable({
        accept: ("#cookies_ing_2"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/cookies_ing_2.png');
                    $("#cookies_ing_2").hide();
                }
    });

    $(".cookies_ing_3").droppable({
        accept: ("#cookies_ing_3"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/cookies_ing_3.png');
                    $("#cookies_ing_3").hide();
                }
    });

    $(".cookies_ing_4").droppable({
        accept: ("#cookies_ing_4"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/cookies_ing_4.png');
                    $("#cookies_ing_4").hide();
                }
    });

    $(".cookies_ing_5").droppable({
        accept: ("#cookies_ing_5"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/cookies_ing_5.png');
                    $("#cookies_ing_5").hide();
                }
    });

    $(".cookies_ing_6").droppable({
        accept: ("#cookies_ing_6"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/cookies_ing_6.png');
                    $("#cookies_ing_6").hide();
                }
    });
    $(".cookies_ing_7").droppable({
        accept: ("#cookies_ing_7"),
        tolerance: "intersect",
        drop: function (event, ui) {
                    $(this).attr('src', 'img/cookies_ing_7.png');
                    $("#cookies_ing_7").hide();
                }
    });

});