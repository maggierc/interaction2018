$(document).ready(function(){

  $(".letter").addClass("itsDraggable");
  $(".letter").addClass("ui-widget-content");


  $( function() {
    $( ".itsDraggable" ).draggable();
  } );

  $("#A").mouseenter(function(){
    $("div#A div").css('background-color', '#fff');
    $("div#A .type1").toggleClass("rotateAnimate1");
    $("div#A .type2").toggleClass("rotateAnimate2");
    $("div#A .type3").toggleClass("rotateAnimateSlow1");
    $("div#A .type4").toggleClass("rotateAnimateSlow2");
    $("div#A").toggleClass("pause");


  });

  $("#A").mouseleave(function(){
    setTimeout(function(){
      $("div#A .type1").toggleClass("rotateAnimate1");
      $("div#A .type2").toggleClass("rotateAnimate2");
      $("div#A .type3").toggleClass("rotateAnimateSlow1");
      $("div#A .type4").toggleClass("rotateAnimateSlow2");
      $("div#A").toggleClass("pause");

      $("div#A div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#B").mouseenter(function(){
    $("div#B .type1").toggleClass("rotateAnimate1");
    $("div#B .type2").toggleClass("rotateAnimate2");
    $("div#B .type3").toggleClass("rotateAnimateSlow1");
    $("div#B .type4").toggleClass("rotateAnimateSlow2");
    $("div#B").toggleClass("pause");
    $("div#B div").css('background-color', '#fff');

  });

  $("#B").mouseleave(function(){
    setTimeout(function(){
      $("div#B div").css('background-color', '#5773ff');

      $("div#B .type1").toggleClass("rotateAnimate1");
      $("div#B .type2").toggleClass("rotateAnimate2");
      $("div#B .type3").toggleClass("rotateAnimateSlow1");
      $("div#B .type4").toggleClass("rotateAnimateSlow2");
      $("div#B").toggleClass("pause");
    }, 700);
  });

  $("#C").mouseenter(function(){
    $("div#C div").css('background-color', '#fff');
    $("div#C .type1").toggleClass("rotateAnimate1");
    $("div#C .type2").toggleClass("rotateAnimate2");
    $("div#C .type3").toggleClass("rotateAnimateSlow1");
    $("div#C .type4").toggleClass("rotateAnimateSlow2");
    $("div#C").toggleClass("pause");

  });

  $("#C").mouseleave(function(){
    setTimeout(function(){
      $("div#C .type1").toggleClass("rotateAnimate1");
      $("div#C .type2").toggleClass("rotateAnimate2");
      $("div#C .type3").toggleClass("rotateAnimateSlow1");
      $("div#C .type4").toggleClass("rotateAnimateSlow2");
      $("div#C").toggleClass("pause");

      $("div#C div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#D").mouseenter(function(){
    $("div#D .type1").toggleClass("rotateAnimate1");
    $("div#D .type2").toggleClass("rotateAnimate2");
    $("div#D .type3").toggleClass("rotateAnimateSlow1");
    $("div#D .type4").toggleClass("rotateAnimateSlow2");
    $("div#D").toggleClass("pause");

    $("div#D div").css('background-color', '#fff');
  });

  $("#D").mouseleave(function(){
    setTimeout(function() {
      $("div#D .type1").toggleClass("rotateAnimate1");
      $("div#D .type2").toggleClass("rotateAnimate2");
      $("div#D .type3").toggleClass("rotateAnimateSlow1");
      $("div#D .type4").toggleClass("rotateAnimateSlow2");
      $("div#D").toggleClass("pause");

      $("div#D div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#E").mouseenter(function(){
    $("div#E .type1").toggleClass("rotateAnimate1");
    $("div#E .type2").toggleClass("rotateAnimate2");
    $("div#E .type3").toggleClass("rotateAnimateSlow1");
    $("div#E .type4").toggleClass("rotateAnimateSlow2");
    $("div#E").toggleClass("pause");

    $("div#E div").css('background-color', '#fff');
  });

  $("#E").mouseleave(function(){
    setTimeout(function(){
      $("div#E .type1").toggleClass("rotateAnimate1");
      $("div#E .type2").toggleClass("rotateAnimate2");
      $("div#E .type3").toggleClass("rotateAnimateSlow1");
      $("div#E .type4").toggleClass("rotateAnimateSlow2");
      $("div#E").toggleClass("pause");

      $("div#E div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#F").mouseenter(function(){
    $("div#F .type1").toggleClass("rotateAnimate1");
    $("div#F .type2").toggleClass("rotateAnimate2");
    $("div#F .type3").toggleClass("rotateAnimateSlow1");
    $("div#F .type4").toggleClass("rotateAnimateSlow2");
    $("div#F").toggleClass("pause");

    $("div#F div").css('background-color', '#fff');
  });

  $("#F").mouseleave(function(){
    setTimeout(function(){
      $("div#F .type1").toggleClass("rotateAnimate1");
      $("div#F .type2").toggleClass("rotateAnimate2");
      $("div#F .type3").toggleClass("rotateAnimateSlow1");
      $("div#F .type4").toggleClass("rotateAnimateSlow2");
      $("div#F").toggleClass("pause");

      $("div#F div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#G").mouseenter(function(){
    $("div#G .type1").toggleClass("rotateAnimate1");
    $("div#G .type2").toggleClass("rotateAnimate2");
    $("div#G .type3").toggleClass("rotateAnimateSlow1");
    $("div#G .type4").toggleClass("rotateAnimateSlow2");
    $("div#G").toggleClass("pause");

    $("div#G div").css('background-color', '#fff');
  });

  $("#G").mouseleave(function(){
    setTimeout(function(){
      $("div#G .type1").toggleClass("rotateAnimate1");
      $("div#G .type2").toggleClass("rotateAnimate2");
      $("div#G .type3").toggleClass("rotateAnimateSlow1");
      $("div#G .type4").toggleClass("rotateAnimateSlow2");
      $("div#G").toggleClass("pause");

      $("div#G div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#H").mouseenter(function(){
    $("div#H .type1").toggleClass("rotateAnimate1");
    $("div#H .type2").toggleClass("rotateAnimate2");
    $("div#H .type3").toggleClass("rotateAnimateSlow1");
    $("div#H .type4").toggleClass("rotateAnimateSlow2");
    $("div#H").toggleClass("pause");

    $("div#H div").css('background-color', '#fff');
  });

  $("#H").mouseleave(function(){
    setTimeout(function(){
      $("div#H .type1").toggleClass("rotateAnimate1");
      $("div#H .type2").toggleClass("rotateAnimate2");
      $("div#H .type3").toggleClass("rotateAnimateSlow1");
      $("div#H .type4").toggleClass("rotateAnimateSlow2");
      $("div#H").toggleClass("pause");

      $("div#H div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#I").mouseenter(function(){
    $("div#I .type1").toggleClass("rotateAnimate1");
    $("div#I .type2").toggleClass("rotateAnimate2");
    $("div#I .type3").toggleClass("rotateAnimateSlow1");
    $("div#I .type4").toggleClass("rotateAnimateSlow2");
    $("div#I").toggleClass("pause");

    $("div#I div").css('background-color', '#fff');
  });

  $("#I").mouseleave(function(){
    setTimeout(function(){
      $("div#I .type1").toggleClass("rotateAnimate1");
      $("div#I .type2").toggleClass("rotateAnimate2");
      $("div#I .type3").toggleClass("rotateAnimateSlow1");
      $("div#I .type4").toggleClass("rotateAnimateSlow2");
      $("div#I").toggleClass("pause");

      $("div#I div").css('background-color', '#5773ff');
    },700);
  });

  $("#J").mouseenter(function(){
    $("div#J .type1").toggleClass("rotateAnimate1");
    $("div#J .type2").toggleClass("rotateAnimate2");
    $("div#J .type3").toggleClass("rotateAnimateSlow1");
    $("div#J .type4").toggleClass("rotateAnimateSlow2");
    $("div#J").toggleClass("pause");

    $("div#J div").css('background-color', '#fff');
  });

  $("#J").mouseleave(function(){
    setTimeout(function(){
      $("div#J .type1").toggleClass("rotateAnimate1");
      $("div#J .type2").toggleClass("rotateAnimate2");
      $("div#J .type3").toggleClass("rotateAnimateSlow1");
      $("div#J .type4").toggleClass("rotateAnimateSlow2");
      $("div#J").toggleClass("pause");

      $("div#J div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#K").mouseenter(function(){
    $("div#K .type1").toggleClass("rotateAnimate1");
    $("div#K .type2").toggleClass("rotateAnimate2");
    $("div#K .type3").toggleClass("rotateAnimateSlow1");
    $("div#K .type4").toggleClass("rotateAnimateSlow2");
    $("div#K").toggleClass("pause");

    $("div#K div").css('background-color', '#fff');
  });

  $("#K").mouseleave(function(){
    setTimeout(function(){
      $("div#K .type1").toggleClass("rotateAnimate1");
      $("div#K .type2").toggleClass("rotateAnimate2");
      $("div#K .type3").toggleClass("rotateAnimateSlow1");
      $("div#K .type4").toggleClass("rotateAnimateSlow2");
      $("div#K").toggleClass("pause");

      $("div#K div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#L").mouseenter(function(){
    $("div#L .type1").toggleClass("rotateAnimate1");
    $("div#L .type2").toggleClass("rotateAnimate2");
    $("div#L .type3").toggleClass("rotateAnimateSlow1");
    $("div#L .type4").toggleClass("rotateAnimateSlow2");
    $("div#L").toggleClass("pause");

    $("div#L div").css('background-color', '#fff');
  });

  $("#L").mouseleave(function(){
    setTimeout(function(){
      $("div#L .type1").toggleClass("rotateAnimate1");
      $("div#L .type2").toggleClass("rotateAnimate2");
      $("div#L .type3").toggleClass("rotateAnimateSlow1");
      $("div#L .type4").toggleClass("rotateAnimateSlow2");
      $("div#L").toggleClass("pause");

      $("div#L div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#M").mouseenter(function(){
    $("div#M .type1").toggleClass("rotateAnimate1");
    $("div#M .type2").toggleClass("rotateAnimate2");
    $("div#M .type3").toggleClass("rotateAnimateSlow1");
    $("div#M .type4").toggleClass("rotateAnimateSlow2");
    $("div#M").toggleClass("pause");

    $("div#M div").css('background-color', '#fff');
  });

  $("#M").mouseleave(function(){
    setTimeout(function(){
      $("div#M .type1").toggleClass("rotateAnimate1");
      $("div#M .type2").toggleClass("rotateAnimate2");
      $("div#M .type3").toggleClass("rotateAnimateSlow1");
      $("div#M .type4").toggleClass("rotateAnimateSlow2");
      $("div#M").toggleClass("pause");

      $("div#M div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#N").mouseenter(function(){
    $("div#N .type1").toggleClass("rotateAnimate1");
    $("div#N .type2").toggleClass("rotateAnimate2");
    $("div#N .type3").toggleClass("rotateAnimateSlow1");
    $("div#N .type4").toggleClass("rotateAnimateSlow2");
    $("div#N").toggleClass("pause");

    $("div#N div").css('background-color', '#fff');
  });

  $("#N").mouseleave(function(){
    setTimeout(function(){
      $("div#N .type1").toggleClass("rotateAnimate1");
      $("div#N .type2").toggleClass("rotateAnimate2");
      $("div#N .type3").toggleClass("rotateAnimateSlow1");
      $("div#N .type4").toggleClass("rotateAnimateSlow2");
      $("div#N").toggleClass("pause");

      $("div#N div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#O").mouseenter(function(){
    $("div#O .type1").toggleClass("rotateAnimate1");
    $("div#O .type2").toggleClass("rotateAnimate2");
    $("div#O .type3").toggleClass("rotateAnimateSlow1");
    $("div#O .type4").toggleClass("rotateAnimateSlow2");
    $("div#O").toggleClass("pause");

    $("div#O div").css('background-color', '#fff');
  });

  $("#O").mouseleave(function(){
    setTimeout(function(){
      $("div#O .type1").toggleClass("rotateAnimate1");
      $("div#O .type2").toggleClass("rotateAnimate2");
      $("div#O .type3").toggleClass("rotateAnimateSlow1");
      $("div#O .type4").toggleClass("rotateAnimateSlow2");
      $("div#O").toggleClass("pause");

      $("div#O div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#P").mouseenter(function(){
    $("div#P .type1").toggleClass("rotateAnimate1");
    $("div#P .type2").toggleClass("rotateAnimate2");
    $("div#P .type3").toggleClass("rotateAnimateSlow1");
    $("div#P .type4").toggleClass("rotateAnimateSlow2");
    $("div#P").toggleClass("pause");

    $("div#P div").css('background-color', '#fff');
  });

  $("#P").mouseleave(function(){
    setTimeout(function(){
      $("div#P .type1").toggleClass("rotateAnimate1");
      $("div#P .type2").toggleClass("rotateAnimate2");
      $("div#P .type3").toggleClass("rotateAnimateSlow1");
      $("div#P .type4").toggleClass("rotateAnimateSlow2");
      $("div#P").toggleClass("pause");

      $("div#P div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#Q").mouseenter(function(){
    $("div#Q .type1").toggleClass("rotateAnimate1");
    $("div#Q .type2").toggleClass("rotateAnimate2");
    $("div#Q .type3").toggleClass("rotateAnimateSlow1");
    $("div#Q .type4").toggleClass("rotateAnimateSlow2");
    $("div#Q").toggleClass("pause");

    $("div#Q div").css('background-color', '#fff');
  });

  $("#Q").mouseleave(function(){
    setTimeout(function(){
      $("div#Q .type1").toggleClass("rotateAnimate1");
      $("div#Q .type2").toggleClass("rotateAnimate2");
      $("div#Q .type3").toggleClass("rotateAnimateSlow1");
      $("div#Q .type4").toggleClass("rotateAnimateSlow2");
      $("div#Q").toggleClass("pause");

      $("div#Q div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#R").mouseenter(function(){
    $("div#R .type1").toggleClass("rotateAnimate1");
    $("div#R .type2").toggleClass("rotateAnimate2");
    $("div#R .type3").toggleClass("rotateAnimateSlow1");
    $("div#R .type4").toggleClass("rotateAnimateSlow2");
    $("div#R").toggleClass("pause");

    $("div#R div").css('background-color', '#fff');
  });

  $("#R").mouseleave(function(){
    setTimeout(function(){
      $("div#R .type1").toggleClass("rotateAnimate1");
      $("div#R .type2").toggleClass("rotateAnimate2");
      $("div#R .type3").toggleClass("rotateAnimateSlow1");
      $("div#R .type4").toggleClass("rotateAnimateSlow2");
      $("div#R").toggleClass("pause");

      $("div#R div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#S").mouseenter(function(){
    $("div#S .type1").toggleClass("rotateAnimate1");
    $("div#S .type2").toggleClass("rotateAnimate2");
    $("div#S .type3").toggleClass("rotateAnimateSlow1");
    $("div#S .type4").toggleClass("rotateAnimateSlow2");
    $("div#S").toggleClass("pause");

    $("div#S div").css('background-color', '#fff');
  });

  $("#S").mouseleave(function(){
    setTimeout(function(){
      $("div#S .type1").toggleClass("rotateAnimate1");
      $("div#S .type2").toggleClass("rotateAnimate2");
      $("div#S .type3").toggleClass("rotateAnimateSlow1");
      $("div#S .type4").toggleClass("rotateAnimateSlow2");
      $("div#S").toggleClass("pause");

      $("div#S div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#T").mouseenter(function(){
    $("div#T .type1").toggleClass("rotateAnimate1");
    $("div#T .type2").toggleClass("rotateAnimate2");
    $("div#T .type3").toggleClass("rotateAnimateSlow1");
    $("div#T .type4").toggleClass("rotateAnimateSlow2");
    $("div#T").toggleClass("pause");

    $("div#T div").css('background-color', '#fff');
  });

  $("#T").mouseleave(function(){
    setTimeout(function(){
      $("div#T .type1").toggleClass("rotateAnimate1");
      $("div#T .type2").toggleClass("rotateAnimate2");
      $("div#T .type3").toggleClass("rotateAnimateSlow1");
      $("div#T .type4").toggleClass("rotateAnimateSlow2");
      $("div#T").toggleClass("pause");

      $("div#T div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#U").mouseenter(function(){
    $("div#U .type1").toggleClass("rotateAnimate1");
    $("div#U .type2").toggleClass("rotateAnimate2");
    $("div#U .type3").toggleClass("rotateAnimateSlow1");
    $("div#U .type4").toggleClass("rotateAnimateSlow2");
    $("div#U").toggleClass("pause");

    $("div#U div").css('background-color', '#fff');
  });

  $("#U").mouseleave(function(){
    setTimeout(function(){
      $("div#U .type1").toggleClass("rotateAnimate1");
      $("div#U .type2").toggleClass("rotateAnimate2");
      $("div#U .type3").toggleClass("rotateAnimateSlow1");
      $("div#U .type4").toggleClass("rotateAnimateSlow2");
      $("div#U").toggleClass("pause");

      $("div#U div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#V").mouseenter(function(){
    $("div#V .type1").toggleClass("rotateAnimate1");
    $("div#V .type2").toggleClass("rotateAnimate2");
    $("div#V .type3").toggleClass("rotateAnimateSlow1");
    $("div#V .type4").toggleClass("rotateAnimateSlow2");
    $("div#V").toggleClass("pause");

    $("div#V div").css('background-color', '#fff');
  });

  $("#V").mouseleave(function(){
    setTimeout(function(){
      $("div#V .type1").toggleClass("rotateAnimate1");
      $("div#V .type2").toggleClass("rotateAnimate2");
      $("div#V .type3").toggleClass("rotateAnimateSlow1");
      $("div#V .type4").toggleClass("rotateAnimateSlow2");
      $("div#V").toggleClass("pause");

      $("div#V div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#W").mouseenter(function(){
    $("div#W .type1").toggleClass("rotateAnimate1");
    $("div#W .type2").toggleClass("rotateAnimate2");
    $("div#W .type3").toggleClass("rotateAnimateSlow1");
    $("div#W .type4").toggleClass("rotateAnimateSlow2");
    $("div#W").toggleClass("pause");

    $("div#W div").css('background-color', '#fff');
  });

  $("#W").mouseleave(function(){
    setTimeout(function(){
      $("div#W .type1").toggleClass("rotateAnimate1");
      $("div#W .type2").toggleClass("rotateAnimate2");
      $("div#W .type3").toggleClass("rotateAnimateSlow1");
      $("div#W .type4").toggleClass("rotateAnimateSlow2");
      $("div#W").toggleClass("pause");

      $("div#W div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#X").mouseenter(function(){
    $("div#X .type1").toggleClass("rotateAnimate1");
    $("div#X .type2").toggleClass("rotateAnimate2");
    $("div#X .type3").toggleClass("rotateAnimateSlow1");
    $("div#X .type4").toggleClass("rotateAnimateSlow2");
    $("div#X").toggleClass("pause");

    $("div#X div").css('background-color', '#fff');
  });

  $("#X").mouseleave(function(){
    setTimeout(function(){
      $("div#X .type1").toggleClass("rotateAnimate1");
      $("div#X .type2").toggleClass("rotateAnimate2");
      $("div#X .type3").toggleClass("rotateAnimateSlow1");
      $("div#X .type4").toggleClass("rotateAnimateSlow2");
      $("div#X").toggleClass("pause");

      $("div#X div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#Y").mouseenter(function(){
    $("div#Y .type1").toggleClass("rotateAnimate1");
    $("div#Y .type2").toggleClass("rotateAnimate2");
    $("div#Y .type3").toggleClass("rotateAnimateSlow1");
    $("div#Y .type4").toggleClass("rotateAnimateSlow2");
    $("div#Y").toggleClass("pause");

    $("div#Y div").css('background-color', '#fff');
  });

  $("#Y").mouseleave(function(){
    setTimeout(function(){
      $("div#Y .type1").toggleClass("rotateAnimate1");
      $("div#Y .type2").toggleClass("rotateAnimate2");
      $("div#Y .type3").toggleClass("rotateAnimateSlow1");
      $("div#Y .type4").toggleClass("rotateAnimateSlow2");
      $("div#Y").toggleClass("pause");

      $("div#Y div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#Z").mouseenter(function(){
    $("div#Z .type1").toggleClass("rotateAnimate1");
    $("div#Z .type2").toggleClass("rotateAnimate2");
    $("div#Z .type3").toggleClass("rotateAnimateSlow1");
    $("div#Z .type4").toggleClass("rotateAnimateSlow2");
    $("div#Z").toggleClass("pause");

    $("div#Z div").css('background-color', '#fff');
  });

  $("#Z").mouseleave(function(){
    setTimeout(function(){
      $("div#Z .type1").toggleClass("rotateAnimate1");
      $("div#Z .type2").toggleClass("rotateAnimate2");
      $("div#Z .type3").toggleClass("rotateAnimateSlow1");
      $("div#Z .type4").toggleClass("rotateAnimateSlow2");
      $("div#Z").toggleClass("pause");

      $("div#Z div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#zero").mouseenter(function(){
    $("div#zero .type1").toggleClass("rotateAnimate1");
    $("div#zero .type2").toggleClass("rotateAnimate2");
    $("div#zero .type3").toggleClass("rotateAnimateSlow1");
    $("div#zero .type4").toggleClass("rotateAnimateSlow2");
    $("div#zero").toggleClass("pause");

    $("div#zero div").css('background-color', '#fff');
  });

  $("#zero").mouseleave(function(){
    setTimeout(function(){
      $("div#zero .type1").toggleClass("rotateAnimate1");
      $("div#zero .type2").toggleClass("rotateAnimate2");
      $("div#zero .type3").toggleClass("rotateAnimateSlow1");
      $("div#zero .type4").toggleClass("rotateAnimateSlow2");
      $("div#zero").toggleClass("pause");

      $("div#zero div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#one").mouseenter(function(){
    $("div#one .type1").toggleClass("rotateAnimate1");
    $("div#one .type2").toggleClass("rotateAnimate2");
    $("div#one .type3").toggleClass("rotateAnimateSlow1");
    $("div#one .type4").toggleClass("rotateAnimateSlow2");
    $("div#one").toggleClass("pause");

    $("div#one div").css('background-color', '#fff');
  });

  $("#one").mouseleave(function(){
    setTimeout(function(){
      $("div#one .type1").toggleClass("rotateAnimate1");
      $("div#one .type2").toggleClass("rotateAnimate2");
      $("div#one .type3").toggleClass("rotateAnimateSlow1");
      $("div#one .type4").toggleClass("rotateAnimateSlow2");
      $("div#one").toggleClass("pause");

      $("div#one div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#two").mouseenter(function(){
    $("div#two .type1").toggleClass("rotateAnimate1");
    $("div#two .type2").toggleClass("rotateAnimate2");
    $("div#two .type3").toggleClass("rotateAnimateSlow1");
    $("div#two .type4").toggleClass("rotateAnimateSlow2");
    $("div#two").toggleClass("pause");

    $("div#two div").css('background-color', '#fff');
  });

  $("#two").mouseleave(function(){
    setTimeout(function(){
      $("div#two .type1").toggleClass("rotateAnimate1");
      $("div#two .type2").toggleClass("rotateAnimate2");
      $("div#two .type3").toggleClass("rotateAnimateSlow1");
      $("div#two .type4").toggleClass("rotateAnimateSlow2");
      $("div#two").toggleClass("pause");

      $("div#two div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#three").mouseenter(function(){
    $("div#three .type1").toggleClass("rotateAnimate1");
    $("div#three .type2").toggleClass("rotateAnimate2");
    $("div#three .type3").toggleClass("rotateAnimateSlow1");
    $("div#three .type4").toggleClass("rotateAnimateSlow2");
    $("div#three").toggleClass("pause");

    $("div#three div").css('background-color', '#fff');
  });

  $("#three").mouseleave(function(){
    setTimeout(function(){
      $("div#three .type1").toggleClass("rotateAnimate1");
      $("div#three .type2").toggleClass("rotateAnimate2");
      $("div#three .type3").toggleClass("rotateAnimateSlow1");
      $("div#three .type4").toggleClass("rotateAnimateSlow2");
      $("div#three").toggleClass("pause");

      $("div#three div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#four").mouseenter(function(){
    $("div#four .type1").toggleClass("rotateAnimate1");
    $("div#four .type2").toggleClass("rotateAnimate2");
    $("div#four .type3").toggleClass("rotateAnimateSlow1");
    $("div#four .type4").toggleClass("rotateAnimateSlow2");
    $("div#four").toggleClass("pause");

    $("div#four div").css('background-color', '#fff');
  });

  $("#four").mouseleave(function(){
    setTimeout(function(){
      $("div#four .type1").toggleClass("rotateAnimate1");
      $("div#four .type2").toggleClass("rotateAnimate2");
      $("div#four .type3").toggleClass("rotateAnimateSlow1");
      $("div#four .type4").toggleClass("rotateAnimateSlow2");
      $("div#four").toggleClass("pause");

      $("div#four div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#five").mouseenter(function(){
    $("div#five .type1").toggleClass("rotateAnimate1");
    $("div#five .type2").toggleClass("rotateAnimate2");
    $("div#five .type3").toggleClass("rotateAnimateSlow1");
    $("div#five .type4").toggleClass("rotateAnimateSlow2");
    $("div#five").toggleClass("pause");

    $("div#five div").css('background-color', '#fff');
  });

  $("#five").mouseleave(function(){
    setTimeout(function(){
      $("div#five .type1").toggleClass("rotateAnimate1");
      $("div#five .type2").toggleClass("rotateAnimate2");
      $("div#five .type3").toggleClass("rotateAnimateSlow1");
      $("div#five .type4").toggleClass("rotateAnimateSlow2");
      $("div#five").toggleClass("pause");

      $("div#five div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#six").mouseenter(function(){
    $("div#six .type1").toggleClass("rotateAnimate1");
    $("div#six .type2").toggleClass("rotateAnimate2");
    $("div#six .type3").toggleClass("rotateAnimateSlow1");
    $("div#six .type4").toggleClass("rotateAnimateSlow2");
    $("div#six").toggleClass("pause");

    $("div#six div").css('background-color', '#fff');
  });

  $("#six").mouseleave(function(){
    setTimeout(function(){
      $("div#six .type1").toggleClass("rotateAnimate1");
      $("div#six .type2").toggleClass("rotateAnimate2");
      $("div#six .type3").toggleClass("rotateAnimateSlow1");
      $("div#six .type4").toggleClass("rotateAnimateSlow2");
      $("div#six").toggleClass("pause");

      $("div#six div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#seven").mouseenter(function(){
    $("div#seven .type1").toggleClass("rotateAnimate1");
    $("div#seven .type2").toggleClass("rotateAnimate2");
    $("div#seven .type3").toggleClass("rotateAnimateSlow1");
    $("div#seven .type4").toggleClass("rotateAnimateSlow2");
    $("div#seven").toggleClass("pause");

    $("div#seven div").css('background-color', '#fff');
  });

  $("#seven").mouseleave(function(){
    setTimeout(function(){
      $("div#seven .type1").toggleClass("rotateAnimate1");
      $("div#seven .type2").toggleClass("rotateAnimate2");
      $("div#seven .type3").toggleClass("rotateAnimateSlow1");
      $("div#seven .type4").toggleClass("rotateAnimateSlow2");
      $("div#seven").toggleClass("pause");

      $("div#seven div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#eight").mouseenter(function(){
    $("div#eight .type1").toggleClass("rotateAnimate1");
    $("div#eight .type2").toggleClass("rotateAnimate2");
    $("div#eight .type3").toggleClass("rotateAnimateSlow1");
    $("div#eight .type4").toggleClass("rotateAnimateSlow2");
    $("div#eight").toggleClass("pause");

    $("div#eight div").css('background-color', '#fff');
  });

  $("#eight").mouseleave(function(){
    setTimeout(function(){
      $("div#eight .type1").toggleClass("rotateAnimate1");
      $("div#eight .type2").toggleClass("rotateAnimate2");
      $("div#eight .type3").toggleClass("rotateAnimateSlow1");
      $("div#eight .type4").toggleClass("rotateAnimateSlow2");
      $("div#eight").toggleClass("pause");

      $("div#eight div").css('background-color', '#5773ff');
    }, 700);
  });

  $("#nine").mouseenter(function(){
    $("div#nine .type1").toggleClass("rotateAnimate1");
    $("div#nine .type2").toggleClass("rotateAnimate2");
    $("div#nine .type3").toggleClass("rotateAnimateSlow1");
    $("div#nine .type4").toggleClass("rotateAnimateSlow2");
    $("div#nine").toggleClass("pause");

    $("div#nine div").css('background-color', '#fff');
  });

  $("#nine").mouseleave(function(){
    setTimeout(function(){
      $("div#nine .type1").toggleClass("rotateAnimate1");
      $("div#nine .type2").toggleClass("rotateAnimate2");
      $("div#nine .type3").toggleClass("rotateAnimateSlow1");
      $("div#nine .type4").toggleClass("rotateAnimateSlow2");
      $("div#nine").toggleClass("pause");

      $("div#nine div").css('background-color', '#5773ff');
    }, 700);
  });

});
