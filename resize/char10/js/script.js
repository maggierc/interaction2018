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

$( window ).resize(function() {
  $(".box").css("background-color", getRandomColor());
});

// function setRandomColor() {
//   $(".box").css("background-color", getRandomColor());
// }




});
