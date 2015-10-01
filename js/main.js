$(document).ready(function(){
    initialAnimations();
    $(".button-collapse").sideNav();
});

function initialAnimations(){
 $('.darkCard').velocity({scale: "0.5"},{duration:10});
    $('.navBar nav').velocity({ top: "0" },{ duration: 1000 });
    $('.darkCard').velocity({scale: "1"},{duration:1000});   
}