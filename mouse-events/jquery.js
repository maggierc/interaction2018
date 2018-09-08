$(document).ready(function(){

  $("#two").hover(function(){
      $("#two1").css('stroke', 'red');
      $("#two2").css('stroke', 'red');

  });

  $("#one").hover(function(){
      $("#one1").css('stroke-width', '10');
      $("#one2").css('stroke-width', '10');

  });

  // $("#three").click(function(){
  //     $("#three1").fadeOut();
  //     $("#three2").fadeOut();
  //
  // });

  $("#three").hover(function(){
      $("#three1").animate({
    	stroke:"red",
	    }, 200);

  });

  $("#four").mouseenter(function(){
      $("#four1").fadeOut();
      $("#four2").fadeOut();

  });

  $("#four").mouseleave(function(){
      $("#four1").fadeIn();
      $("#four2").fadeIn();

  });

  $("#five").hover(function(){
      $("#five1").css('transform', 'rotate(-6deg)');
      $("#five2").css('transform', 'rotate(6deg)');

  });

  $('#six').mouseover(function(){

    	$("#six1").animate({
    	opacity:".2",
	    }, 200);
      $("#six2").animate({
    	opacity:".2",
	    }, 200);
  });

  $('#six').mouseout(function(){

    $("#six1").animate({
    opacity:"1",
    }, 200);
    $("#six2").animate({
    opacity:"1",
    }, 200);

    });

});
