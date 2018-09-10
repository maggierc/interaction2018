$(document).ready(function(){

  $("#I").hover(function(){
    $(".linesI").toggleClass("square");
});

  $("#O").hover(function(){
    $("div#O div.Oog").toggleClass("rotateAnimate1", 'slow');
    $("div#O div.Oalt").toggleClass("rotateAnimate2", 'slow');
    $("div#O div.OSlow1").toggleClass("rotateAnimateSlow1", 'slow');
    $("div#O div.OSlow2").toggleClass("rotateAnimateSlow2", 'slow');

  });

  $("#I2").hover(function(){
    $("div#I2 div").toggleClass("whoosh", 1000, 'linear');
});




});
