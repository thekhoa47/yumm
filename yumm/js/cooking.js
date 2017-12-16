
$("[id*='thief'] img").draggable({
   containment: ".yum_gamearea",
   scroll: false,
   axis: "x"
});

$("#safezone").droppable({
    accept: "[id*='thief'] img"
    // drop: function () { 
    //     setInterval(myMethod, 5000);
    // }
});

// function myMethod( )
// {
//   alert("cat for a sec");
// }

    $("[id*='thief']").animate(
        {
            left: $(window).width()/2,
        },

        {
            duration: 10000,
            queue: false,
            easing: "linear",
            complete: function() {
                // alert("Mission Complete!");
                $("#next").removeClass("disabled");
            },
            progress: function(animation, progress) {
                $("#next").addClass("disabled");

                var success_width = Math.round(progress * 100);
                
                $("#percentage").text(success_width + '%');
                
                $(".progress-bar").width(success_width + '%');
            }
        }
    );

    // $("#thief02").animate(
    //     {
    //         left: $(window).width()/2 - $(this).width()/2,
    //     },

    //     {
    //         duration: 10000,
    //         queue: false,
    //         easing: "linear",
    //         complete: function() {
    //             // alert("Mission Complete!");
    //             $("#next").prop('disabled', false);
    //             $("#next a").prop('disabled', false);
    //         },
    //         progress: function(animation, progress) {
    //             $("#next").prop('disabled', true);
    //             $("#next a").prop('disabled', true);

    //             var success_width = Math.round(progress * 100);
                
    //             $("#percentage").text(success_width + '%');
                
    //             $(".progress-bar").width(success_width + '%');
    //         }
    //     }
    // );
// }