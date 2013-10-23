$(function(){

	// HIDING THE LEAFLET TAG IN BOTTOM RIGHT CORNER
	$('.leaflet-bottom.leaflet-right').hide();


	addEventListener( 'keyup', function(e) { 
	    
		if(e.which == 37) {
	    	addScript(routes[0]);
		}
		if(e.which == 38) {
	    	addScript(routes[1]);
		}
		if(e.which == 39) {
	    	addScript(routes[2]);
		}
		if(e.which == 40) {
	    	addScript(routes[3]);
		}

	});

});