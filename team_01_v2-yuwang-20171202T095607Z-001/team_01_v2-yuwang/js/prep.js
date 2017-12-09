$(function() { 

	for (var i = 0; i < 15; i++) {
        var drag_item = "<img src='http://via.placeholder.com/210x210' class='drag_item yum_item_ingredient col-sm-4'>";
        $(".yum_list_ingredient").append(drag_item);
    }
    

    $(".drag_item").draggable({
        containment: ".yum_gamearea",
        scroll: false,
        helper: 'clone'
        
    });

    

    
    $(".yum_drop_board").droppable({
        drop: function (event, ui) {
                var drag_item = ui.draggable;
                var $this = $(this);
                
                $this.droppable('option', 'accept', ui.draggable);
                
                ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $this,
                    using: function(pos) {
                        $(this).animate(pos, "fast", "linear");
                    }
                });

          
    
    	        ui.draggable.click(function(){
                ui.draggable.attr("src","img/photo-clip.jpg");
    });
  

            }


    });


     
        









});