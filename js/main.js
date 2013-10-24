$(function(){

	// HIDING THE LEAFLET TAG IN BOTTOM RIGHT CORNER
	$('.leaflet-bottom.leaflet-right').hide();


	addEventListener( 'keyup', function(e) { 
	    
		if(e.which == 49) {
			var nr = Math.floor((Math.random()*10)+1);
	    	addScript(routes[nr]);
		}
	});

});