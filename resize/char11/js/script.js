$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});

	function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomOpacity(){
          var opac = 0;
             opac =  Math.random() * (0.7 - 0) + 0;;
          return opac;
        }

$( window ).resize(function() {
	$("p#name1").css("color", getRandomColor());
	$("p#name2").css("color", getRandomColor());
	$("p#name3").css("color", getRandomColor());
	$("p#name4").css("color", getRandomColor());
	$("p#name5").css("color", getRandomColor());
	$("p#name6").css("color", getRandomColor());
	$("p#name7").css("color", getRandomColor());
	$("p#name1").css("opacity", randomOpacity());
	$("p#name2").css("opacity", randomOpacity());
	$("p#name3").css("opacity", randomOpacity());
	$("p#name4").css("opacity", randomOpacity());
	$("p#name5").css("opacity", randomOpacity());
	$("p#name6").css("opacity", randomOpacity());
	$("p#name7").css("opacity", randomOpacity());

});

// function setRandomColor() {
//   $(".box").css("background-color", getRandomColor());
// }




});
