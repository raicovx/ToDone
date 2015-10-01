 $('.todoItem-1').velocity({scale: "0.2"},{duration:0});
$(document).ready(function(){

    initialAnimations();
    $(".button-collapse").sideNav();
    $('.todoEntryButton').on("click", function(){
         var todoText = $('.todoEntry').val();
         var todoListLength = $('.todoList').length;
         var todoListLengthNew = ($('.todoList').length)+1;
         $('.todoList').append("<div class=\"card darkCard todoItem-"+todoListLengthNew+"\">"+todoText+"</div>");
    });
    
});

function initialAnimations(){
  
    $('.navBar nav').velocity({ top: "0" },{ duration: 1000 });
    $('.todoItem-1').velocity({scale: "1"},{delay:"0.2s", duration: 1000});
    
}