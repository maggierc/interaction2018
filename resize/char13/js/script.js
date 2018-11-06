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

var colors = ['#00b8a9', '#f8f3d4', '#ffde7d', '#f6416c'];

function randomOpacity(){
          var opac = 0;
             opac =  Math.random() * (0.8 - 0) + 0;;
          return opac;
        }

$( window ).resize(function() {
 	$(".name1").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$(".name2").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$(".name3").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$(".name4").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$(".name5").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$(".name6").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$(".name7").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$("#par1").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$("#par2").css('color', colors[Math.floor(Math.random() * colors.length)]);
	$("#par3").css('color', colors[Math.floor(Math.random() * colors.length)]);

	$(".name1").css("opacity", randomOpacity());
	$(".name2").css("opacity", randomOpacity());
	$(".name3").css("opacity", randomOpacity());
	$(".name4").css("opacity", randomOpacity());
	$(".name5").css("opacity", randomOpacity());
	$(".name6").css("opacity", randomOpacity());
	$(".name7").css("opacity", randomOpacity());


});

// var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
//
// $('.post-content').each(function() {
//     $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);
// });




});
