$(document).ready(function(){

  function randoWidth() {
    var randoW = Math.floor((Math.random() * 90) + 1);
  }

  function randoHeight() {
    var randoH = Math.floor((Math.random() * 200) + 1);
  }


  $("#two").hover(function(){
      $("#two1").css('stroke', 'red');
      $("#two2").css('stroke', 'red');

  });

  $("#one").hover(function(){
      $("#one1").css('stroke-width', '10');
      $("#one2").css('stroke-width', '10');

  });

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

  $("#thirtysix").click(function(){
      $("#thirtyseven").animate({
        height:'toggle'
      });
  });

  $("#thirtyseven").click(function(){
      $("#thirtysix").animate({
        width:'toggle'
      });
  });

  $("#thirtyeight").click(function(){
      $("#thirtynine1").animate({
        opacity:'toggle'
      });
  });

  $("#thirtynine").click(function(){
      $("#thirtyeight2").animate({
        opacity:'toggle'
      });
  });

  $("#forty").click(function(){
      $("#thirtynine2").animate({
        opacity:'toggle'
      });
      $("#thirtyeight1").animate({
        opacity:'toggle'
      });
  });

  $('#fortyone').click(function(){
        $("#fortytwo1").css({
          transform:"rotate(5deg)",
          transition:"0.2s"
        });
        $("#fortytwo2").css({
          transform:"translate(-20px, -10px)",
          transition:"0.2s"
        });
    });

  $('#fortythree').click(function(){
        $("#fortytwo1").css({
          transform:"translate(5px, 70px)",
          transition:"0.2s"
        });
        $("#fortytwo2").css({
          transform:"rotate(-20deg)",
          transition:"0.9s"
        });
    });

  $('#fortyfour').click(function(){
        $("#fortytwo1").css({
          transform:"matrix(1, -0.3, 0, 1, 0, 0)",
          transition:"0.5s"
        });
        $("#fortytwo2").css({
          transform:"rotate(9deg)",
          transition:"0.1s"
        });
    });

  $('#fortyfive').click(function(){
        $("#fortytwo1").css({
          transform:"matrix(0.5, 0, 0, 0.5, 0, 0)",
          transition:"0.5s"
        });
        $("#fortytwo2").css({
          transform:"matrix(0.5, 0, 0, 0.5, 0, 0)",
          transition:"0.1s"
        });
    });

  $('#fortysix').hover(function(){
        $("#fortyseven").animate({
          bottom:"+=10px"
        });
        $("#fortyeight").animate({
          left:"+=2px"
        });
        $("#fortynine").animate({
          top:"+8px"
        });
        $("#fifty").animate({
          right:"+=15px"
        });
    });

  $('#fortyseven').hover(function(){
        $("#fortysix").animate({
          bottom:"+=5px"
        });
        $("#fifty").animate({
          left:"+=2px"
        });
        $("#fortyeight").animate({
          top:"+8px"
        });
        $("#fortynine").animate({
          right:"+=5px"
        });
    });

  $('#fortyeight').hover(function(){
        $("#fortynine").animate({
          bottom:"+=5px"
        });
        $("#fortyseven").animate({
          left:"+=2px"
        });
        $("#fifty").animate({
          top:"+8px"
        });
        $("#fortysix").animate({
          right:"+=5px"
        });
    });

  $('#fortynine').hover(function(){
        $("#fifty").animate({
          bottom:"+=5px"
        });
        $("#fortyeight").animate({
          left:"+=20px"
        });
        $("#fortysix").animate({
          top:"+8px"
        });
        $("#fortyseven").animate({
          right:"+=10px"
        });
    });

  $('#fifty').mouseenter(function(){
        $("#fortynine").css({
          transform:'rotate(-180deg)',
          transition:'0.5s'
        });
        $("#fortyeight").css({
          transform:'rotate(180deg)',
          transition:'0.5s'
        });
        $("#fortysix").css({
          transform:'rotate(180deg)',
          transition:'0.5s'
        });
        $("#fortyseven").css({
          transform:'rotate(-180deg)',
          transition:'0.5s'
        });
    });

  $('#fifty').mouseleave(function(){
        $("#fortynine").css({
          transform:'rotate(0)',
          transition:'0.5s'
        });
        $("#fortyeight").css({
          transform:'rotate(0)',
          transition:'0.5s'
        });
        $("#fortysix").css({
          transform:'rotate(0)',
          transition:'0.5s'
        });
        $("#fortyseven").css({
          transform:'rotate(0)',
          transition:'0.5s'
        });
    });

  $('#fiftyone').click(function(){
        $("#fiftyfive1")[0].setAttribute('x2', '40');
        $("#fiftyfive2")[0].setAttribute('x2', '50');
    });

  $('#fiftytwo').click(function(){
        $("#fiftyfour1")[0].setAttribute('x1', '0');
        $("#fiftyfour1")[0].setAttribute('y1', '90');
        $("#fiftyfour1")[0].setAttribute('x2', '90');
        $("#fiftyfour1")[0].setAttribute('y2', '120');
        $("#fiftyfour2")[0].setAttribute('x1', '0');
        $("#fiftyfour2")[0].setAttribute('y1', '120');
        $("#fiftyfour2")[0].setAttribute('x2', '90');
        $("#fiftyfour2")[0].setAttribute('y2', '90');
    });

  $('#fiftythree').click(function(){
        $("#fiftythree1")[0].setAttribute('x1', '0');
        $("#fiftythree1")[0].setAttribute('y1', '0');
        $("#fiftythree1")[0].setAttribute('x2', '90');
        $("#fiftythree1")[0].setAttribute('y2', '200');
        $("#fiftythree2")[0].setAttribute('x1', '90');
        $("#fiftythree2")[0].setAttribute('y1', '0');
        $("#fiftythree2")[0].setAttribute('x2', '0');
        $("#fiftythree2")[0].setAttribute('y2', '200');
    });

  $('#fiftyfour').click(function(){
        $("#fiftytwo1")[0].setAttribute('x1', '0');
        $("#fiftytwo1")[0].setAttribute('y1', '0');
        $("#fiftytwo1")[0].setAttribute('x2', '0');
        $("#fiftytwo1")[0].setAttribute('y2', '200');
        $("#fiftytwo2")[0].setAttribute('x1', '90');
        $("#fiftytwo2")[0].setAttribute('y1', '0');
        $("#fiftytwo2")[0].setAttribute('x2', '90');
        $("#fiftytwo2")[0].setAttribute('y2', '200');
    });

  $('#fiftyfive').click(function(){
        $("#fiftyone1")[0].setAttribute('x1', '20');
        $("#fiftyone1")[0].setAttribute('y1', '60');
        $("#fiftyone1")[0].setAttribute('x2', '42');
        $("#fiftyone1")[0].setAttribute('y2', '128');
        $("#fiftyone2")[0].setAttribute('x1', '72');
        $("#fiftyone2")[0].setAttribute('y1', '120');
        $("#fiftyone2")[0].setAttribute('x2', '19');
        $("#fiftyone2")[0].setAttribute('y2', '199');
    });

  $('#fiftysix').hover(function(){
          $(".row5660").css('box-shadow', '5px 5px #FCE38A');
      });

  $('#fiftyseven').click(function(){
          $(".charette").css('background-color', '#95E1D3');
      });

  $('#fiftyeight').click(function(){
          $(".charette").css('box-shadow', '5px 5px #F38181');
      });

  $('#fiftynine').click(function(){
          $(".row5660").css('background-color', '#EAFFD0');
      });

  $('#sixty').click(function(){
          $(".charette").css({
              backgroundColor:'none',
              boxShadow:'none'
          });
      });

  $('#sixtyone').click(function(){
          $("#sixtyone1").css({
              transform:'translate(10px,20px)',
              transition:'0.4s'
          });
          $("#sixtytwo1").css({
              transform:'translate(10px,20px)',
              transition:'0.4s'
          });
          $("#sixtythree1").css({
              transform:'translate(10px,20px)',
              transition:'0.4s'
          });
          $("#sixtyfour1").css({
              transform:'translate(10px,20px)',
              transition:'0.4s'
          });
          $("#sixtyfive1").css({
              transform:'translate(10px,20px)',
              transition:'0.4s'
          });
      });

  $('#sixtytwo').click(function(){
          $("#sixtyone2").css({
              transform:'translate(10px,20px)',
              transition:'0.4s'
          });
          $("#sixtytwo2").css({
              transform:'translate(-10px,20px)',
              transition:'0.4s'
          });
          $("#sixtythree2").css({
              transform:'translate(10px,20px)',
              transition:'0.4s'
          });
          $("#sixtyfour2").css({
              transform:'translate(-10px,20px)',
              transition:'0.4s'
          });
          $("#sixtyfive2").css({
              transform:'translate(10px,20px)',
              transition:'0.4s'
          });
      });

  $('#sixtythree').click(function(){
          $("#sixtyone1").css({
              transform:'translate(-5px,5px)',
              transition:'0.4s'
          });
          $("#sixtytwo1").css({
              transform:'translate(30px,10px)',
              transition:'0.4s'
          });
          $("#sixtythree1").css({
              transform:'translate(-5px,5px)',
              transition:'0.4s'
          });
          $("#sixtyfour1").css({
              transform:'translate(30px,10px)',
              transition:'0.4s'
          });
          $("#sixtyfive1").css({
              transform:'translate(-5px,5px)',
              transition:'0.4s'
          });
      });

  $('#sixtyfour').click(function(){
          $("#sixtyone2").css({
              transform:'translate(15px,25px)',
              transition:'0.4s'
          });
          $("#sixtytwo2").css({
              transform:'translate(3px,-10px)',
              transition:'0.4s'
          });
          $("#sixtythree2").css({
              transform:'translate(15px,25px)',
              transition:'0.4s'
          });
          $("#sixtyfour2").css({
              transform:'translate(3px,-10px)',
              transition:'0.4s'
          });
          $("#sixtyfive2").css({
              transform:'translate(15px,25px)',
              transition:'0.4s'
          });
      });

  $('#sixtyfive').click(function(){
          $("#sixtyone1").css({
              transform:'translate(35px,25px)',
              transition:'0.4s'
          });
          $("#sixtytwo1").css({
              transform:'translate(-25px,-15px)',
              transition:'0.4s'
          });
          $("#sixtythree1").css({
              transform:'translate(35px,25px)',
              transition:'0.4s'
          });
          $("#sixtyfour1").css({
              transform:'translate(-25px,-15px)',
              transition:'0.4s'
          });
          $("#sixtyfive1").css({
              transform:'translate(35px,25px)',
              transition:'0.4s'
          });
      });

  $('#sixtysix').click(function(){
          $("#sixtysix").css({
              transform:'scale(1.5)',
              transition:'0.2s'
          });
          $("#sixtyseven").css({
              transform:'scale(1.5)',
              transition:'0.2s'
          });
          $("#sixtyeight").css({
              transform:'scale(1.5)',
              transition:'0.2s'
          });
          $("#sixtynine").css({
              transform:'scale(1.5)',
              transition:'0.2s'
          });
          $("#seventy").css({
              transform:'scale(1.5)',
              transition:'0.2s'
          });
      });

  $('#sixtyseven').click(function(){
          $("#sixtysix1").css({
              transform:'scale(1.5)',
              transition:'0.2s'
          });
          $("#sixtyseven1").css({
              transform:'scale(1.5)',
              transition:'0.2s'
          });
          $("#sixtyeight1").css({
              transform:'scale(1.5)',
              transition:'0.2s'
          });
          $("#sixtynine1").css({
              transform:'scale(1.5)',
              transition:'0.2s'
          });
          $("#seventy1").css({
              transform:'scale(1.5)',
              transition:'0.2s'
          });
      });

  $('#sixtyeight').click(function(){
          $("#sixtysix2").css({
              transform:'scale(0.5)',
              transition:'0.2s'
          });
          $("#sixtyseven2").css({
              transform:'scale(0.5)',
              transition:'0.2s'
          });
          $("#sixtyeight2").css({
              transform:'scale(0.5)',
              transition:'0.2s'
          });
          $("#sixtynine2").css({
              transform:'scale(0.5)',
              transition:'0.2s'
          });
          $("#seventy2").css({
              transform:'scale(0.5)',
              transition:'0.2s'
          });
      });

  $('#sixtynine').click(function(){
          $("#sixtysix").css({
              transform:'scale(4)',
              transition:'3s'
          });
          $("#sixtyseven").css({
              transform:'scale(4)',
              transition:'3s'
          });
          $("#sixtyeight").css({
              transform:'scale(4)',
              transition:'3s'
          });
          $("#sixtynine").css({
              transform:'scale(4)',
              transition:'3s'
          });
          $("#seventy").css({
              transform:'scale(4)',
              transition:'3s'
          });
      });

  $('#seventy').click(function(){
          $("#sixtysix1").css({
              transform:'scale(0.1)',
              transition:'0.25s'
          });
          $("#sixtyseven1").css({
              transform:'scale(0.1)',
              transition:'0.5s'
          });
          $("#sixtyeight1").css({
              transform:'scale(0.1)',
              transition:'0.75s'
          });
          $("#sixtynine1").css({
              transform:'scale(0.1)',
              transition:'1s'
          });
          $("#seventy1").css({
              transform:'scale(0.1)',
              transition:'1.25s'
          });
      });

  $('#seventyone').click(function(){
        $("#seventyone1")[0].setAttribute('x1', '0');
        $("#seventyone1")[0].setAttribute('y1', '100');
        $("#seventyone1")[0].setAttribute('x2', '90');
        $("#seventyone1")[0].setAttribute('y2', '100');
        $("#seventytwo1")[0].setAttribute('x1', '0');
        $("#seventytwo1")[0].setAttribute('y1', '100');
        $("#seventytwo1")[0].setAttribute('x2', '90');
        $("#seventytwo1")[0].setAttribute('y2', '100');
        $("#seventythree1")[0].setAttribute('x1', '0');
        $("#seventythree1")[0].setAttribute('y1', '100');
        $("#seventythree1")[0].setAttribute('x2', '90');
        $("#seventythree1")[0].setAttribute('y2', '100');
        $("#seventyfour1")[0].setAttribute('x1', '0');
        $("#seventyfour1")[0].setAttribute('y1', '100');
        $("#seventyfour1")[0].setAttribute('x2', '90');
        $("#seventyfour1")[0].setAttribute('y2', '100');
        $("#seventyfive1")[0].setAttribute('x1', '0');
        $("#seventyfive1")[0].setAttribute('y1', '100');
        $("#seventyfive1")[0].setAttribute('x2', '90');
        $("#seventyfive1")[0].setAttribute('y2', '100');

        $("#seventyone2")[0].setAttribute('x1', '0');
        $("#seventyone2")[0].setAttribute('y1', '110');
        $("#seventyone2")[0].setAttribute('x2', '90');
        $("#seventyone2")[0].setAttribute('y2', '110');
        $("#seventytwo2")[0].setAttribute('x1', '0');
        $("#seventytwo2")[0].setAttribute('y1', '110');
        $("#seventytwo2")[0].setAttribute('x2', '90');
        $("#seventytwo2")[0].setAttribute('y2', '110');
        $("#seventythree2")[0].setAttribute('x1', '0');
        $("#seventythree2")[0].setAttribute('y1', '110');
        $("#seventythree2")[0].setAttribute('x2', '90');
        $("#seventythree2")[0].setAttribute('y2', '110');
        $("#seventyfour2")[0].setAttribute('x1', '0');
        $("#seventyfour2")[0].setAttribute('y1', '110');
        $("#seventyfour2")[0].setAttribute('x2', '90');
        $("#seventyfour2")[0].setAttribute('y2', '110');
        $("#seventyfive2")[0].setAttribute('x1', '0');
        $("#seventyfive2")[0].setAttribute('y1', '110');
        $("#seventyfive2")[0].setAttribute('x2', '90');
        $("#seventyfive2")[0].setAttribute('y2', '110');
    });

  $('#seventytwo').click(function(){
        $('.row7075').css({
          transform:'scale(1.3)',
          transition:'0.1s'
        })
  });

  $('#seventythree').click(function(){
        $('#seventyone').css({
          transform:'translateY(20px)',
          transition:'0.3s'
        })
        $('#seventytwo').css({
          transform:'translateY(-20px)',
          transition:'0.5s'
        })
        $('#seventythree').css({
          transform:'translateY(20px)',
          transition:'0.3s'
        })
        $('#seventyfour').css({
          transform:'translateY(-20px)',
          transition:'0.5s'
        })
        $('#seventyfive').css({
          transform:'translateY(20px)',
          transition:'0.3s'
        })
    });

  $('#seventyfour').click(function(){
        $('#seventyone').css({
          transform:'translate(230px, 50px)',
          transition:'0.3s'
        })
        $('#seventytwo').css({
          transform:'translate(115px, 25px)',
          transition:'0.4s'
        })
        $('#seventythree').css({
          transform:'translate(0, 0)',
          transition:'0.3s'
        })
        $('#seventyfour').css({
          transform:'translate(-115px, -25px)',
          transition:'0.4s'
        })
        $('#seventyfive').css({
          transform:'translate(-230px, -50px)',
          transition:'0.3s'
        })
    });

    $('#seventyfive').click(function(){
          $('#seventyone').css({
            transform:'translate(230px, 100px)',
            transition:'0.4s'
          })
          $('#seventytwo').css({
            transform:'translate(115px, 50px)',
            transition:'0.5s'
          })
          $('#seventythree').css({
            transform:'translate(0, 0)',
            transition:'0.4s'
          })
          $('#seventyfour').css({
            transform:'translate(-115px, -50px)',
            transition:'0.5s'
          })
          $('#seventyfive').css({
            transform:'translate(-230px, -100px)',
            transition:'0.4s'
          })
      });

  // $('#fiftysix').hover(function(){
  //         $(".charette").animate({
  //           opacity:'toggle'
  //           });
  //     });





});
