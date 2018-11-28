$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});

	$('div > p').hover(function(){
		$('.box').css('opacity','0');
		setTimeout(function () {
			window.location.replace("../char28/index.html");
		}, 500);
	});



});
