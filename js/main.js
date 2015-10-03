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
    $('.navBar nav').velocity({ top: "0" },{ duration: 800 });
}

function initialCardAnimation(todoItemNumber){
  $('.todoItem-'+todoItemNumber).velocity({scale: "1"},{ duration: 800});  
}

function CreateTodo(todoText,todoListLengthNew){
    $('.todoList').append("<div class=\"card darkCard todoItem-"+todoListLengthNew+"\">"+todoText+"</div>");
    $('.todoItem-'+todoListLengthNew).hide().velocity({scale: "0.5"},{duration:0}).show();
    initialCardAnimation(todoListLengthNew);
}