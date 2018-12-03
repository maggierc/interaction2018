$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});



	$('#startButton').click(function(){
		$('.introScreen').css("opacity", "0");

		$('.introScreen').css("display", "none");
	});

	$('#par1-indicator').mouseover(function(){
		$( "#par2-indicator" ).css( "opacity", "0" );
		$( "#par3-indicator" ).css( "opacity", "0" );
		$( "#par4-indicator" ).css( "opacity", "0" );
		$( "#par5-indicator" ).css( "opacity", "0" );
		$( "#par6-indicator" ).css( "opacity", "0" );
		$( "#par7-indicator" ).css( "opacity", "0" );
		$( "#par8-indicator" ).css( "opacity", "0" );
		$( "#par9-indicator" ).css( "opacity", "0" );
		$( "#par10-indicator" ).css( "opacity", "0" );
		$( "#par11-indicator" ).css( "opacity", "0" );

		$( "#par2" ).css( "opacity", "0" );
		$( "#par3" ).css( "opacity", "0" );
		$( "#par4" ).css( "opacity", "0" );
		$( "#par5" ).css( "opacity", "0" );
		$( "#par6" ).css( "opacity", "0" );
		$( "#par7" ).css( "opacity", "0" );
		$( "#par8" ).css( "opacity", "0" );
		$( "#par9" ).css( "opacity", "0" );
		$( "#par10" ).css( "opacity", "0" );
		$( "#par11" ).css( "opacity", "0" );


	});

	$('#par1-indicator').mouseout(function(){
		$( "#par2-indicator" ).css( "opacity", "1" );
		$( "#par3-indicator" ).css( "opacity", "1" );
		$( "#par4-indicator" ).css( "opacity", "1" );
		$( "#par5-indicator" ).css( "opacity", "1" );
		$( "#par6-indicator" ).css( "opacity", "1" );
		$( "#par7-indicator" ).css( "opacity", "1" );
		$( "#par8-indicator" ).css( "opacity", "1" );
		$( "#par9-indicator" ).css( "opacity", "1" );
		$( "#par10-indicator" ).css( "opacity", "1" );
		$( "#par11-indicator" ).css( "opacity", "1" );

		$( "#par2" ).css( "opacity", "1" );
		$( "#par3" ).css( "opacity", "1" );
		$( "#par4" ).css( "opacity", "1" );
		$( "#par5" ).css( "opacity", "1" );
		$( "#par6" ).css( "opacity", "1" );
		$( "#par7" ).css( "opacity", "1" );
		$( "#par8" ).css( "opacity", "1" );
		$( "#par9" ).css( "opacity", "1" );
		$( "#par10" ).css( "opacity", "1" );
		$( "#par11" ).css( "opacity", "1" );
	});


});
