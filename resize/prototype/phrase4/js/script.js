$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});

// for landing page to go away

	function landingPageChange(x) {
    if (x.matches) { // If media query matches
			$('.introScreen').css("display", "none");

    } else {
    }
}

	var x = window.matchMedia("(max-height: 425px) and (min-height: 415px)")
	landingPageChange(x) // Call listener function at run time
	x.addListener(landingPageChange) // Attach listener function on state changes

// for par1

var par1 = window.matchMedia("(max-width: 780px) and (min-width: 770px) and (max-height: 480px) and (min-height: 470px)")
par1Success(par1) // Call listener function at run time
par1.addListener(par1Success) // Attach listener function on state changes

function par1Success(x) {
	if (x.matches) { // If media query matches
		setTimeout(function() {			$('#par2-indicator').css("opacity", "1");

		}, 2000);

		setTimeout(function() {					$('#par1-indicator').css("opacity", "0");
	}, 4000);

	par2.addListener(par2Success)
	par1.removeListener(par1Success)

	} else {
	}
}



// for par2

var par2 = window.matchMedia("(max-width: 650px) and (min-width: 640px) and (max-height: 360px) and (min-height: 320px)")
par2Success(par2)

function par2Success(x) {
	if (x.matches) {
		setTimeout(function() {			$('#par3-indicator').css("opacity", "1");

		}, 2000);

		setTimeout(function() {					$('#par2-indicator').css("opacity", "0");
	}, 4000);

	par3.addListener(par3Success)
	par2.removeListener(par2Success)


	} else {
	}
}



// for par3

function par3Success(x) {
	if (x.matches) {
		setTimeout(function() {			$('#par4-indicator').css("opacity", "1");

		}, 2000);

		setTimeout(function() {					$('#par3-indicator').css("opacity", "0");
	}, 4000);

	par4.addListener(par4Success)
	par3.removeListener(par3Success)

	} else {
	}
}

	var par3 = window.matchMedia("(max-width: 1045px) and (min-width: 1030px) and (max-height: 210px) and (min-height: 195px)")
	par3Success(par3)

// for par4

function par4Success(x) {
	if (x.matches) {
		setTimeout(function() {			$('#par5-indicator').css("opacity", "1");

		}, 2000);

		setTimeout(function() {					$('#par4-indicator').css("opacity", "0");
	}, 4000);

	par5.addListener(par5Success)
	par4.removeListener(par4Success)

	} else {
	}
}

	var par4 = window.matchMedia("(max-width: 850px) and (min-width: 840px) and (max-height: 350px) and (min-height: 340px)")
	par4Success(par4)

// for par5


function par5Success(x) {
	if (x.matches) {
		setTimeout(function() {			$('#par6-indicator').css("opacity", "1");

		}, 2000);

		setTimeout(function() {					$('#par5-indicator').css("opacity", "0");
	}, 4000);

	par6.addListener(par6Success)
	par5.removeListener(par5Success)

	} else {
	}
}

	var par5 = window.matchMedia("(max-width: 950px) and (min-width: 940px) and (max-height: 400px) and (min-height: 390px)")
	par5Success(par5)

// for par6

function par6Success(x) {
	if (x.matches) {
		setTimeout(function() {			$('#par7-indicator').css("opacity", "1");

		}, 2000);

		setTimeout(function() {					$('#par6-indicator').css("opacity", "0");
	}, 4000);

	par7.addListener(par7Success)
	par6.removeListener(par6Success)

	} else {
	}
}

	var par6 = window.matchMedia("(max-width: 1100px) and (min-width: 1090px) and (max-height: 550px) and (min-height: 540px) ")
	par6Success(par6)

// for par7

function par7Success(x) {
	if (x.matches) {
		setTimeout(function() {			$('#par8-indicator').css("opacity", "1");

		}, 2000);

		setTimeout(function() {					$('#par7-indicator').css("opacity", "0");
	}, 4000);

	par8.addListener(par8Success)
	par7.removeListener(par7Success)

	} else {
	}
}

	var par7 = window.matchMedia("(max-width: 1000px) and (min-width: 990px) and (max-height: 570px) and (min-height: 560px)")
	par7Success(par7)

// for par8

function par8Success(x) {
	if (x.matches) {
		setTimeout(function() {			$('#par9-indicator').css("opacity", "1");

		}, 2000);

		setTimeout(function() {					$('#par8-indicator').css("opacity", "0");
	}, 4000);

	par9.addListener(par9Success)
	par8.removeListener(par8Success)

	} else {
	}
}

	var par8 = window.matchMedia("(max-width: 1355px) and (min-width: 1340px) and (max-height: 355px) and (min-height: 340px)")
	par8Success(par8)

