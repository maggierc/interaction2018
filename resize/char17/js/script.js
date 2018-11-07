$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});

	$( window ).resize(function() {
			$( ".addcontainer" ).append( "<div class='addedbox'></div>" );
			
	});




});
