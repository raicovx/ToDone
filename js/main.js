 $('.todoItem-1').velocity({scale: "0.2"},{duration:0});
$(document).ready(function(){

    initialAnimations();
    $(".button-collapse").sideNav();
});

function initialAnimations(){
  
    $('.navBar nav').velocity({ top: "0" },{ duration: 1000 });
    $('.todoItem-1').velocity({scale: "1"},{delay:"0.2s", duration: 1000});
    
}