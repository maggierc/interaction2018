$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});

	$('div > p').hover(function(){
		// $('.box').css('opacity','0');
		window.location.replace("../char24/index.html");
	});



});
