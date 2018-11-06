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

var colors = ['#ddd', '#ccc', '#bbb', '#aaa', '#999', '#888', '#777', '#666', '#555', '#444', '#222', '#222', '#222', '#222', '#222', '#222'];

function randomOpacity(){
          var opac = 0;
             opac =  Math.random() * (2 - 0) + 0;;
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

	$(".name2").css("filter", 'blur('+randomOpacity()+'px)');
	$(".name3").css("filter", 'blur('+randomOpacity()+'px)');
	$(".name4").css("filter", 'blur('+randomOpacity()+'px)');
	$(".name5").css("filter", 'blur('+randomOpacity()+'px)');
	$(".name6").css("filter", 'blur('+randomOpacity()+'px)');
	$(".name7").css("filter", 'blur('+randomOpacity()+'px)');
	$("#par2").css("filter", 'blur('+randomOpacity()+'px)');
	$("#par3").css("filter", 'blur('+randomOpacity()+'px)');


});

// var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
//
// $('.post-content').each(function() {
//     $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);
// });




});
