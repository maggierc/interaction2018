$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );

	});

	var i = 0;
	var txt = 'A certain Wolf could not get enough to eat because of the watchfulness of the Shepherds. But one night he found a sheep skin that had been cast aside and forgotten. The next day, dressed in the skin, the Wolf strolled into the pasture with the Sheep. Soon a little Lamb was following him about and was quickly led away to slaughter. That evening the Wolf entered the fold with the flock. But it happened that the Shepherd took a fancy for mutton broth that very evening, and, picking up a knife, went to the fold. There the first he laid hands on and killed was the Wolf.';
	var speed = 80;

	window.onload = function() {
	  typeWriter();
	};


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("story").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


});
