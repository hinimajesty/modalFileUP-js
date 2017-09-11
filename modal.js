/**------------------------------------------------------*
 * Author   -> Hini Majesty                              *
 * Date     -> 26/06/2017                                *
 * Job      -> Custom File upload in a Light Box Modal   *
 * version  -> 1.0                                       *
 * Happy Coding :-)                                      *
/**------------------------------------------------------*/

$(window).ready(function(){
    btn_trigger     = $("#btn-trigger");
    modal_overlay   = $("#modal-overlay");
    modal_container = $("#modal-container");
    btn_close       = $("#btn-close"); 
    span            = $('#uploaded-file-name');   
    
    btn_trigger.on("click", function(){
       span.html("Click above to select files");
       modal_overlay.css("display","block");
       
       setTimeout(function(){ 
        modal_container.css("display", "block"); 
      }, 300);
    });  

    btn_close.on("click", function(){
       modal_container.fadeOut();
       modal_overlay.fadeOut();
       span.html("Click above to select files");
    });
}); 