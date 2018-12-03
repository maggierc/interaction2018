$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});



	$('#startButton').click(function(){
		$('.introScreen').css("opacity", "0");
	});

});
