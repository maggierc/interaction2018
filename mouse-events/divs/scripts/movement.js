$(document).ready(function(){
  $("#A").hover(function(){
    $("div#A .type1").toggleClass("rotateAnimate1");
    $("div#A .type2").toggleClass("rotateAnimate2");
    $("div#A .type3").toggleClass("rotateAnimateSlow1");
    $("div#A .type4").toggleClass("rotateAnimateSlow2");
    $("div#A").toggleClass("pause");

    $("div#A div").css('background-color', '#f7f7f7');
  });
});