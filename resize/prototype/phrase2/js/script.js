$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});

	$('div > p').hover(function(){
		$('body').css('opacity','0');
		setTimeout(function () {
			window.location.replace("../phrase1/index.html");
		}, 2000);
	});



});
