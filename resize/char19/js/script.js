$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});

	function myFunction(x) {
	    if (x.matches) { // If media query matches
				$( ".addcontainer" ).append( "<div class='addedbox'></div>" );
	    } else {
	    }
	}

	function myFunctionY(y) {
	    if (y.matches) { // If media query matches
				$( ".addcontainerHeight" ).append( "<div class='addedboxHeight'></div>" );
	    } else {
	    }
	}

	var x = window.matchMedia("(max-width: 1000px)")
	myFunction(x) // Call listener function at run time
	x.addListener(myFunction) // Attach listener function on state changes

	var y = window.matchMedia("(max-height: 500px)")
	myFunctionY(y) // Call listener function at run time
	y.addListener(myFunctionY) // Attach listener function on state changes


	//



});
