$(document).ready(function(){
    initialAnimations();
    $(".button-collapse").sideNav();
    $('.todoEntryButton').on("click", function(){
      var todoEntryFieldLength = $('.todoEntry').val().length;
            if(todoEntryFieldLength > 0){
                 var todoText = $('.todoEntry').val();
                 var todoListLength = $('.todoList').find('div').length;
                 var todoListLengthNew = todoListLength+1;
                 CreateTodo(todoText,todoListLengthNew);   
            }else{
              Materialize.toast('Todo Description is empty! enter a Description', 4000)   
            }
    });
    
});

function initialAnimations(){
    $('.navBar nav').velocity({ top: "0" },{ duration: 800 });
}

function initialCardAnimation(todoItemNumber){
  $('.todoItem-'+todoItemNumber).velocity({scale: "1"},{ duration: 800});  
}

function CreateTodo(todoText,todoListLengthNew){
    $('.todoList').append("<div class=\"card darkCard todoItem-"+todoListLengthNew+"\" style=\"display:none\">"+todoText+"</div>");
    $('.todoItem-'+todoListLengthNew).hide().velocity({scale: "0.5"},{duration:0}).show();
    $('.todoEntry').val("");
    initialCardAnimation(todoListLengthNew);
}