// for par9

function par9Success(x) {
	if (x.matches) {
		setTimeout(function() {			$('#par10-indicator').css("opacity", "1");

		}, 2000);

		setTimeout(function() {					$('#par9-indicator').css("opacity", "0");
	}, 4000);

	par10.addListener(par10Success)
	par9.removeListener(par9Success)

	} else {
	}
}

	var par9 = window.matchMedia("(max-width: 585px) and (min-width: 580px) and (max-height: 305px) and (min-height: 295px)")
	par9Success(par9)

// for par10

function par10Success(x) {
	if (x.matches) {
		setTimeout(function() {			$('#par11-indicator').css("opacity", "1");

		}, 2000);

		setTimeout(function() {					$('#par10-indicator').css("opacity", "0");
	}, 4000);

	par11.addListener(par11Success)
	par10.removeListener(par10Success)

	} else {
	}
}

	var par10 = window.matchMedia("(max-width: 630px) and (min-width: 620px) and (max-height: 630px) and (min-height: 620px)")
	par10Success(par10)

// for par11

function par11Success(x) {
	if (x.matches) {
		setTimeout(function() {			$('#par1-indicator').css("opacity", "1");

		}, 2000);

		setTimeout(function() {					$('#par11-indicator').css("opacity", "0");
	}, 4000);

	par1.addListener(par1Success)
	par11.removeListener(par11Success)

	} else {
	}
}

	var par11 = window.matchMedia("(max-width: 430px) and (min-width: 420px) and (max-height: 530px) and (min-height: 520px)")
	par11Success(par11)




	$('#startButton').click(function(){
		$('.introScreen').css("opacity", "0");

		$('.introScreen').css("display", "none");
	});



	// $('#par1-indicator').mouseover(function(){
	// 	$( "#par2-indicator" ).css( "opacity", "0" );
	// 	$( "#par3-indicator" ).css( "opacity", "0" );
	// 	$( "#par4-indicator" ).css( "opacity", "0" );
	// 	$( "#par5-indicator" ).css( "opacity", "0" );
	// 	$( "#par6-indicator" ).css( "opacity", "0" );
	// 	$( "#par7-indicator" ).css( "opacity", "0" );
	// 	$( "#par8-indicator" ).css( "opacity", "0" );
	// 	$( "#par9-indicator" ).css( "opacity", "0" );
	// 	$( "#par10-indicator" ).css( "opacity", "0" );
	// 	$( "#par11-indicator" ).css( "opacity", "0" );
	//
	// 	$( "#par2" ).css( "opacity", "0" );
	// 	$( "#par3" ).css( "opacity", "0" );
	// 	$( "#par4" ).css( "opacity", "0" );
	// 	$( "#par5" ).css( "opacity", "0" );
	// 	$( "#par6" ).css( "opacity", "0" );
	// 	$( "#par7" ).css( "opacity", "0" );
	// 	$( "#par8" ).css( "opacity", "0" );
	// 	$( "#par9" ).css( "opacity", "0" );
	// 	$( "#par10" ).css( "opacity", "0" );
	// 	$( "#par11" ).css( "opacity", "0" );
	//
	//
	// });
	//
	// $('#par1-indicator').mouseout(function(){
	// 	$( "#par2-indicator" ).css( "opacity", "1" );
	// 	$( "#par3-indicator" ).css( "opacity", "1" );
	// 	$( "#par4-indicator" ).css( "opacity", "1" );
	// 	$( "#par5-indicator" ).css( "opacity", "1" );
	// 	$( "#par6-indicator" ).css( "opacity", "1" );
	// 	$( "#par7-indicator" ).css( "opacity", "1" );
	// 	$( "#par8-indicator" ).css( "opacity", "1" );
	// 	$( "#par9-indicator" ).css( "opacity", "1" );
	// 	$( "#par10-indicator" ).css( "opacity", "1" );
	// 	$( "#par11-indicator" ).css( "opacity", "1" );
	//
	// 	$( "#par2" ).css( "opacity", "1" );
	// 	$( "#par3" ).css( "opacity", "1" );
	// 	$( "#par4" ).css( "opacity", "1" );
	// 	$( "#par5" ).css( "opacity", "1" );
	// 	$( "#par6" ).css( "opacity", "1" );
	// 	$( "#par7" ).css( "opacity", "1" );
	// 	$( "#par8" ).css( "opacity", "1" );
	// 	$( "#par9" ).css( "opacity", "1" );
	// 	$( "#par10" ).css( "opacity", "1" );
	// 	$( "#par11" ).css( "opacity", "1" );
	// });


});
