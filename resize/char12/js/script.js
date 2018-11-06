$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});

// 	function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

var colors = ['#00b8a9', '#f8f3d4', '#ffde7d', '#ffffff', '#abedd8', '#8e0224'];

function randomOpacity(){
          var opac = 0;
             opac =  Math.random() * (0.8 - 0) + 0;;
          return opac;
        }

$( window ).resize(function() {
 	$("p#name1").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$("p#name2").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$("p#name3").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$("p#name4").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$("p#name5").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$("p#name6").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$("p#name7").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$("p#name1").css("opacity", randomOpacity());
	$("p#name2").css("opacity", randomOpacity());
	$("p#name3").css("opacity", randomOpacity());
	$("p#name4").css("opacity", randomOpacity());
	$("p#name5").css("opacity", randomOpacity());
	$("p#name6").css("opacity", randomOpacity());
	$("p#name7").css("opacity", randomOpacity());

});

// var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
//
// $('.post-content').each(function() {
//     $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);
// });




});
