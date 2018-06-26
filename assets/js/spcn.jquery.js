//jQuery
//Product by SuperConsole®.

//サブメニューのトグル化
var toggle = true;

$(function(){
    $(".side-bar").click(function () {
        if(toggle){
            $("#main").fadeOut(500);
            $(".menu").fadeIn(500);
            setTimeout($("#main").hide(),500);
            toggle=false;
        }else{
            $("#main").fadeIn(500);
            $(".menu").fadeOut(500);
            setTimeout($(".menu").hide(),500);
            toggle=true;
        }
    });
    $("#menuButton").click(function () {
        location.reload();
    });
});
