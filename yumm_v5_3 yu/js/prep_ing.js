// $(function() {
//     // console.log( "ready!" );

//     $(".drag_item").draggable({
//         containment: ".yum_gamearea",
//         revert: "invalid",
//         scroll: false,
//         helper: 'clone'
//     });
    
//     $(".drop_board").droppable({
//         accept: (".drag_item"),
//         drop: function (event, ui) {
//             var drag_item = ui.draggable;
//             var $this = $(this);
            
//             $this.droppable('option', 'accept', ui.draggable);
            
//             ui.draggable.position({
//                 my: "center",
//                 at: "center",
//                 of: $this,
//                 using: function(pos) {
//                     $(this).animate(pos, "fast", "linear");
//                 }
//             });
//         }
//     });
// });


    
  $(".drop_board").droppable({
      drop: function(event, ui) {
            var $this = $(this); 
            var droppedId = ui.draggable.attr("id");
            
          $this.droppable('option', 'accept', ui.draggable);
          // $this.addClass("dropzone_highlight");
          
          ui.draggable.position({
                my: "center",
                at: "center",
                of: $this,
                using: function(pos) {
                    $(this).animate(pos, "fast", "linear");
                }
            });
          
          ui.draggable.click(function(){
                ui.draggable.attr("src","img/" + droppedId + "_done.png");
        });
        
    },
    
      out: function(event, ui) {
          $(this).droppable('option', 'accept', '.drag_item');        
    },
  });
});