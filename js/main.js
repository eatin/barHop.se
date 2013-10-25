$(function(){

	// HIDING THE LEAFLET TAG IN BOTTOM RIGHT CORNER
	$('.leaflet-bottom.leaflet-right').hide();


	addEventListener( 'keyup', function(e) { 
	    
		if(e.which == 49) {
			var go2barLocation = L.divIcon({className: 'bar2go2',iconSize: [7, 7]});
			var nr = Math.floor((Math.random()*10)+1),
				str = routes[nr].markers,
				temp = [],
				temp = str.split(',');

				// while(temp.length) {
				//     // temp = temp.splice(1,2);
				//     console.log(temp.splice(0,2));
				// }

			$('.bar2go2').hide();
			var i,j,temparray,chunk = 2;
			for (i=0,j=temp.length; i<j; i+=chunk) {
				var	goHere = temp.slice(i,i+chunk),
					goHereLat = goHere[0],
					goHereLng = goHere[1];

				var go2 = L.marker([goHereLat, goHereLng], {icon: go2barLocation}).addTo(map);	
			}

	    	addScript(routes[nr].route);

		}
	});

});