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

  $("#three").mouseenter(function(){
      $("#three1").css({
    	     stroke:"#6A7EFC",
           transition:"0.2s"
	    });
      $("#three2").css({
    	     stroke:"#6A7EFC",
           transition:"0.2s"
	    });

  });

  $("#three").mouseleave(function(){
      $("#three1").css({
    	     stroke:"#000",
           transition:"0.2s"
	    });
      $("#three2").css({
    	     stroke:"#000",
           transition:"0.2s"
	    });

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

  $('#seven').hover(function(){
        $("#seven").animate({
            height: 'toggle'
        });
    });

  $('#eight').hover(function(){
        $("#eight1").css({
          transform:"rotate(60deg)",
          transition:"0.2s"
        });
        $("#eight2").css({
          transform:"rotate(20deg)",
          transition:"0.2s"
        });
    });

  $('#nine').hover(function(){
    $('#nine').animate({
      left: '10px'
    });
  });

  $('#ten').hover(function(){
    $('#ten').animate({
      height: '100px'
    });
  });

  $('#eleven').hover(function(){
    $('#eleven1').animate({
      strokeWidth: '10'
    });
    $('#eleven2').animate({
      strokeWidth: '10'
    });
  });

  $('#twelve').mouseenter(function(){
        $("#twelve1").css({
          transform:"translate(3px, 2px)",
          transition:"0.2s"
        });
        $("#twelve2").css({
          transform:"translate(-20px, -10px)",
          transition:"0.2s"
        });
    });

  $('#twelve').mouseleave(function(){
        $("#twelve1").css({
          transform:"translate(0, 0)",
          transition:"0.2s"
        });
        $("#twelve2").css({
          transform:"translate(0, 0)",
          transition:"0.2s"
        });
    });

  $('#thirteen').hover(function(){
        $("#thirteen").css('background-color', 'black');
        $("#thirteen1").css('stroke', 'white');
        $("#thirteen2").css('stroke', 'white');
    });

  $('#fourteen').mouseenter(function(){
        $("#fourteen").css({
          transform:"scale(2)",
          transition:"0.5s"
        })
    });

  $('#fourteen').mouseleave(function(){
        $("#fourteen").css({
          transform:"scale(1)",
          transition:"0.5s"
        })
    });

  $('#fifteen').mouseenter(function(){
        $("#fifteen").css({
          transform:"scale(.2)",
          transition:"0.1s"
        })
    });

  $('#fifteen').mouseleave(function(){
        $("#fifteen").css({
          transform:"scale(1)",
          transition:"0.4s"
        })
    });

  $('#sixteen').mouseenter(function(){
        $("#sixteen").css({
          transform:"skew(30deg)",
          transition:"0.4s"
        })
    });

  $('#seventeen').hover(function(){
        $("#seventeen").css('background-color', '#F4E557');
        $("#seventeen1").css({
          stroke:'#DC4444',
          opacity:'0.5'
        });
        $("#seventeen2").css({
          stroke:'#DC4444',
          opacity:'0.5'
        });
    });

  $('#eighteen').hover(function(){
        $("#eighteen1").css({
          transform:"rotate(3deg)",
          transition:"0.2s"
        });
        $("#eighteen2").css({
          transform:"translate(-40px, -10px)",
          opacity: '0',
          transition:"0.2s"
        });
    });

  $('#nineteen').mouseenter(function(){
        $("#nineteen1").css({
          transform:"rotate(3deg)",
          transition:"2s"
        });
        $("#nineteen2").css({
          transform:"rotate(-3deg)",
          transition:"2s"
        });
    });

  $("#twenty").mouseenter(function(){
    $("#twenty1").css({
      transform:"rotate(180deg)",
      transition:"0.3s"
    });
    $("#twenty2").css({
      transform:"rotate(-180deg)",
      transition:"0.3s"
    });
  });

  $("#twenty").mouseleave(function(){
    $("#twenty1").css({
      transform:"rotate(0)",
      transition:"0.3s"
    });
    $("#twenty2").css({
      transform:"rotate(18deg)",
      transition:"0.3s"
    });
  });

  $('#twentyone').mouseenter(function(){
        $("#twentyone").animate({
          opacity:"0"
        }, "fast");
        $("#twentyone").animate({
          left:'100px'
        }, "fast");
        $("#twentyone").animate({
          opacity:"1"
        }, "fast");
    });

  $('#twentytwo').hover(function(){
        $(".try").animate({
          opacity:"0.5"
        }, "fast");
        $("#twentytwo").animate({
          left:'100px'
        }, "fast");
        $("#twentythree").animate({
          right:'100px'
        }, "fast");
        $(".try").animate({
          opacity:"1"
        }, "fast");
    });

  $("#twentyfour").mouseenter(function(){
      $("#twentyfour1").css('stroke-dasharray', '5,2');
      $("#twentyfour2").css('stroke-dasharray', '5,2');
  });

  $("#twentyfour").mouseleave(function(){
      $("#twentyfour1").css('stroke-dasharray', 'none');
      $("#twentyfour2").css('stroke-dasharray', 'none');
  });

  $("#twentyfive").mouseenter(function(){
      $("#twentyfive").css({
          transform:"rotateY(180deg)",
          transition:"0.3s"
          });
  });

  $("#twentyfive").mouseleave(function(){
      $("#twentyfive").css({
          transform:"rotateY(0)",
          transition:"0.3s"
          });
        });

  $('#twentysix').mouseenter(function(){
    $("#twentysix").css({
        transform:"translateX(2000px)",
        transition:"0.3s"
        });
    $("#twentyseven").css({
        transform:"translateX(2000px)",
        transition:"0.8s"
        });
    $("#twentyeight").css({
        transform:"translateX(2000px)",
        transition:"1s"
        });
    $("#twentynine").css({
        transform:"translateX(2000px)",
        transition:"1.3s"
        });
    $("#thirty").css({
        transform:"translateX(2000px)",
        transition:"3s"
        });
      });

  $("#thirtyone").click(function(){
      $("#thirtyone1").css('animation-play-state', 'running');
      $("#thirtyone2").css('animation-play-state', 'running');
  });

  $("#thirtytwo").hover(function(){
      $("#thirtytwo").animate({bottom:"+=20px"});
  });

  $("#thirtythree").click(function(){
      $("#thirtytwo").animate({bottom:"0"});
  });

  $("#thirtyfour").click(function(){
      $("#thirtyfour1").animate({strokeWidth:"10"}, "fast");
      $("#thirtyfour2").animate({strokeWidth:"10"}, "fast");
      $("#thirtyfour1").css({transform:"translateX(10px)"});


  });

  $("#thirtyfive").click(function(){
      $("#thirtyfive").animate({bottom:"+=30px"}, "slow");
      $("#thirtyfive").animate({left:"+=10px"}, "slow");
      $("#thirtyfive").animate({top:"+=20px"}, "fast");
      $("#thirtyfive").animate({right:"+=50px"}, "fast");

  });

});
