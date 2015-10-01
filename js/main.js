 $('.todoItem-1').velocity({scale: "0.2"},{duration:0});
$(document).ready(function(){

    initialAnimations();
    $(".button-collapse").sideNav();
    $('.todoEntryButton').on("click", function(){
         var todoText = $('.todoEntry').val();
         var todoListLength = $('.todoList').find('div').length;
         var todoListLengthNew = todoListLength+1;
         CreateTodo(todoText,todoListLengthNew);
    });
    
});

function initialAnimations(){
  
    $('.navBar nav').velocity({ top: "0" },{ duration: 1000 });
    $('.todoItem-1').velocity({scale: "1"},{delay:"0.2s", duration: 1000});
    
}

function CreateTodo(todoText,todoListLengthNew){
    $('.todoList').append("<div class=\"card darkCard todoItem-"+todoListLengthNew+"\">"+todoText+"</div>");
}