var toDone = {};
toDone.webdb = {};
$(document).ready(function(){
    toDone.webdb.db = null;
    
    toDone.webdb.open = function(){
        var dbsize = 5 * 1024 * 1024; //5MB
        toDone.webdb.db = openDatabase("Todo", "1", "Todo Manager", dbsize);      
    }
    
    toDone.webdb.onError = function(tx, e) {
        alert("There has been an error: " + e.message);
    }
    
    toDone.webdb.onSuccess = function(tx, r) {
        // re-render the data.
        toDone.webdb.getAllTodoItems(loadTodoItems);
    }
    
    toDone.webdb.createTable = function() {
        var db = toDone.webdb.db;
        db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS " + "todo(ID INTEGER PRIMARY KEY ASC, todo TEXT, added_on DATETIME)", []);
        });
    }
    
    toDone.webdb.addTodo = function(todoText) {
      var db = toDone.webdb.db;
      db.transaction(function(tx){
        var addedOn = new Date();
        tx.executeSql("INSERT INTO todo(todo, added_on) VALUES (?,?)",
        [todoText, addedOn],
        toDone.webdb.onSuccess,
        toDone.webdb.onError);
      });
    }
    
    toDone.webdb.getAllTodoItems = function(renderFunc) {
      var db = toDone.webdb.db;
      db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM todo", [], renderFunc,
            toDone.webdb.onError);
      });
    }
    
    toDone.webdb.getLastTodoItem = function(renderFunc){
        var db = toDone.webdb.db;
        db.transaction(function(tx){
            tx.executeSql("SELECT TOP 1 * FROM todo ORDER BY ID ASC", [], renderFunc, toDone.webdb.db.onError);  
        });
    }
                       
    toDone.webdb.deleteTodo = function(id) {
      var db = toDone.webdb.db;
        console.log(id);
      db.transaction(function(tx){
        tx.executeSql("DELETE FROM todo WHERE ID=?", [id],
            toDone.webdb.onSuccess,
            toDone.webdb.onError);
        });
    }
 
    
    initialAnimations();
    $(".button-collapse").sideNav();
     $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
    $('.todoEntryButton').on("click", function(){
      var todoEntryFieldLength = $('.todoEntry').val().length;
           if(todoEntryFieldLength > 0){
               var todoText = $('.todoEntry').val();
           //      var todoListLength = $('.todoList').find('div').length;
             //    var todoListLengthNew = todoListLength+1;
               //  CreateTodo(todoText,todoListLengthNew);   
             toDone.webdb.addTodo(todoText);
               $('.todoEntry').val('');
            }else{
              Materialize.toast('Todo Description is empty! enter a Description', 4000)   
            }
    });
    
});

function initialAnimations(){
    $('.navBar nav').velocity({ top: "0" },{ duration: 800 });
}

function initialCardAnimation(todoItemNumber, delay){
    var thisTodo = $('.todoItem-'+todoItemNumber);
    thisTodo.hide();
    thisTodo.velocity({scale: "0.5"},{duration:0});
    thisTodo.show();
    thisTodo.velocity({scale: "1"},{ duration: 800, delay: delay+"s"});  
}

function CreateTodo(todoText,todoListLengthNew){
    $('.todoList').append("<div class=\"card darkCard todoItem-"+todoListLengthNew+"\" style=\"display:none\">"+todoText+"</div>");
   
    $('.todoEntry').val("");
    initialCardAnimation(todoListLengthNew);
}
