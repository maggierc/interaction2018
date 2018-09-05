$(document).ready(function(){

  $("#two").hover(function(){
      $("#two1").css('stroke', 'red');
      $("#two2").css('stroke', 'red');

  });

  $("#one").hover(function(){
      $("#one1").css('stroke-width', '10');
      $("#one2").css('stroke-width', '10');

  });

  $("#three").click(function(){
      $("#three1").fadeOut();
      $("#three2").fadeOut();

  });


});
