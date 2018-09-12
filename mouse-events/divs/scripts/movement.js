$(document).ready(function(){
  $("#A").mouseover(function(){
    $("div#A .type1").toggleClass("rotateAnimate1");
    $("div#A .type2").toggleClass("rotateAnimate2");
    $("div#A .type3").toggleClass("rotateAnimateSlow1");
    $("div#A .type4").toggleClass("rotateAnimateSlow2");
    $("div#A").toggleClass("pause");

    $("div#A div").css('background-color', '#f7f7f7');
  });

  $("#A").mouseout(function(){
    $("div#A .type1").toggleClass("rotateAnimate1");
    $("div#A .type2").toggleClass("rotateAnimate2");
    $("div#A .type3").toggleClass("rotateAnimateSlow1");
    $("div#A .type4").toggleClass("rotateAnimateSlow2");
    $("div#A").toggleClass("pause");

    $("div#A div").css('background-color', '#7971ea');
  });

  $("#B").mouseover(function(){
    $("div#B .type1").toggleClass("rotateAnimate1");
    $("div#B .type2").toggleClass("rotateAnimate2");
    $("div#B .type3").toggleClass("rotateAnimateSlow1");
    $("div#B .type4").toggleClass("rotateAnimateSlow2");
    $("div#B").toggleClass("pause");

    $("div#B div").css('background-color', '#f7f7f7');
  });

  $("#B").mouseout(function(){
    $("div#B .type1").toggleClass("rotateAnimate1");
    $("div#B .type2").toggleClass("rotateAnimate2");
    $("div#B .type3").toggleClass("rotateAnimateSlow1");
    $("div#B .type4").toggleClass("rotateAnimateSlow2");
    $("div#B").toggleClass("pause");

    $("div#B div").css('background-color', '#7971ea');
  });

  $("#C").mouseover(function(){
    $("div#C .type1").toggleClass("rotateAnimate1");
    $("div#C .type2").toggleClass("rotateAnimate2");
    $("div#C .type3").toggleClass("rotateAnimateSlow1");
    $("div#C .type4").toggleClass("rotateAnimateSlow2");
    $("div#C").toggleClass("pause");

    $("div#C div").css('background-color', '#f7f7f7');
  });

  $("#C").mouseout(function(){
    $("div#C .type1").toggleClass("rotateAnimate1");
    $("div#C .type2").toggleClass("rotateAnimate2");
    $("div#C .type3").toggleClass("rotateAnimateSlow1");
    $("div#C .type4").toggleClass("rotateAnimateSlow2");
    $("div#C").toggleClass("pause");

    $("div#C div").css('background-color', '#7971ea');
  });


});
