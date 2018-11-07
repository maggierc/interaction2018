$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});


	function randPosX(){
		var bodyWidth = document.body.clientWidth;
		var randPosX = Math.floor((Math.random()*bodyWidth));

		return randPosX;
	}

	function randPosY() {
		var bodyHeight = document.body.clientHeight;
		var randPosY = Math.floor((Math.random()*bodyHeight));

		return randPosY
	}


	$( window ).resize(function() {
			$( ".addcontainer" ).append( "<div class='addedbox'></div>" );

		  $('.addedbox').css('left', randPosX());
		  $('.addedbox').css('top', randPosY());


	});




});
