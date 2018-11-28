$(document).ready(function() {

	var boxOne = false;
	var boxTwo = false;
	var boxThree = false;
	var boxFour = false;


	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});

	// $('div > p').hover(function(){
	// 	$('body').css('opacity','0');
	// 	setTimeout(function () {
	// 		window.location.replace("../phrase1/index.html");
	// 	}, 2000);
	// });



	$(window).resize(function() {
		if (window.innerWidth>475 && window.innerWidth<480) {

		}


	});

});
