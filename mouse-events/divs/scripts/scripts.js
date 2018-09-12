$(document).ready(function(){

  $("#A").hover(function(){
    $("div#A .type1").toggleClass("rotateAnimate1");
    $("div#A .type2").toggleClass("rotateAnimate2");
    $("div#A .type3").toggleClass("rotateAnimateSlow1");
    $("div#A .type4").toggleClass("rotateAnimateSlow2");
    $("div#A div").css('background-color', '#7c38a0');
  });

  $("#B").hover(function(){
    $("div#B .type1").toggleClass("rotateAnimate1");
    $("div#B .type2").toggleClass("rotateAnimate2");
    $("div#B .type3").toggleClass("rotateAnimateSlow1");
    $("div#B .type4").toggleClass("rotateAnimateSlow2");
    $("div#B div").css('background-color', '#7c38a0');
  });




});
